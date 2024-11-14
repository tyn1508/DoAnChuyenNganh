import { useState, useEffect } from "react"
import Header from "./components/Header"
import Banner from "./components/Banner"
import ListFilm from "./components/ListFilm"
import SearchFilm from "./components/SearchFilm"
import { FilmProvider } from "./context/FilmProvider"

// import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const [film, setFilm] = useState([]);
  const [toprate, setTopRate] = useState([]);
  const [searchFilm, setSearchFilm] = useState([]);

  const handleSearch = async (searchVal) => {
    setSearchFilm([])
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        }
      };
      const searchFilm = await fetch(url, options);
      const data = await searchFilm.json();
      setSearchFilm(data.results)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    const fetchFilm = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        }
      };
      const url1 = "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
      const url2 = "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1";

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ])
      const data1 = await res1.json();
      const data2 = await res2.json();

      setFilm(data1.results);
      setTopRate(data2.results);
    };

    fetchFilm();
  }, [])
  return (
    <>
      <FilmProvider>
        <div className="bg-black pb-1 ">
          <Header onSearch={handleSearch} />
          <Banner />
          {searchFilm.length > 0 ? (<SearchFilm title={"ket qua tim duoc "} data={searchFilm} />) : (
            <>
              <ListFilm title={"Phim đề cử"} data={film} />
              <ListFilm title={"Phim hot"} data={toprate} />
            </>
          )}
        </div>
      </FilmProvider>
    </>
  )
}

export default App
