import { createContext, useState } from "react";
import YouTube from "react-youtube";
import PropTypes from "prop-types";
import Modal from 'react-modal';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 1,
    },
};

const FilmContext = createContext();

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const FilmProvider = ({ children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState("");

    const handleTrailer = async (id) => {
        setTrailerKey('');
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                },
            };
            const filmKey = await fetch(url, options);
            const data = await filmKey.json();
            if (data.results.length > 0) {
                setTrailerKey(data.results[0].key);
                setModalIsOpen(true);
            } else {
                console.log("No trailer found");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <FilmContext.Provider value={{ handleTrailer }}>
            {children}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
                contentLabel="Trailer Modal"
            >
                {trailerKey && <YouTube videoId={trailerKey} opts={opts} />}
            </Modal>
        </FilmContext.Provider>
    );
};

// Sửa 'PropTypes' thành 'propTypes'
FilmProvider.propTypes = {
    children: PropTypes.node,
};

export { FilmProvider, FilmContext };
