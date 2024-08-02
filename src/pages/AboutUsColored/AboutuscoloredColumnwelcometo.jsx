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
        <div className="h-[568px] w-[48%] bg-gray-300 md:p-5">
          <img src="/images/Cimages/about1.jpg" alt="" />
        </div>
        <div className="flex w-[46%] flex-col gap-5 md:w-full md:p-5">
          <Heading
            size="heading2xl"
            as="h2"
            className="w-[74%] !text-[48px] !font-bold capitalize leading-[64px] !text-blue_gray-900_01 md:w-full md:!text-[44px] sm:!text-[38px]"
          >
            Welcome to Civique
          </Heading>
          <div className="flex flex-col items-start gap-8">
            <Heading
              size="headingxs"
              as="h3"
              className="w-[74%] !text-[16px] capitalize leading-8 !text-gray-700 md:w-full"
            >
              At Civique, we believe in the power of community involvement and
              transparent urban planning. Our mission is to provide a platform
              where citizens and local governments can collaborate to shape the
              future of their cities. We are committed to fostering an inclusive
              and engaging environment that empowers individuals to participate
              actively in urban development.
            </Heading>
            <Text
              as="p"
              className="w- [78%] leading-[26px] !text-gray-600_01 md:w-full"
            >
              With our innovative tools and features, Civique ensures that every
              voice is heard <br /> and valued. Join us to build sustainable,
              vibrant, and resilient cities together.
            </Text>
          </div>
        </div>
      </div>
      <div className="container-xs flex flex-col gap-[158px] md:gap-[118px] md:p-5 sm:gap-[79px]">
        <div className="ml-16 mr-20 flex gap-[178px] md:mx-0 md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile2
                {...d}
                key={"milestone" + index}
                className="w- [30%]"
              />
            ))}
          </Suspense>
        </div>
        <div className="flex items-center md:flex-col">
          <div className="flex w-full flex-col items-start gap-8 mr-2">
            <Heading
              size="heading2xl"
              as="h4"
              className="w-[80%] !text-[48px] !font-bold capitalize leading-[64px] !text-black-900 md:w-full md:!text-[44px] sm:!text-[38px]"
            >
              Leading the Way in <br /> Urban Innovation
            </Heading>
            <Text
              as="p"
              className="w- [80%] leading-[26px] !text-gray-600_01 md:w-full"
            >
              Civique: Setting the Standard for Citizen Engagement and <br />{" "}
              Transparent Urban Planning! Celebrating 5 Years of <br />{" "}
              Excellence and Community Collaboration!
            </Text>
            <Button
              color="deep_orange_A700"
              shape="square"
              className="min-w-[166px] font-bold"
            >
              Learn More
            </Button>
          </div>
          <div className="flex w-full gap-4 md:flex-col">
            <UserHistorySection image="/images/Cimages/ourhistory.jpg" />
            <UserHistorySection image="/images/Cimages/aboutus.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
