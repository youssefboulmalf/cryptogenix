import phone from '../img/phone.png'

const Header = () =>{

    return(
        <div className="w-full p-5 flex flex-row justify-center items-center md:p-12 xl:p-40">
            <div className="w-full p-3 flex flex-col md:w-1/2">
                <h1 className="text-3xl font-extrabold sm: text-5xl text-white my-5">Deposit your crypto to anyone, anywhere.</h1>
                <p className=" text-lg sm:text-xl text-white my-5 font-extrabold ">Send crypto all over the word with CryptoGenix. Fast, smooth and reliable.</p>
                <button className="bg-gradient-to-r from-[#208dcd] to-[#0c3696] text-white font-semibold w-52 py-4 px-7 my-20 rounded-full cursor-pointer hover:scale-105">Make your deposit</button>
            </div>
            <div className="hidden md:flex w-1/2 p-3 w-[500px] flex flex-col sm:hidden">
                <img src={phone.src}></img>
            </div>
        </div>
    )

}
export default Header