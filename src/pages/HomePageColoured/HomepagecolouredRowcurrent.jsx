import { Link } from "react-router-dom";
import { Button, Text, Heading, Img } from "../../components";

import UserProfile from "../../components/UserProfile";

import React, { Suspense } from "react";

const data = [
  {
    userImage: "images/img_hospital.svg",
    userName: "Budget Transparency Webinar",
    userDescription:
      "Learn about the financial aspects of ongoing and upcoming projects. Join our webinar to understand budget allocations and promote transparent governance",
  },
  {
    userImage: "images/img_health_report.svg",
    userName: "Community Engagement Workshop",
    userDescription:
      "Join our interactive workshop to discuss local government initiatives, share ideas, and shape the future of urban development through participatory democracy",
  },
  {
    userImage: "images/img_money_paper.svg",
    userName: "Urban Planning Discussion Forum",
    userDescription:
      "Engage in discussions about city planning and development. Share your views on project timelines, document repositories, and influence tracking.",
  },
  {
    userImage: "images/img_thumbs_up.svg",
    userName: "Community Feedback Session",
    userDescription:
      "Join our session dedicated to collecting feedback on current and future projects. Help us create a city that reflects the needs of its residents",
  },
];

export default function HomepagecolouredRowcurrent() {
  return (
    <div className="mt-40 flex justify-end md:flex-col">
      <div className="flex w-[50%] flex-col items-start gap-14 md:w-full md:p-5 sm:gap-7">
        <div className="flex flex-col gap-16 self-stretch sm:gap-8">
          <div className="flex flex-col items-start gap-6">
            <Heading
              size="heading2xl"
              as="h3"
              className="w-[84%] !text-[48px] !font-bold capitalize leading-[64px] !text-blue_gray-900_01 md:w-full md: !text-[44px] sm:!text-[38px]"
            >
              Current Projects and Information
            </Heading>
            <Text as="p" className="leading-[26px] !text-gray-600_01">
              <>
              Stay updated on initiatives leading urban development, community engagement,<br /> and participatory democracy.

              </>
            </Text>
          </div>
          <div>
            <div className="mr-[120px] grid grid-cols-2 gap-4 gap-y-4 md:mr-0 md:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <UserProfile {...d} key={"gridloremipsum" + index} className="shadow-xs hover:shadow-xs" />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
        <Button color="gray_600" shape="square" className="min-w-[198px] font-bold">
        <Link to="/projectscolored">
          See All Projects{" "}
          </Link>
        </Button>
      </div>
      <div className="h-[1044px] w-[42%] bg-gray-300 md:p-5 flex flex-col"> 
            <Img src="images/Cimages/Home-CurrentProjects1.jpg" alt="CurrentProjectImage" className="h-[50%]"/>
            <Img src="images/Cimages/Home-CurrentProjects2.jpg" alt="CurrentProjectImage" className="h-[50%]"/>
      </div>
    </div>
  );
}