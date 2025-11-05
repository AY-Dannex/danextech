import Logo3 from './assets/logo3.png'

function Loader ({progress}){
    return(
        <div className="min-h-screen w-full bg-[#e3fffd] flex flex-col justify-center items-center dark:bg-[#000]">
            <img src={Logo3} alt="" className='w-[80px] animate-pulse'/>
            <p className='text-[25px] font-medium mt-[10px] dark:text-white'>Loading...{progress}%</p>
        </div>
    );
}
export default Loader