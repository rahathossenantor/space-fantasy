import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="h-full bg-transparent text-gray-200 shadow-lg mx-5 md:mx-5 lg:mx-10 xl:mx-10">
            <div className="m-auto">
                <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 border-b border-[#2A0E61] pb-3">
                    <div className="z-50">
                        <h3 className="font-bold text-[16px] mb-2">Community</h3>
                        <p className="flex flex-row items-center cursor-pointer mb-1">
                            <FaYoutube />
                            <a href="https://www.youtube.com/channel/UCsceYYXWcfQUk6GMNqEZSdA" className="text-[15px] ml-[6px] cursor-pointer">Youtube</a>
                        </p>
                        <p className="flex flex-row items-center cursor-pointer mb-1">
                            <RxGithubLogo />
                            <a href="https://github.com/rahathossenantor" className="text-[15px] ml-[6px] cursor-pointer">Github</a>
                        </p>
                        <p className="flex flex-row items-center cursor-pointer mb-1">
                            <RxDiscordLogo />
                            <a href="https://www.facebook.com/rahathossenantor" className="text-[15px] ml-[6px] cursor-pointer">Facebook</a>
                        </p>
                    </div>
                    <div className="z-50">
                        <h3 className="font-bold text-[16px] mb-2">Social Media</h3>
                        <p className="flex flex-row items-center mb-1 cursor-pointer">
                            <FaYoutube />
                            <a href="https://www.instagram.com/rahathossenantor/" className="text-[15px] ml-[6px] cursor-pointer">Instagram</a>
                        </p>
                        <p className="flex flex-row items-center mb-1 cursor-pointer">
                            <RxGithubLogo />
                            <a href="https://twitter.com/rahathossen_" className="text-[15px] ml-[6px] cursor-pointer">Twitter</a>
                        </p>
                        <p className="flex flex-row items-center mb-1 cursor-pointer">
                            <RxDiscordLogo />
                            <a href="https://www.linkedin.com/in/rahathossenantor/" className="text-[15px] ml-[6px] cursor-pointer">Linkedin</a>
                        </p>
                    </div>
                    <div className="z-50">
                        <h3 className="font-bold text-[16px] mb-2">About</h3>
                        <p className="flex flex-row items-center mb-1 cursor-pointer">
                            <span className="text-[15px]">Become Sponsor</span>
                        </p>
                        <p className="flex flex-row items-center mb-1 cursor-pointer">

                            <span className="text-[15px]">Learning about me</span>
                        </p>
                        <p className="flex flex-row items-center mb-1 cursor-pointer">

                            <a className="text-[15px]" href="mailto:md.rahathossenantor@gmail.com">md.rahathossenantor@gmail.com</a>
                        </p>
                    </div>
                </div>

                <div className="my-3 text-[15px] text-center">
                    &copy; Md Rahat Hossen Antor 2023. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer