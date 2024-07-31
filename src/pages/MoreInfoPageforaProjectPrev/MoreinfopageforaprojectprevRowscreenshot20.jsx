import MoreInfoPageForAProjectPrevFwcards from "../../components/MoreInfoPageForAProjectPrevFwcards";

import React, { Suspense } from "react";

export default function MoreinfopageforaprojectprevRowscreenshot20() {
    return (
        <div className="mt-[120px]">
            <div className="grid grid-cols-4 gap-11 gap-y-[94px] overflow-auto rounded-[5px] border border-dashed border-gray-900_01 py-5 md:grid-cols-2 sm:grid-cols-1">
                <Suspense fallback={<div>Loading feed...</div>}>
                    {[...Array(8)].map((d, index) => (
                        <MoreInfoPageForAProjectPrevFwcards key={"fwgallery" + index} />
                    ))}
                </Suspense>
            </div>
        </div>
    );
}