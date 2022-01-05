import React, { useState } from "react";
import { HiHand } from "react-icons/hi";


const Input = (props) => {
    const { placeholder, type, value, handleOnChange } = props;
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

    const handleOnChange = () => { };

    const [walletConected, setWalletConected] = useState(true);
    const adress = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F";
    const balance = 0.001384;

    const walletInfo = (<div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center glassmorphism">
        <div className="w-full h-2/5 flex flex-row justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="60px" height="80%" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                viewBox="0 0 784.37 1277.39">
                <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <g id="_1421394342400">
                        <g>
                            <polygon fill="#343434" fill-rule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 " />
                            <polygon fill="#8C8C8C" fill-rule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 " />
                            <polygon fill="#3C3C3B" fill-rule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 " />
                            <polygon fill="#8C8C8C" fill-rule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89 " />
                            <polygon fill="#141414" fill-rule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33 " />
                            <polygon fill="#393939" fill-rule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33 " />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        <div className="h-3/5 flex flex-col items-start justify-end">
            <div className="my-2">
                <div className="font-bold" >Balance:</div>
                <div>{balance} eth</div>
            </div>
            <div className=" break-all">
                <div className="font-bold">adress:</div>
                <div className="text-xs">{adress}</div>
            </div>
        </div>
    </div>)

    const sendButton = (<button className='bg-gradient-to-r from-[#208dcd] to-[#0c3696] text-white font-semibold py-2 px-7 mx-4 rounded-full cursor-pointer mt-4 hover:scale-105'>Send crypto</button>)

    const connectButton = walletConected
        ? walletInfo
        : <button className="bg-gradient-to-r from-[#208dcd] to-[#0c3696] text-white font-semibold w-42 py-2 px-7 my-20 rounded-full cursor-pointer hover:scale-105">Connect with Metamask</button>

    return (
        <div className="flex flex-col md:flex-row justify-center items-center my-28 ">
            <div className="w-1/2 h-[266px] flex justify-center">
                {connectButton}
            </div>
            <div className="w-1/2 flex justify-center">
                <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center glassmorphism">
                    <Input placeholder="Receiver address" name="addressTo" type="text" handleOnChange={handleOnChange} />
                    <Input placeholder="Amount (ETH)" name="amount" type="number" handleOnChange={handleOnChange} />
                    <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleOnChange={handleOnChange} />
                    <Input placeholder="Enter Message" name="message" type="text" handleOnChange={handleOnChange} />
                    {sendButton}
                </div>
            </div>
        </div>
    )
}

export default Transact
