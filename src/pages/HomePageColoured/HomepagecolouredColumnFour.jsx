import { Button, Text, Heading } from "../../components";
import React from "react";

export default function HomepagecolouredColumnFour() {
    return (
        <div className="mt-40 flex flex-col items-center">
            <div className="container-xs flex flex-col items-center gap-20 md:gap-[60px] md:p-5 sm:gap-10">
                <div className="mx-[264px] flex flex-col items-center gap-6 self-stretch md:mx-0">
                    <Heading
                        size="heading2xl"
                        as="h4"
                        className="!text-[48px] !font-bold capitalize ! text-blue_gray-900_01 md:!text-[44px] sm:!text-[38px]"
                    >
                        Upcoming Events
                    </Heading>
                    <Text as="p" className="w-full leading-[26px] !text-gray-600_01">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus magna enim id integer congue eu. Tempor urna
                        augue sed elit blandit euismod ut in egestas. Habitant eget ut ipsum s
                    </Text>
                </div>
                <div className="self-stretch">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4 md:flex-col">
                            <div className="flex w-full flex-col items-start justify-end bg-blue_gray-800_b2 px-10 py-[86px] md:py-5 sm:p-5">
                                <Heading
                                    size="heading2xl"
                                    as="h5"
                                    className="mt-16 !text-[48px] !font-bold capitalize leading-[64px] md:!text-[44px] sm:!text-[38px]"
                                >
                                    <>
                                        aaaaaaaaaaaaaaaa
                                        <br />
                                        aaaaaaaaaa
                                    </>
                                </Heading>
                                <Text as="p" className="mt-4 w-full leading-[26px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.{" "}
                                </Text>
                                <Button color="gray_600" shape="square" className="mt-10 min-w-[150px] font-bold">
                                    See More
                                </Button>
                            </div>
                            <div className="h-[590px] w-full bg-gray-300" />
                        </div>
                        <div className="flex gap-4 md:flex-col">
                            <div className="h-[590px] w-full bg-gray-300" />
                            <div className="h-[590px] w-full bg-gray-300" />
                        </div>
                    </div>
                </div>
                <Button color="gray_600" shape="square" className="min-w-[162px] font-bold">
                    Explore All
                </Button>
            </div>
        </div>
    );
}
