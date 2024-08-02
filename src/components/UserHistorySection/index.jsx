import React from "react";

export default function UserHistorySection({ image, ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-end w-[50%] md:w-full p-8 sm:p-5 bg-gray-900_99`}
    >
      <img src={image} alt="userhistory" className="w-full h-full object-cover"/>
    </div>
  );
}