import { Heading } from "../../components";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import React from "react";

export default function ContactUsPage() {
  return (
    <>
      {/* <Helmet>
        <title>Rishi Rishav's Application2</title>
        <meta
          name="description"
          content="web site created using create-react-app"
        />
      </Helmet> */}
      <div className="w-full bg-white-a700 h-screen overflow-hidden">
        <Header />
        <div className="flex flex-col items-center justify-center bg-blue_gray-800_cc py-36 md:py-5">
          <div className="container-xs mt-[-80px] flex flex-col items-start gap-6 md:p-5">
            <Heading size="heading3x1" as="h1" className="capitalize">
              Get In Touch
            </Heading>
            {/* <Text as="p" className="leading-[26px] ml-[40px]">
              <>
                Get in Contact with out team.
              </>
            </Text> */}
            <div className="bg-white rounded-lg p-6 shadow-sm w-[70%] md:w-1/2 xl:w-1/3">
              {/* <Heading
                size="heading2"
                as="h2"
                className="capitalize text-3xl font-bold text-blue_gray-900"
              >
                Get in Touch
              </Heading> */}
              <form className="flex flex-col items-center justify-center gap-6 mt-5 w-[80%]">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full !h-[40px] !p-2 !rounded-lg !border !border-white-a700 focus:!border-white-a700 focus:!shadow-sm focus:!shadow-blue_gray-800"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full !h-[40px] !p-2 !rounded-lg !border !border-white-a700 focus:!border-white-a700 focus:!shadow-sm focus:!shadow-blue_gray-800"
                />
                <textarea
                  placeholder="Message"
                  className="w-full p-2 rounded-lg !border !border-white-a700 focus:!border-white-a700 focus:!shadow-sm focus:!shadow-blue_gray-800 h-[88px]"
                />
                <button
                  type="submit"
                  className="bg-red-700 hover:bg-red-800 !text-white-a700 font-bold py-2 px-4 rounded-lg hover:!shadow-blue_gray-800 hover:!shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
