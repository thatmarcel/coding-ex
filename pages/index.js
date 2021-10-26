import DefaultContainer from "../components/DefaultContainer";
import Byline from "../components/Byline";
import Heading1 from "../components/Heading1";
import Heading3 from "../components/Heading3";
import DisplayNameInputPane from "../components/DisplayNameInputPane";
import Paragraph from "../components/Paragraph";

import strings from "../misc/strings.json";
import PhraseSolvingPane from "../components/PhraseSolvingPane";
import CharTablePane from "../components/CharTablePane";

let step = 2;
// 0 => display name and game code input
// 1 => waiting for game to start
// 2 => game phase 1 (ascii encoding)
// 3 => waiting for phase 1 end (triggered after one player done with previous phase or 180s and then waits 30s)
// 4 => game phase 2 (trivia questions / quiz)
// 5 => waiting for phase 2 end (triggered after one player done with previous phase or 180s and then waits 30s)
// 6 => results

const Index = () => {
    return (
        <DefaultContainer isContentCentered={step !== 2 && step !== 4} sidePaneContent={step === 2 && <CharTablePane />}>
            <Heading1>
                {step <= 1 && strings.siteTitle}
                {step > 1 && step <= 3 && strings.ascii}
                {step > 3 && strings.unicode}
            </Heading1>
            <Heading3 className="mb-16">
                {step <= 1 && strings.siteSubtitle}
                {step > 1 && step <= 3 && strings.asciiSubtitle}
                {step > 3 && strings.unciodeSubtitle}
            </Heading3>

            {step <= 1 &&
                <Paragraph className="mt-16 mb-16">
                    {strings.gameIntroduction}
                </Paragraph>
            }
            
            {step === 0 && <DisplayNameInputPane />}
            {step === 1 && <Byline>{strings.waitingForGame}</Byline>}
            {step === 2 && <PhraseSolvingPane characters={[
                { character: "H", solution: "01001000" },
                { character: "E", solution: "01000101" },
                { character: "L", solution: "01001100" },
                { character: "L", solution: "01001100" },
                { character: "O", solution: "01001111" },
            ]} onFinish={() => console.log("finish")} />}
        </DefaultContainer>
    )
}

export default Index;