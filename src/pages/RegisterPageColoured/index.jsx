import { Helmet } from "react-helmet";
import { Text, Button, CheckBox, Heading, Input, SelectBox, Img } from "../../components";
import React from "react";

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function RegisterPageColouredPage() {
    return (
        <>
            <Helmet>
                <title>Rishi Rishav's Application2</title>
                <meta name="description" content="web site created using create-react-app" />
            </Helmet>
            <div className="w-full bg-white-a700 py-[30px] sm:py-5">
                <div className="mb-[46px] flex items-center gap-[50px] md:flex-col">
                    <div className="flex w-[38%] flex-col gap-48 md:w-full md:gap-36 md:p-5 sm:gap-24">
                        <Img
                            src="images/img_logo_civique.png"
                            alt="Logocivique"
                            className="ml-16 h-[62px] w-[14%] object-contain md:ml-0"
                        />
                        <div>
                            <Img
                                src="images/img_image_left_side.png"
                                alt="Imageleftside"
                                className="h-[586px] w-full object-cover md:h-auto"
                            />
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start md:self-stretch md:p-5">
                        <div className="flex w-[94%] flex-col items-center rounded-bl-[40px] rounded-tl-[40px] bg-white-a700 md:w-full">
                            <Heading size="headingxl" as="h1" className="mt-[42px] !font-merriweathersans !text-black-900">
                                Create your account!
                            </Heading>
                            <Heading size="headinglg" as="h2" className="mt-10 self-start !font-inter ! text-black-900">
                                Personal Details
                            </Heading>
                            <div className="mr-2 mt-[18px] flex w- [92%] justify-center md:mr-0 md:w-full md:p-5">
                                <div className="flex w-full flex-col gap-5">
                                    <div className="flex gap-[42px] md:flex-col">
                                        <Input shape="square" type="text" name="firstName" placeholder={`First Name`} className="w-full" />
                                        <Input shape="square" type="text" name="lastName" placeholder={`Last Name`} className="w-full" />
                                    </div>
                                    <div className="flex gap-[42px] md:flex-col">
                                        <Input shape="square" type="text" name="userName" placeholder={`Username`} className="w-full" />
                                        <Input shape="square" type="email" name="email" placeholder={`Email Id`} className="w-full" />
                                    </div>
                                    <div className="flex gap-[42px] md:flex-col">
                                        <Input shape="square" type="password" name="password" placeholder={`Password`} className="w-full" />
                                        <Input
                                            shape="square"
                                            type="password"
                                            name="confirmpassword"
                                            placeholder={`Confirm Password`}
                                            className="w-full" />
                                    </div>
                                    <div className="flex items-end md:flex-col">
                                        <Input
                                            shape="square"
                                            type="number"
                                            name="phoneNumber"
                                            placeholder={`Phone Number`}
                                            className="flex-grow self-center"
                                        />
                                        <SelectBox
                                            shape="round"
                                            indicator={<Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[16px] w-[16px]" />}
                                            getOptionLabel={(e) => (
                                                <>
                                                    <div className="flex items-center">
                                                        <Img src="images/img_lefticon.svg" alt="Lefticon" className="h-[16px] w- [16px]" />
                                                        <span>{e.label}</span>
                                                    </div>
                                                </>
                                            )}
                                            name="value"
                                            placeholder={`Gender`}
                                            options={dropDownOptions}
                                            className="ml-[42px] w-[14%] gap-1 font-roboto font-bold md:ml-0 md:w-full"
                                        />
                                        <SelectBox
                                            shape="round"
                                            indicator={<Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[16px] w-[16px]" />}
                                            getOptionLabel={(e) => (
                                                <>
                                                    <div className="flex items-center">
                                                        <Img src="images/img_lefticon.svg" alt="Lefticon" className="h-[16px] w-[16px]" />
                                                        <span>{e.label}</span>
                                                    </div>
                                                </>
                                            )}

                                            name="preferred"
                                            placeholder={"Preferred Contact Method"}
                                            options={dropDownOptions}
                                            className="ml-[18px] w-[32%] gap-1 font-roboto font-bold md:ml-0 md:w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mr-2 mt-12 flex w- [92%] flex-col items-start gap-[18px] md:mr-0 md:w-full md:p-5">
                                <Heading size="headinglg" as="h3" className="!font-inter !text-black-900">
                                    Address Details
                                </Heading>
                                <div className="flex flex-col gap-5 self-stretch">
                                    <div className="flex gap-[42px] md:flex-col">
                                        <Input shape="square" name="address" placeholder={`City`} className="w-full" />
                                        <Input shape="square" name="state_one" placeholder={`State`} className="w-full" />
                                    </div>
                                    <div className="flex gap-[42px] md:flex-col">
                                        <Input shape="square" name="country" placeholder={`Country`} className="w-full" />
                                        <div className="flex w-full items-center justify-between gap-5">
                                            <Input shape="square" name="pincode_one" placeholder={`PIN`} className="w-[26%]" />
                                            <SelectBox
                                                shape="round"
                                                indicator={
                                                    <Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[16px] w-[16px]" />}
                                                getOptionLabel={(e) => (
                                                    <>
                                                        <div className="flex items-center">
                                                            <Img src="images/img_lefticon.svg" alt="Lefticon" className="h-[16px] w-[16px]" />
                                                            <span>{e.label}</span>
                                                        </div>
                                                    </>
                                                )}
                                                name="preferred_one"
                                                placeholder={`Educational Qualification`}
                                                options={dropDownOptions}
                                                className="w- [64%] gap-1 font-roboto font-bold"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Input
                                    shape="square"
                                    name="how one"
                                    placeholder={"How did you hear about us?"}
                                    className="self-stretch"
                                />
                            </div>
                            <div className="mr-2 mt-12 flex w- [92%] flex-col items-start md:mr-0 md:w-full md:p-5">
                                <div className="self-stretch">
                                    <div className="flex flex-col items-start gap-2">
                                        <a href="#">
                                            <Heading size="headinglg" as="h4" className="!font-inter !text-black-900">
                                                Terms and conditions
                                            </Heading>
                                        </a>
                                        <div className="flex justify-between gap-5 self-stretch md:flex-col">
                                            <CheckBox
                                                name="check"
                                                label="I agree to the Terms of Service"
                                                id="check"
                                                className="gap-1.5 font-roboto text-[14px] text-black-900"
                                            />
                                            <CheckBox
                                                name="check_one"
                                                label="I agree to the Cookie Policy"
                                                id="checkone"
                                                className="gap-1.5 font-roboto text-[14px] text-black-900"
                                            />
                                            <CheckBox
                                                name="check two"
                                                label="I agree to the Privacy Policy"
                                                id="checktwo"
                                                className="gap-1.5 font-roboto text-[14px] text-black-900"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    color="blue_gray_800_01"
                                    size="md"
                                    className="mt-[26px] min-w-[116px] rounded-[5px] font-roboto font-bold tracking-[0.64px]"
                                >
                                    Register
                                </Button>
                                <Text size="textmd" as="p" className="mt-3 !font-inter ! text-black-900">
                                    <span className="text-black-900">Do you have an account?&nbsp;</span>
                                    <span className="font-semibold text-black-900">Sign in</span>
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
