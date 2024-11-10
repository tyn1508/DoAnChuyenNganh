import IconStar from "../assets/Star-full.png";
import Imgtemp from "../assets/Joker-temp1.jpg";
import IconPlay from "../assets/play.png"
const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-baner bg-no-repeat bg-cover relative" >
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-35" />
      <div className="w-full h-full flex items-center justify-center space-x-[40px] p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-300 rounded-md text-md py-1 px-3 ">
            TV Show
          </p>
          <div className="flex flex-col">
            <h2 className="text-white text-3xl">Joker: Điên có đôi</h2>
            <h2 className="text-white text-2xl opacity-50">Joker: Folie à Deux</h2>
            <div className="flex items-center space-x-3">
              <img src={IconStar} alt="star" className="w-8 h-8" />
              <h3 className="text-yellow-300 text-xl">9.8</h3>
            </div>
            <p className="text-white">“Joker: Folie à Deux” đưa Arthur Fleck đến trại tâm
              thần Arkham trong khi chờ xét xử cho những tội ác của hắn với tư cách là Joker.
              Trong lúc vật lộn với hai bản ngã của mình, Arthur không chỉ tìm thấy tình yêu
              đích thực mà còn khám phá ra âm nhạc luôn tồn tại trong con người hắn.
            </p>
            <div className="flex items-center space-x-3 py-3">
              <button className="p-4 text-white bg-slate-600 font-bold text-sm">Đánh giá</button>
              <button className="p-4 text-white bg-purple-500 font-bold text-sm">Xem phim</button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[300px] h-[500px] relative group cursor-pointer ">
            <img src={Imgtemp}
              alt="Joker-temp1"
              className="w-full h-full object-cover" />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={IconPlay} alt="play"
                className="w-16 h-16 relative z-20" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner
