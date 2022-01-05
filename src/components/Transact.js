import React, { useState } from "react";
import { HiHand } from "react-icons/hi";


const Input = (props) => {
    const {placeholder, type, value, handleOnChange} = props;
    return (
        <input
            placeholder={placeholder}
            type={type}
            step={"0.0001"}
            value={value}
            onChange={(e) => handleOnChange(e, name)}
            className="my-2 w-full rounded-sm p-2 outline-none"
        />
    )
}



const Transact = () => {

    const handleOnChange = () =>{};

    const [walletConected, setWalletConected] = useState(true);

    const connectButton = walletConected
        ? <button className="bg-gradient-to-r from-[#208dcd] to-[#0c3696] text-white font-semibold w-42 py-2 px-7 my-20 rounded-full cursor-pointer hover:scale-105">Connect with Metamask</button>
        : null

    return (
        <div className="flex flex-col md:flex-row justify-center items-center my-28 ">
            <div className="w-1/2 flex justify-center">
                {connectButton}
            </div>
            <div className="w-1/2 flex justify-center">
                <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center glassmorphism">
                    <Input placeholder="Reciver address" name="addressTo" type="text" handleOnChange={handleOnChange} />
                    <Input placeholder="Amount (ETH)" name="amount" type="number" handleOnChange={handleOnChange} />
                    <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleOnChange={handleOnChange} />
                    <Input placeholder="Enter Message" name="message" type="text" handleOnChange={handleOnChange} />
                </div>
            </div>
        </div>
    )
}

export default Transact
