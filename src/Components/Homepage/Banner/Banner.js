'use client'
import LottiePlayer from "lottie-react";
import myBannerLottie from "public/lottieAnim/programming-computer.json";

const Banner = () => {
    return (
        <div className='bg-[#0E2954] text-white'>
            <div className='h-screen my-container grid items-center grid-cols-2 '>
                <div className='space-y-5 pr-5'>
                    <h2 className='my-title'><span className='primary-color'>Next JS</span> is fun!</h2>
                    <p className="text-slate-300">Any fool can write programme that computer can understand. Good programmer can write programme that human can understand</p>
                    <button className="cmn-btn-one">More details</button>
                    <button className="cmn-btn-one-outline mx-2">View demo</button>
                </div>
                <LottiePlayer animationData={myBannerLottie} className="flex justify-center items-center" loop={true} />
            </div>
        </div>
    );
};


export default Banner;