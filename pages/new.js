import DefaultContainer from "../components/DefaultContainer";
import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import Heading3 from "../components/Heading3";
import Paragraph from "../components/Paragraph";

import strings from "../misc/strings.json";

let generatedGameCode = "...";
let playerNames = [
    "paul",
    "max",
    "carl",
    "jack",
    "queen",
    "jett",
    "wreckingball",
    "creative"
];

const New = () => {
    return (
        <DefaultContainer>
            <Heading1>
                {strings.siteTitle}
            </Heading1>
            <Heading3 className="mb-16">
                {strings.siteSubtitle}
            </Heading3>

            <p className="text-xl md:text-3xl font-medium leading-none">
                {strings.newGameCodeDisplayBefore}
            </p>
            <p className="text-5xl md:text-9xl font-black leading-none">
                {generatedGameCode}
            </p>
            <p className="text-xl md:text-3xl font-medium leading-none md:mt-3">
                {strings.newGameCodeDisplayBetween}
            </p>
            <Heading2 className="">
                {strings.gameLink}
            </Heading2>
            <p className="text-xl md:text-3xl font-medium leading-none md:mt-2">
                {strings.newGameCodeDisplayAfter}
            </p>

            {playerNames.length > 0 &&
                <Paragraph className="mt-16">
                    {`${playerNames.length} ${playerNames.length === 1 ? "player" : "players"}: ${playerNames.join(", ")}`}
                </Paragraph>
            }
        </DefaultContainer>
    )
}

export default New;