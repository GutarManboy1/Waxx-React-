import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Hero = ({heroData, setHeroCount, heroCount, playStatus, setPlayStatus}) => {
  return (
    <div className="mx-[120px] mt-[130px]">
      <div className="text-white text-[110px] font-medium leading-[130px] -mt-2.5">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="flex items-center gap-[50px] w-fit mt-[70px] py-1.5 px-2 pl-[30px] rounded-[60px] bg-white cursor-pointer">
        <p className="text-[#292929] text-xl font-medium">Explore Shops and Venues</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="mt-[70px] flex justify-between cursor-pointer">
        <ul className="flex items-center gap-[23px] list-none cursor-pointer">
          <li onClick={()=>setHeroCount(0)} className={heroCount===0? "w-[15px] h-[15px] bg-[orangered] rounded-[7.5px] cursor-pointer" : "w-[15px] h-[15px] bg-white rounded-[7.5px] cursor-pointer"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount===1? "w-[15px] h-[15px] bg-[orangered] rounded-[7.5px] cursor-pointer" : "w-[15px] h-[15px] bg-white rounded-[7.5px] cursor-pointer"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount===2? "w-[15px] h-[15px] bg-[orangered] rounded-[7.5px] cursor-pointer" : "w-[15px] h-[15px] bg-white rounded-[7.5px] cursor-pointer"}></li>
        </ul>
        <div className="flex items-center gap-[30px] -mt-5">
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus? pause_icon: play_icon} alt="" />
          <p className="text-white text-[19px]">See the video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero