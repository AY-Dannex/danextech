import Logo3 from './assets/logo3.png'

function Loader (){
    return(
        <div className="min-h-screen w-full bg-[#e3fffd] flex flex-col justify-center items-center dark:bg-[#000]">
            <img src={Logo3} alt="" className='w-[80px] animate-pulse'/>
        </div>
    );
}
export default Loader