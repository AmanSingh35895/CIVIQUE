import { Button, Text, Heading } from "../../components";
import React from "react";

export default function AboutuscoloredRowtakeonnew() {
  return (
    <div className="mt-40">
      <div className="flex flex-col items-center justify-center bg-gray-900_02 py-20 md:py-5">
        <div className="container-xs flex flex-col items-center px-14 md:p-5 md:px-5">
          <Heading
            size="heading2xl"
            as="h2"
            className="!text-[48px] ! font-bold capitalize md: !text-[44px] sm:!text-[38px]"
          >
            Take on New Challenges
          </Heading>
          <Text as="p" className="mt-6 self-stretch text-center leading-[26px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus magna enim id integer congue eu. Tempor urna
            augue sed elit blandit euismod ut in egestas. Habitant eget ut ipsum sapien senectus ut sed. Congue felis
            dolor nisi fringilla ut id erat feugiat nibh. Ultricies tincidunt morbi imperdiet elementum lorem risus
            sagittis sit et.
          </Text>
          <Button color="deep_orange_A700" shape="square" className="mt-14 min-w-[186px] font-bold">
            Join Volunteer
          </Button>
        </div>
      </div>
    </div>
  );
}