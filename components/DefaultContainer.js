import Head from "next/head";

import strings from "../misc/strings.json";

const DefaultContainer = ({ children, isContentCentered, sidePaneContent }) => {
    return (
        <div className="w-screen h-screen flex">
            <div className={`p-16 ${isContentCentered ? "m-auto" : ""} transition block min-h-screen w-full max-w-[1400px] flex-shrink-0`} style={{
                fontFamily: "'Zen Kaku Gothic New', sans-serif"
            }}>
                {children}
            </div>

            {sidePaneContent &&
                <div className="h-screen w-full p-16">
                    {sidePaneContent}
                </div>
            }

            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
            
                <title>{strings.siteTitle}</title>
            </Head>
        </div>
    )
}

export default DefaultContainer;