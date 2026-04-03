import Head from "next/head";

import strings from "../misc/strings.json";

const DefaultContainer = ({ children, isContentCentered, sidePaneContent }) => {
    return (
        <div className="w-full h-full flex">
            <div className={`lg:p-16 lg:pt-20 md:p-12 p-8 ${isContentCentered ? "m-auto" : ""} transition block min-h-full w-full max-w-[1400px] flex-shrink-[0.2]`} style={{
                fontFamily: "'Zen Kaku Gothic New', sans-serif"
            }}>
                {children}
            </div>

            {sidePaneContent &&
                <div className="h-screen w-full py-9 pr-8 flex-shrink-[0.8] hidden md:block">
                    {sidePaneContent}
                </div>
            }

            <Head>
                <link rel="preconnect" href="https://fonts.bunny.net" crossOrigin="true" />

                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

                <title>{strings.siteTitle}</title>
            </Head>
        </div>
    )
}

export default DefaultContainer;
