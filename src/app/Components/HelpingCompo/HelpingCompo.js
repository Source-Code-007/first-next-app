import React from 'react';
import { LottiePlayer } from 'lottie-react';
import myBannerLottie from 'public/lottieAnim/programming-computer.json';


const LottieAnimation = () => {


    return <LottiePlayer
        animationData={myBannerLottie}
        className="flex justify-center items-center"
        loop={true}
    />
};

export default LottieAnimation;
