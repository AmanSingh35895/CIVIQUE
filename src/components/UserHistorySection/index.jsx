import { Heading } from "./..";

import React from "react";

export default function UserHistorySection({ sectionTitle = "Our History", ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-end w-[50%] md:w-full p-8 sm:p-5 bg-gray-900_99`}
    >
      <Heading size="headingxl" as="h2" className="mt-[368px] !text-[32px] capitalize">
        {sectionTitle}
      </Heading>
    </div>
  );
}