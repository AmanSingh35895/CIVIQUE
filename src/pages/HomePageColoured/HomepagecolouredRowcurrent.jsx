import { Button, Text, Heading } from "../../components";

import UserProfile from "../../components/UserProfile";

import React, { Suspense } from "react";

const data = [
  {
    userImage: "images/img_hospital.svg",
    userName: "Lorem ipsum",
    userDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, the sed do eiusmod tempor elit et incididunt ut labore et dolore",
  },
  {
    userImage: "images/img_health_report.svg",
    userName: "Lorem Ipsum",
    userDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, the sed do eiusmod tempor elit et incididunt ut labore et dolore",
  },
  {
    userImage: "images/img_money_paper.svg",
    userName: "Lorem Ipsum",
    userDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, the sed do eiusmod tempor elit et incididunt ut labore et dolore",
  },
  {
    userImage: "images/img_thumbs_up.svg",
    userName: "Loren Ipsum",
    userDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, the sed do eiusmod tempor elit et incididunt ut labore et dolore",
  },
];

export default function HomepagecolouredRowcurrent() {
    return (
      <div className="mt-40 flex justify-end md:flex-col">
        <div className="flex w-[50%] flex-col items-start gap-14 md:w-full md:p-5 sm:gap-7">
          <div className="flex flex-col gap-16 self-stretch sm:gap-8">
            <div className="flex flex-col items-start gap-6">
              <Heading
                size="heading2x1"
                as="h3"
                className="w- [84%] !text-[48px] !font-bold capitalize leading-[64px] !text-blue_gray-900_01 md:w-full md: !text-[44px] sm:!text-[38px]"
              >
                Current Projects and Information
              </Heading>
              <Text as="p" className="leading-[26px] !text-gray-600_01">
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus ut condimentum <br />
                  feugiat at urna eu donec. Blandit suscipit ir company
                </>
              </Text>
            </div>
          </div>
        </div>
        <div>
          <div className="mr-[120px] grid grid-cols-2 gap-4 gap-y-4 md:mr-0 md:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserProfile {...d} key={"gridloremipsum" + index} className="shadow-xs hover:shadow-xs" />
              ))}
            </Suspense>
          </div>
          <Button color="gray_600" shape="square" className="min-w-[198px] font-bold">
            See All Projects{" "}
          </Button>
        </div>
        <div className="h-[1044px] w-[42%] bg-gray-300 md:p-5" />
      </div>
    );
  }