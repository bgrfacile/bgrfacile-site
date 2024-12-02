import {FC} from "react";
import {Outlet} from "react-router";
import {Header} from "@/layouts/Header.tsx";
import {Footer} from "@/layouts/Footer.tsx";

export const SiteMapLayout: FC = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header/>
                <div className="flex-grow pt-16">
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </>
    );
};
