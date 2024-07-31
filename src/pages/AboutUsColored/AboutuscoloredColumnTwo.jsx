import { ChipView, Heading } from "../../components";

import React from "react";

export default function AboutuscoloredColumnTwo() {
    const [chipoptions4, setChipOptions4] = React.useState(() => [
        { value: 1, label: `fb` },
        { value: 2, label: `ig` },
        { value: 3, label: `tw` },
        { value: 4, label: `be` },
    ]);
    const [selectedChipOptions4, setSelectedChipOptions4] = React.useState([]);
    const [chipoptions3, setChipOptions3] = React.useState(() => [
        { value: 1, label: `fb` },
        { value: 2, label: `ig` },
        { value: 3, label: `tw` },
        { value: 4, label: `be` },
    ]);
    const [selectedChipoptions3, setSelectedChipoptions3] = React.useState([]);
    const [chipoptions2, setChipOptions2] = React.useState(() => [
        { value: 1, label: `fb` },
        { value: 2, label: `ig` },
        { value: 3, label: `tw` },
        { value: 4, label: `be` },
    ]);
    const [selectedChipOptions2, setSelectedChipOptions2] = React.useState([]);
    const [chipoptions1, setChipOptions1] = React.useState(() => [
        { value: 1, label: `fb` },
        { value: 2, label: `ig` },
        { value: 3, label: `tw` },
        { value: 4, label: `be` },
    ]);
    const [selectedChipOptions1, setSelectedChipOptions1] = React.useState([]);
    const [chipoptions, setChipoptions] = React.useState(() => [
        { value: 1, label: `fb` },
        { value: 2, label: `ig` },
        { value: 3, label: `tw` },
        { value: 4, label: `be` },
    ]);
    const [selectedChipoptions, setSelectedChipoptions] = React.useState([]);
    return (
        <div className="mt-40 flex flex-col items-center">
            <div className="container-xs flex flex-col gap-14 md:p-5 sm:gap-7">
                <div className="flex flex-wrap items-center justify-between gap-5">
                    <Heading
                        size="heading2xl"
                        as="h2"
                        className="!text-[48px] !font-bold capitalize !text-blue_gray-900_01 md:!text-[44px] sm:!text-[38px]"
                    >
                        Meet City Council
                    </Heading>
                    <Heading
                        as="h3"
                        className="mb-2.5 self-end !text-[24px] capitalize !text-deep_orange-a700 md:!text-[22px]"
                    >
                        Explore All
                    </Heading>
                </div>
                <div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4 md:flex-col">
                            <div className="w-full bg-gray-300_01">
                                <div className="mt-[470px] flex flex-col items-start justify-center gap-[22px] bg-gray-900_02 py-8 pl-[88px] pr-14 md:px-5 sm:p-5">
                                    <Heading
                                        as="h4"
                                        className="ml-11 !text-[24px] capitalize md:ml-0 md:!text-[22px]"
                                    >
                                        Jono Sape
                                    </Heading>
                                    <ChipView
                                        options={chipoptions}
                                        setoptions={setChipoptions}
                                        values={selectedChipoptions}
                                        setValues={setSelectedChipoptions}
                                        className="flex w- [88%] flex-wrap gap-4">
                                        {(option) => (
                                            <React.Fragment key={option.index}>
                                                {option.isSelected ? (
                                                    <div
                                                    >
                                                        onclick={option.toggle}
                                                        className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[20px] border border-solid border-white-a76
                                                        <span>{option.label}</span>
                                                    </div>
                                                ) : (
                                                    <div
                                                    >
                                                        onclick={option.toggle}
                                                        className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center rounded-[20px] border border-solid border-white-a700 px-2.5 text-center
                                                        <span>{option.label}</span>
                                                    </div>
                                                )}
                                            </React.Fragment>
                                        )}
                                    </ChipView>
                                </div>
                            </div>
                            <div className="w-full bg-gray-300_01">
                                <div className="mt-[470px] flex flex-col items-start justify-center gap-[22px] bg-gray-900_02 py-8 pl-[88px] pr-14 md:px-5 sm:p-5">
                                    <Heading as="h5" className="ml-12 !text-[24px] capitalize md:ml-0 md:!text-[22px]">
                                        Joni Zhak
                                    </Heading>
                                    <ChipView
                                    >
                                        options={chipoptions1}
                                        setoptions={setChipOptions1}
                                        values={selectedChipOptions1}
                                        setValues={setSelectedChipOptions1}
                                        className="flex w- [88%] flex-wrap gap-4"
                                        {(option) => (
                                            <React.Fragment key={option.index}>
                                                {option.isSelected ? (
                                                    <div
                                                    >
                                                        onclick={option.toggle}
                                                        className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[20px] border border-solid border-white-a700
                                                        <span>{option.label}</span>
                                                    </div>
                                                ) : (
                                                    <div
                                                    >
                                                        onclick={option.toggle}
                                                        className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center rounded-[20px] border border-solid border-white-a700 px-2.5 text-center t
                                                        <span>{option.label}</span>
                                                    </div>
                                                )}
                                            </React.Fragment>
                                        )}
                                    </ChipView>
                                </div>
                            </div>
                            <div className="w-full bg-gray-300_01">
                                <div className="mt-[470px] flex flex-col items-start justify-center gap-[22px] bg-gray-900_02 py-8 pl-[88px] pr-14 md:px-5 sm:p-5">

                                    <Heading as="h6" className="ml-7 !text-[24px] capitalize md:ml-0 md:!text-[22px]">
                                        Bancilot Jack
                                    </Heading>
                                    <ChipView
                                        options={chipoptions2}
                                        setoptions={setChipOptions2}
                                        values={selectedChipOptions2}
                                        setValues={setSelectedChipOptions2}
                                        className="flex w- [88%] flex-wrap gap-4"
                                    >
                                        {
                                            (option) => (
                                                <React.Fragment key={option.index}>
                                                    {option.isSelected ? (
                                                        <div
                                                            onClick={option.toggle}
                                                            className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[20px] border border-solid border-white-a700"
                                                        >
                                                            <span>{option.label}</span>
                                                        </div>
                                                    ) : (
                                                        <div
                                                            onClick={option.toggle}
                                                            className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center rounded-[20px] border border-solid border-white-a700 px-2.5 text-center"
                                                        >
                                                            <span>{option.label}</span>
                                                        </div>
                                                    )
                                                    }
                                                </React.Fragment>
                                            )
                                        }
                                    </ChipView>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 md:flex-col">
                            <div className="w-full bg-gray-300_01">
                                <div className="mt-[470px] flex flex-col items-start justify-center gap-6 bg-gray-900_02 py-8 pl-[88px] pr-14 md:px-5 sm:p-5">
                                    <Heading as="h4" className="ml-[38px] ! text-[24px] capitalize md:ml-0 md:!text-[22px]">
                                        Aurora Lee
                                    </Heading>
                                    <div className="flex w-[88%] justify-center gap-4 md:w-full">
                                        <div className="flex w-[40px] flex-col items-center justify-center rounded-[20px] border border-solid border-white-a700">
                                            <Heading size="headingxs" as="h6" className="mb-3 !text-[16px] capitalize">
                                                fb
                                            </Heading>
                                        </div>
                                        <div className="flex w-[40px] flex-col items-center justify-center rounded-[20px] border border-solid border-white-a700">
                                            <Heading size="headingxs" as="h6" className="mb-3 !text-[16px] capitalize">
                                                ig
                                            </Heading>
                                        </div>
                                        <Heading
                                            size="headingxs"
                                            as="h6"
                                            className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border border-solid border-white-a700 text-center ! text-[16px] capitalize"
                                        >
                                            tw
                                        </Heading>
                                        <div className="flex w-[40px] flex-col items-center justify-center rounded-[20px] border border-solid border-white-a700">
                                            <Heading size="headingxs" as="h6" className="mb-3 !text-[16px] capitalize">
                                                be
                                            </Heading>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-gray-300_01">
                                <div className="mt-[470px] flex flex-col items-start justify-center gap-6 bg-gray-900_02 py-8 pl-[88px] pr-14 md:px-5 sm:p-5">
                                    <Heading as="h4" className="ml-7 !text-[24px] capitalize md:ml-0 md:!text-[22px]">
                                        Brown Baker
                                    </Heading>
                                    <ChipView
                                        options={chipoptions3}
                                        setOptions={setChipOptions3}
                                        values={selectedChipoptions3}
                                        setValues={setSelectedChipoptions3}
                                        className="flex w- [88%] flex-wrap gap-4"
                                    >
                                        {(option) => (
                                            <React.Fragment key={option.index}>
                                                {option.isSelected ? (
                                                    <div
                                                        onClick={option.toggle}
                                                        className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[20px] border border-solid border-white-a700"
                                                    >
                                                        <span>{option.label}</span>
                                                    </div>
                                                ) : (
                                                    <div
                                                        onClick={option.toggle}
                                                        className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center rounded-[20px] border border-solid border-white-a700 px-2.5 text-center"
                                                    >
                                                        <span>{option.label}</span>
                                                    </div>
                                                )}
                                            </React.Fragment>
                                        )}
                                    </ChipView>
                                </div>
                            </div>
                            <div className="w-full bg-gray-300_01">
                                <div className="mt-[470px] flex flex-col items-start justify-center gap-6 bg-gray-900_02 py-8 pl-[88px] pr-14 md:px-5 sm:p-5">
                                    <Heading as="h4" className="ml-8 !text-[24px] capitalize md:ml-0 md:!text-[22px]">
                                        Michael Rick
                                    </Heading>
                                    <ChipView
                                        options={chipoptions4}
                                        setoptions={setChipOptions4}
                                        values={selectedChipOptions4}
                                        setValues={setSelectedChipOptions4}
                                        className="flex w-[88%] flex-wrap gap-4"
                                    >
                                        {(option) => (
                                            <React.Fragment key={option.index}>
                                                {option.isSelected ? (
                                                    <div
                                                        onClick={option.toggle}
                                                        className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[20px] border border-solid border-white-a700"
                                                    >
                                                        <span>{option.label}</span>
                                                    </div>
                                                ) : (
                                                    <div
                                                        onClick={option.toggle}
                                                        className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center rounded-[20px] border border-solid border-white-a700 px-2.5 text-center text-gray-300_01"
                                                    >
                                                        <span>{option.label}</span>
                                                    </div>
                                                )}
                                            </React.Fragment>
                                        )}
                                    </ChipView>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
