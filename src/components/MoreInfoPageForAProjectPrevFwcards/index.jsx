import { Img } from "./..";
import React from "react";
export default function MoreInfoPageForAProjectPrevFwcards({ ...props }) {
return (
<div {...props} className={`${props.className} flex items-center w-full rounded-[60px]`}>
<Img
src="images/img_screenshot_2023_07_07.png"
alt="Screenshot2023"
className="h-[220px] w-full rounded-[60px] object-cover"
/>
</div>
);
}