import { Helmet } from "react-helmet";

import { Button, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HighlightedProjects from "../../components/HighlightedProjects";
import HomepagecolouredColumnEight from "./HomepagecolouredColumnEight";
import HomepagecolouredColumnFour from "./HomepagecolouredColumnFour";
import HomepagecolouredRowcurrent from "./HomepagecolouredRowcurrent";
import HomepagecolouredRowhighlighted from "./HomepagecolouredRowhighlighted";
import React, { Suspense } from "react";

const data = [
    {
        highlightedText: "Highlighted Projects",
        descriptionText:
            "Community engagement and participatory democracy transformed this area into a thriving urban development.",
        moreInfoText: "More info ",
    },
    {
        highlightedText: "Current Projects",
        descriptionText:
            "Local governments are involving communities in urban planning for transparency and sustainability.",
        moreInfoText: "More info ",
    },
    {
        highlightedText: "Community Feedback",
        descriptionText:
            "Community feedback shapes urban development projects through participatory democracy and public consultation",
        moreInfoText: "More info ",
    },
    {
        highlightedText: "Upcoming Events",
        descriptionText:
            "Join community events, have a say in local government decisions, and shape city planning projects",
        moreInfoText: "More info ",
    },
];

export default function HomePageColouredPage() {
    return (
        <>
            {/* <Helmet>
                <title>Rishi Rishav&#39;s Application2</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet> */}
            <div className="w-full bg-white-a700">
                <Header />
                <div className="flex flex-col gap-44 md:gap-[132px] sm:gap-[88px]">
                    <div>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col items-center self-stretch bg-blue_gray-800_cc py-[164px] md:py-5">
                                <div className="container-xs mb-[164px] flex flex-col items-start md:p-5">
                                    <Heading size="heading3x1" as="h1" className="capitalize leading-[96px]">
                                        <>
                                            join the movement
                                            <br />
                                            make your voice heard
                                        </>
                                    </Heading>
                                    <Text as="p" className="mt-6 leading-[26px]">
                                        <>
                                            Engage with your community, share your ideas, and work towards building <br />a more inclusive,
                                            sustainable future for all.
                                        </>
                                    </Text>
                                    <Button color="gray_600" shape="square" className="mt-14 min-w-[166px] font-bold">
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                            <div className="container-xs relative mt-[-106px] md:p-5">
                                <div className="flex gap-4 md:flex-col">
                                    <Suspense fallback={<div>Loading feed...</div>}>
                                        {data.map((d, index) => (
                                            <HighlightedProjects {...d} key={"listiconone" + index} className="shadow-xs hover:shadow-xs" />
                                        ))}
                                    </Suspense>
                                </div>
                            </div>
                        </div>
                        <HomepagecolouredRowhighlighted />
                        <HomepagecolouredRowcurrent />
                        <HomepagecolouredColumnFour />
                    </div>
                    <HomepagecolouredColumnEight />
                </div>
                <Footer className="mt-[138px]" />
            </div>
        </>
    );
}
