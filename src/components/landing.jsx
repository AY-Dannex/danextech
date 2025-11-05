import Show from "./animation";
import profilePic from '../assets/pic.webp'

function LandingPage (){
    return(
        <div className="w-full">
            <div className="mt-[70px] py-[50px] px-[20px] flex flex-col-reverse justify-between gap-10 items-center max-w-[1440px] mx-auto md:flex-row gap-15 py-[1px] justify-between lg:px-[30px]">
                <Show type='slideRight'>
                    <div className="max-w-[400px] md:max-w-[520px]">
                        <h1 className="theme [@media(max-width:460px)]:text-[50px] text-center  md:text-left text-[60px] lg:text-[80px] font-bold mt-[-30px] p-0 text-[#42c697] dark:text-[#e3fffd]">Frontend</h1>
                        <h1 className="theme [@media(max-width:460px)]:text-[50px] text-center  md:text-left text-[60px] lg:text-[80px] font-bold mt-[-30px] p-0 text-[#001220] dark:text-[#42c697]">Developer</h1>
                        <p className='theme text-center sm:text-left dark:text-[#fff]'>
                            Hey there, I'm Danex Tech, a frontend developer 
                            who loves turning ideas into smooth, interactive, 
                            and visually appealing web experience. 
                        </p>
            
                    </div>
                </Show>
                <Show type='slideLeft'>
                    <div className='h-[270px] max-w-[250px] [@media(min-width:470px)]:w-[250px] h-[250px] sm:h-[250px] w-[220px] md:h-[270px] w-[250px] lg:h-[320px] w-[290px] rounded-[20px] overflow-hidden'>
                        <img src={profilePic} alt="pic" className='w-full scale-350 mt-15 ml-1' />
                    </div>
                </Show>
            </div>
        </div>
    );
}
export default LandingPage