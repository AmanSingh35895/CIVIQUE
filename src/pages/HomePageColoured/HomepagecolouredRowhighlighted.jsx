import { Button, Text, Heading, Img } from "../../components";
import React from "react";

export default function HomepagecolouredRowhighlighted() {
  return (
    <div className="mt-[62px] flex items-center justify-between gap-5 md:flex-col">
      <div className="flex w-[48%] justify-center bg-gray-300 px-14 py-64 md:w-full md:p-5">
        <Button color="white_A700" size="1g" shape="circle" className="w- [56px] ! rounded-[28px]">
          <Img src="images/img_round_av_play_arrow.svg" />
        </Button>
      </div>
      <div className="flex w-[46%] flex-col items-start md:w-full md:p-5">
        <Heading
          size="heading2xl"
          as="h2"
          className="!text-[48px] !font-bold capitalize leading-[64px] !text-blue_gray-900_01 md:!text-[44px] sm:!text-[38px]"
        >
          <>
            Highlighted regional
            <br />
            projects{" "}
          </>
        </Heading>
        <Text as="p" className="mt-6 w-[78%] leading-[26px] ! text-gray-600_01 md:w-full">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem et lacoo accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo et quasi architecto beatae vitae dicta rem aperiam.
        </Text>
        <Button color="gray_600" shape="square" className="mt-14 min-w-[238px] font-bold">
          Learn More about us
        </Button>
      </div>
    </div>
  );
}