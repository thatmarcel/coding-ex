import DefaultContainer from "../components/DefaultContainer";
import Byline from "../components/Byline";
import Heading1 from "../components/Heading1";
import Heading3 from "../components/Heading3";
import DisplayNameInputPane from "../components/DisplayNameInputPane";
import Paragraph from "../components/Paragraph";
import PhraseSolvingPane from "../components/PhraseSolvingPane";
import CharTablePane from "../components/CharTablePane";

import strings from "../misc/strings.json";
import urls from "../misc/urls.json";

import { useEffect, useState } from "react";

const Index = () => {
    const [ws, setWs] = useState(null);
    const [isWsConnected, setWsConnected] = useState(false);
    const [gameId, setGameId] = useState(null);
    const [characters, setCharacters] = useState([]);
    const [step, setStep] = useState(0);
    // 0 => display name and game code input
    // 1 => waiting for game to start
    // 2 => game (ascii encoding)
    // 3 => game end

    useEffect(() => {
        if (ws || !(typeof window)) { return; }

        const socket = new WebSocket(urls.backendSocket);

        socket.onopen = () => {
            setWsConnected(true);
            console.log("WebSocket connected");
        }
          
        socket.onmessage = event => {
            const message = event.data;
            const json = JSON.parse(message);
            if (!json || !json["action"]) { return; }

            console.log("Received JSON message");
            console.log(json);

            switch (json["action"]) {
                case "join_game_result": {
                    if (!json["success"]) { return; }

                    setGameId(json["gameId"]);

                    setStep(1);

                    break;
                }
                case "stop_game": {
                    setStep(3);

                    break;
                }
                case "new_ascii_word_to_solve": {
                    const chars = json["word"]?.characters;
                    if (!chars) { return; }

                    setCharacters(chars);
                    setStep(2);

                    break;
                }
                default:
                    break;
            }
        };

        setWs(socket);
    }, []);

    return (
        <DefaultContainer isContentCentered={step !== 2 && step !== 4} sidePaneContent={step === 2 && <CharTablePane />}>
            <Heading1>
                {step !== 1 && strings.siteTitle}
                {step === 1 && strings.ascii}
            </Heading1>
            <Heading3 className="mb-16">
                {step !== 1 && strings.siteSubtitle}
                {step === 1 && strings.asciiSubtitle}
            </Heading3>

            {step <= 1 &&
                <Paragraph className="mt-16 mb-16">
                    {strings.gameIntroduction}
                </Paragraph>
            }
            
            {step === 0 &&
                (isWsConnected
                ? <DisplayNameInputPane onSubmit={({ displayName, gameCode }) => {
                    ws.send(JSON.stringify({
                        action: "join_game",
                        gameCode: gameCode,
                        displayName: displayName
                    }));
                }} />
                : <Paragraph>
                    {strings.waitingForBackendSocketConnection}
                </Paragraph>)
            }
            {step === 1 && <Byline>{strings.waitingForGame}</Byline>}
            {step === 2 && <PhraseSolvingPane characters={characters} onSolve={solution => {
                ws.send(JSON.stringify({
                    action: "solve_ascii_character",
                    gameId: gameId,
                    solution: solution
                }));
            }} />}
            {step === 3 && <Byline>{strings.gameEnded}</Byline>}
        </DefaultContainer>
    )
}

export default Index;