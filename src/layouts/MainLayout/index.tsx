import Head from "next/head";
import { Footer, Navbar, Sidebar } from "./components";
import type { MainLayoutType } from "layouts/types";

export const MainLayout: MainLayoutType = ({
    children,
    title,
    pageDescription = "Talents Valley platform",
    withoutNavbar = false,
    contentClassName = "",
    withoutSidebar = false,
}) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {!withoutNavbar && (
                <header>
                    <Navbar />
                </header>
            )}
            <main className="flex-1 flex relative">
                <div className="sticky flex top-0 left-0  max-h-screen">
                    {!withoutSidebar && (
                        <Sidebar />
                    )}
                </div>
                <div
                    className={`flex-1 flex p-5  ${contentClassName}`}
                >
                    {children}
                </div>
                {/* <div
                    className={`flex-1 flex justify-center items-center p-5 overflow-y-scroll ${contentClassName}`}
                >
                    {children}
                </div> */}
            </main>




            <Footer />
        </div>
    );
};

export default MainLayout;
