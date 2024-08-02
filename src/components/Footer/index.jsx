import { Text, Heading, Img } from "./..";
import React from "react";
export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-end py-[26px] sm:py-5 bg-blue_gray-800_01`}
    >
      <div className="container-xs mt-8 flex justify-center md:p-5">
        <div className="flex w-[94%] items-start justify-between gap-5 md:w-full md:flex-col">
          <div className="flex w-[24%] flex-col items-start self-center md:w-full">
            <div className="flex rounded-[10px] bg-white-a700 p-2">
              <Img
                src="images/img_logo_civique.png"
                alt="Logocivique"
                className="h-[48px] w-[48px] object-cover"
              />
            </div>
            <Text as="p" className="mt-7 w-full leading-[26px]">
              Empowering communities worldwide with innovative urban planning
              solutions. Join users in shaping our cities for a sustainable
              future
            </Text>
            <Heading
              size="headingxs"
              as="h6"
              className="mt-[92px] !text-[16px] !font-bold"
            >
              Copyright claim
            </Heading>
          </div>
          <div className="mt-3 flex w-[64%] items-start justify-between gap-6 md:w-full md:flex-col">
            <div className="flex w-[40%] flex-col items-start gap-[34px] md:w-full">
              <Heading
                as="h4"
                className="!text-[24px] capitalize md:!text-[22px]"
              >
                Get in Touch
              </Heading>
              <ul className="flex flex-col items-start">
                <li>
                  <a href="#">
                    <div className="flex gap-4">
                      <Img
                        src="images/img_linkedin.svg"
                        alt="Linkedin"
                        className="h-[24px] w-[24px]"
                      />
                      <Text as="p">address</Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className=" mt-6 ml-[3px] flex gap-4">
                      <Img
                        src="images/img_lock.svg"
                        alt="Lock"
                        className="h-[24px] w-[24px]"
                      />
                      <Text as="p">email</Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="mt-6 ml-[3px] flex gap-4">
                      <Img
                        src="images/img_call.svg"
                        alt="Call"
                        className="h-[24px] w-[24px]"
                      />
                      <Text as="p">tel</Text>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <ul className="flex w-[50%] flex-col items-start self-center md:w-full">
              <li>
                <a href="#" className="md:!text-[22px]">
                  <Heading as="h4" className="!text-[24px] capitalize">
                    Service & Information
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#" className="mt-[34px]">
                  <Text as="p">About Carolina</Text>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-[18px]"
                >
                  <Text as="p">COVID-19</Text>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4"
                >
                  <Text as="p">Health</Text>
                </a>
              </li>
              <li>
                <a href="#" className="mt-[18px]">
                  <Text as="p">Money & Tax</Text>
                </a>
              </li>
              <li>
                <a href="#" className="mt-4">
                  <Text as="p">Vote & Election</Text>
                </a>
              </li>
            </ul>
            <ul className="flex flex-col items-start w-[40%] md:w-full">
              <li>
                <a href="#" className="md:!text-[22px]">
                  <Heading as="h4" className="!text-[24px] capitalize">
                    Quick Links
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#" className="mt-8">
                  <Text as="p">Latest News</Text>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-[18px]"
                >
                  <Text as="p">Events</Text>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-[18px]"
                >
                  <Text as="p">Departments</Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
