import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import GisintegrationwindowcoloredRowmapview from "./GisintegrationwindowcoloredRowmapview";
import React from "react";

export default function GISIntegrationWindowColoredPage() {
    return (
        <>
            <Helmet>
                <title>Rishi Rishav's Application2</title>
                <meta name="description" content="web site created using create-react-app" />
            </Helmet>
            <div className="w-full bg-white-a700">
                <Header />
                <GisintegrationwindowcoloredRowmapview />
                <Footer className="mt-[2684px]" />
            </div>
        </>
    );
}