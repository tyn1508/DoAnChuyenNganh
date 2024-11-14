import PropTypes from "prop-types";
import { useState } from "react";

const Header = ({ onSearch }) => {
    const [textSearch, setSearch] = useState('');

    // Hàm handleSearch để xử lý tìm kiếm và xóa nội dung đã nhập
    const handleSearch = () => {
        onSearch(textSearch); // Gọi hàm tìm kiếm
        setSearch(''); // Xóa nội dung trong ô tìm kiếm
    };

    return (
        <div className="p-4 bg-black flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <button className="text-[40px] uppercase font-bold text-purple-500" onClick={handleSearch}>Film</button>
                <nav className="flex items-center space-x-4">
                    <a href="#" className="text-white">Phim Hot</a>
                    <a href="#" className="text-white">Phim Lẻ</a>
                    <a href="#" className="text-white">Phim Bộ</a>
                    <a href="#" className="text-white">Phim Mới</a>
                    <a href="#" className="text-white">FAG</a>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Tìm"
                    className="p-4 text-black rounded-md"
                    onChange={(e) => setSearch(e.target.value)}
                    value={textSearch}
                />
                <button className="p-2 text-white bg-purple-500 rounded-md" onClick={handleSearch}>Tìm Kiếm</button>
            </div>
        </div>
    );
}

Header.propTypes = {
    onSearch: PropTypes.func,
}

export default Header;
