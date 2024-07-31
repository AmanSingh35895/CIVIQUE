import { Button, Text, Heading, Img } from "./..";

import React from "react";

export default function RiversideParkDevelopment({
  userImage = "images/img_1_52.png",
  title = "Riverside Park Development",
  description = "The Riverside Park Development project focuses on transforming the area along the city's riverbank into a vibrant public park. This",
  seeMoreButton = "See More",
  ...props
}) {
  return (
    <div {...props} className={ `${props.className} h-[590px] w-full md:h-auto relative`}>
      <Img src={userImage} alt="Image" className="mx-auto h-[590px] w-full flex-1 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 bg-blue_gray-800_b2 px-10 py-[86px] md:py-5 sm:p-5">
        <div className="mt-16 flex flex-col gap-4 sm:gap-4">
          <Heading
            size="heading2x1"
            as="h1"
            className="w-[94%] !text-[48px] !font-bold capitalize leading-[64px] sm:w-full sm:!text-[40px]"
          >
            {title}
          </Heading>
          <div className="flex flex-col items-start">
            <Text as="p" className="w-full leading-[26px] sm:w-full sm:text-[13px]">
              {description}
            </Text>
            <Button color="deep_orange_A700" shape="square" className="relative mt-[-12px] min-w-[150px] font-bold">
              {seeMoreButton}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}