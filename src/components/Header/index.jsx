import { Img, Text, Heading } from '../../components';
import React from "react";
import { useLocation ,Link} from 'react-router-dom';

export default function Header({ ...props }) {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <header
            {...props}
            className={`${props.className} border-deep_purple-a200 border border-dashed rounded-[5px]`}
        >
            <div
                className="flex w-full items-end justify-between gap-5 rounded-[5px] bg-white-a700 px-[86px] py-4 md:flex-col md:px-5"
            >
            <Link to="/homepagecoloured">
                <Img
                    src="images/img_header_logo.png"
                    alt="Headerlogo"
                    className="h-[52px] w-[54px] self-center object-contain"
                />
                </Link>
                <ul className="!mb-3.5 flex flex-wrap gap-12">
                    <li>
                        <a href="/homepagecoloured">
                            <Heading
                                size="headingxs"
                                as="h6"
                                className={`!text-[16px] ${currentPath === '/homepagecoloured' ? '!font-bold' : '!font-normal'} !text-blue_gray-900_01`}
                            >
                                Home
                            </Heading>
                        </a>
                    </li>
                    <li>
                        <a href="/projectscolored" className="cursor-pointer">
                            <Text
                                as="p"
                                className={`!text-blue_gray-900_01 ${currentPath === '/projectscolored' ? '!font-bold' : '!font-normal'}`}
                            >
                                Projects
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="/gisintegrationwindowcolored" className="cursor-pointer">
                            <Text as="p" className={`!text-blue_gray-900_01 ${currentPath === '/gisintegrationwindowcolored' ? '!font-bold' : '!font-normal'}`}>
                                Maps
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="/aboutuscolored" className="cursor-pointer">
                            <Text as="p" className={`!text-blue_gray-900_01 ${currentPath === '/aboutuscolored' ? '!font-bold' : '!font-normal'}`}>
                                About us
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="/contactus" className="cursor-pointer">
                            <Text
                                as="p"
                                className={`!text-blue_gray-900_01 ${currentPath === '/contactus' ? '!font-bold' : '!font-normal'}`}
                            >
                                Contact Us
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="/survey" className="cursor-pointer">
                            <Text
                                as="p"
                                className={`!text-blue_gray-900_01 ${currentPath === '/survey' ? '!font-bold' : '!font-normal'}`}
                            >
                                Survey
                            </Text>
                        </a>
                    </li>
                    {/* <li>
                        <a href="/contactus" className="cursor-pointer">
                            <Text as="p" className="! text-blue_gray-900_01 hover:font-bold">
                                Contact
                            </Text>
                        </a>
                    </li> */}
                </ul>
                <div className="w-[5%] md:w-full">
                  <a href="/userprofile">
                  <Img
                        src="images/img_avatar.png"
                        alt="Avatar"
                        className="h-[60px] w-full rounded-[30px] object-cover md:h-auto"
                    /></a>
                    
                </div>
            </div>
        </header>
    );
}
