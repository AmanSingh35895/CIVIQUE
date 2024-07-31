import { Img, Text, Heading } from '../../components';
import React from "react";

export default function Header({ ...props }) {
    return (
        <header
            {...props}
            className={`${props.className} border-deep_purple-a200 border border-dashed rounded-[5px]`}
        >
            <div
                className="flex w-full items-end justify-between gap-5 rounded-[5px] bg-white-a700 px-[86px] py-4 md:flex-col md:px-5"
            >
                <Img
                    src="images/img_header_logo.png"
                    alt="Headerlogo"
                    className="h-[52px] w-[54px] self-center object-contain"
                />
                <ul className="!mb-3.5 flex flex-wrap gap-12">
                    <li>
                        <a href="#">
                            <Heading
                                size="headingxs"
                                as="h6"
                                className="!text-[16px] !font-bold !text-blue_gray-900_01"
                            >
                                Home
                            </Heading>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="cursor-pointer">
                            <Text
                                as="p"
                                className="!text-blue_gray-900_01 hover:font-bold"
                            >
                                Projects
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="cursor-pointer">
                            <Text
                                as="p"
                                className="!text-blue_gray-900_01 hover:font-bold"
                            >
                                Participate
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="cursor-pointer">
                            <Text as="p" className="!text-blue_gray-900_01 hover:font-bold">
                                Maps
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="cursor-pointer">
                            <Text as="p" className="!text-blue_gray-900_01 hover:font-bold">
                                About us
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="cursor-pointer">
                            <Text as="p" className="! text-blue_gray-900_01 hover:font-bold">
                                Contact
                            </Text>
                        </a>
                    </li>
                </ul>
                <div className="w-[5%] md:w-full">
                    <Img
                        src="images/img_avatar.png"
                        alt="Avatar"
                        className="h-[60px] w-full rounded-[30px] object-cover md:h-auto"
                    />
                </div>
            </div>
        </header>
    );
}
