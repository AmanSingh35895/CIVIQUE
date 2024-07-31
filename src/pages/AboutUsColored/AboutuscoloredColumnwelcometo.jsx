import { Button, Text, Heading } from "../../components";
import UserHistorySection from "../../components/UserHistorySection";
import UserProfile2 from "../../components/UserProfile2";
import React, { Suspense } from "react";

const data = [
    { milCounterText: "50 mil+", localResidentText: "Local Resident" },
    { milCounterText: "3,2k", localResidentText: "Square KM" },
    { milCounterText: "8 mil+", localResidentText: "Foreign Visitors" },
    { milCounterText: "150+", localResidentText: "Tourist attractions" },
];

export default function AboutuscoloredColumnwelcometo() {
    return (
        <div className="mt-[120px] flex flex-col items-center gap-[120px] md:gap-[90px] sm:gap-[60px]">
            <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                <div className="h-[568px] w-[48%] bg-gray-300 md:p-5" />
                <div className="flex w-[46%] flex-col gap-4 md:w-full md:p-5">
                    <Heading size="heading2xl" as="h2" className="w-[74%] !text-[48px] !font-bold capitalize leading-[64px] !text-blue_gray-900_01 md:w-full md:!text-[44px] sm:!text-[38px]">
                        Welcome to Amazing Carolina City{" "}
                    </Heading>
                    <div className="flex flex-col items-start gap-8">
                        <Heading size="headingxs" as="h3" className="w-[74%] !text-[16px] capitalize leading-8 !text-gray-700 md:w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus magna enim id integer congue e
                            L
                        </Heading>
                        <Text as="p" className="w- [78%] leading-[26px] !text-gray-600_01 md:w-full">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem et lacoo accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo et quasi architecto beatae vitae dicta rem aperiam.
                        </Text>
                    </div>
                </div>
            </div>
            <div className="container-xs flex flex-col gap-[158px] md:gap-[118px] md:p-5 sm:gap-[79px]">
                <div className="ml-16 mr-20 flex gap-[178px] md:mx-0 md:flex-col">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                            <UserProfile2 {...d} key={"milestone" + index} className="w- [30%]" />
                        ))}
                    </Suspense>
                </div>
                <div className="flex items-center md:flex-col">
                    <div className="flex w-full flex-col items-start gap-8">
                        <Heading
                            size="heading2xl"
                            as="h4"
                            className="w- [80%] !text-[48px] !font-bold capitalize leading-[64px] !text-black-900 md:w-full md:!text-[44px] sm:!text-[38px]">
                            5 years in a row as the best and smartest city
                        </Heading>
                        <Text as="p" className="w- [80%] leading-[26px] ! text-gray-600_01 md:w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus magna enim id integer congue eu. Tempor
                            urna augue sed elit blandit euismod ut in egestas. Habitant eget ut ipsum sapien
                        </Text>
                        <Button color="deep_orange_A700" shape="square" className="min-w-[166px] font-bold">
                            Learn More
                        </Button>
                    </div>
                    <div className="flex w-full gap-4 md: flex-col">
                        <UserHistorySection />
                        <UserHistorySection sectionTitle="City Guide" />
                    </div>
                </div>
            </div>
        </div>
    );
}
