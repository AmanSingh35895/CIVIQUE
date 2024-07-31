import { Text, Heading } from "../../components";
import CaregiverProfile from "../../components/CaregiverProfile";
import React, { Suspense } from "react";

const data = [
    {
        headlineText: "Caregivers are essential workers. It's time we recognize them as such",
        dateText: "14 Feb",
        categoryText: "News",
        descriptionText: (
            <>
                Lorem ipsum dolor sit amet, consec tetur adipis
                <br />
                cing elit, sed do eiusmod...
            </>
        ),
        readMoreLink: "Read More",
    },
    {
        headlineText: "Caregivers are essential workers. It's time we recognize them as such",
        dateText: "14 Feb",
        categoryText: "News",
        descriptionText: (
            <>
                Lorem ipsum dolor sit amet, consec tetur adipis
                <br />
                cing elit, sed do eiusmod...
            </>
        ),
        readMoreLink: "Read More",
    },
    {
        headlineText: "Caregivers are essential workers. It&#39;s time we recognize them as such",
        dateText: "14 Feb",
        categoryText: "News",
        descriptionText: (
            <>
                Lorem ipsum dolor sit amet, consec tetur adipis

                < br />

                cing elit, sed do eiusmod...

            </>

        ),
        readMoreLink: "Read More",
    },
];

export default function HomepagecolouredColumnEight() {
    return (
        <div className="flex flex-col items-center">
            <div className="container-xs flex flex-col gap-20 md:gap-[60px] md:p-5 sm:gap-10">
                <div className="mx-[264px] flex flex-col items-center gap-6 md:mx-0">
                    <Heading
                        size="heading2xl"
                        as="h2"
                        className="!text-[48px] ! font-bold capitalize ! text-blue_gray-900_01 md:!text-[44px] sm:!text-[38px]"
                    >

                        Community Feedback

                    </Heading>

                    <Text as="p" className="w-full leading-[26px] !text-gray-600_01">
                        augue sed elit blandit euismod ut in egestas. Habitant eget ut ipsum s
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus magna enim id integer congue eu. Tempor urna
                        62
                    </Text>

                </div>
                <div className="flex gap-4 md:flex-col">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                            <CaregiverProfile {...d} key={"listcaregiversa" + index} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}