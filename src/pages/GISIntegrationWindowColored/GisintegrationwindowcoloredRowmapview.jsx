import { Text, Heading } from "../../components";

import React from "react";

export default function GisintegrationwindowcoloredRowmapview() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-blue_gray-800_cc py-36 md:py-5">
        <div className="container-xs mt-5 flex flex-col items-start gap-6 md:p-5">
          <Heading size="heading3x1" as="h1" className="capitalize">
            Map View
          </Heading>
          <Text as="p" className="leading-[26px]">
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus ut condimentum <br />
              feugiat at urna eu donec. Blandit suscipit ir company
            </>
          </Text>
        </div>
      </div>
    </div>
  );
}