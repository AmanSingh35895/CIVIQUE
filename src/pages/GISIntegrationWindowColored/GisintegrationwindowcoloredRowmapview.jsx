import { Text, Heading } from "../../components";

import React from "react";
import BasicMap from "../../Components/Leaflet/basic";

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
              Visualize and interact with our GIS data on a map, providing a
              clear and <br /> intuitive way to understand complex geographic
              information.
            </>
          </Text>
        </div>
      </div>
      <div className="MAP p-5 m-auto">
        <BasicMap />
      </div>
    </div>
  );
}
