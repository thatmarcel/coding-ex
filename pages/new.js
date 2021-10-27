import DefaultContainer from "../components/DefaultContainer";
import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import Heading3 from "../components/Heading3";

import strings from "../misc/strings.json";
import urls from "../misc/urls.json";

import { useEffect, useState } from "react";
import Byline from "../components/Byline";

const wait = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));

const New = () => {
    const [ws, setWs] = useState(null);
    const [gameCode, setGameCode] = useState("...");
    const [gameId, setGameId] = useState(null);
    const [players, setPlayers] = useState([]);
    const [hasGameStarted, setGameStarted] = useState(false);
    const [gameSecondsLeft, setGameSecondsLeft] = useState(10);

    useEffect(() => {
        if (ws || !(typeof window)) { return; }

        const socket = new WebSocket(urls.backendSocket);

        socket.onopen = () => {
            console.log("WebSocket connected");

            socket.send(JSON.stringify({
                action: "new_game"
            }));
        }

        let __players = [];
        let __gameSecondsLeft = 10;
        let __gameId;
          
        socket.onmessage = event => {
            const message = event.data;
            const json = JSON.parse(message);
            if (!json || !json["action"]) { return; }

            console.log("Received JSON message");
            console.log(json);

            switch (json["action"]) {
                case "new_game_result": {
                    if (!json["success"]) { return; }

                    setGameCode(json["gameCode"]);
                    setGameId(json["gameId"]);

                    __gameId = json["gameId"];

                    break;
                }
                case "player_join": {
                    const playerId = json["playerId"];
                    const playerDisplayName = json["playerDisplayName"];
                    if (!playerId || !playerDisplayName) { return; }

                    const playerInfo = {
                        id: playerId,
                        displayName: playerDisplayName,
                        points: 0
                    }

                    setPlayers([...__players, playerInfo]);

                    __players.push(playerInfo);

                    break;
                }
                case "start_game_result": {
                    if (!json["success"]) { return; }

                    setGameStarted(true);

                    (async () => {
                        while (__gameSecondsLeft > 0) {
                            await wait(1);
                            __gameSecondsLeft -= 1;
                            setGameSecondsLeft(__gameSecondsLeft);
                        }

                        console.log("Sending stop")
                        socket.send(JSON.stringify({
                            action: "stop_game",
                            gameId: __gameId
                        }));
                    })();

                    break;
                }
                case "player_points_update": {
                    const playerId = json["playerId"];
                    const points = json["points"];
                    if (!playerId || !points) { return; }

                    __players = __players.map(player => {
                        if (player.id === playerId) {
                            player.points = points;
                        }

                        return player;
                    }).sort((a, b) => b.points - a.points);

                    setPlayers([...__players]);
                }
                default:
                    break;
            }
        };

        setWs(socket);
    }, []);

    return (
        <DefaultContainer>
            <Heading1>
                {strings.siteTitle}
            </Heading1>
            <Heading3 className="mb-16">
                {strings.siteSubtitle}
            </Heading3>

            {hasGameStarted ||
                <div>
                    <p className="text-xl md:text-3xl font-medium leading-none">
                        {strings.newGameCodeDisplayBefore}
                    </p>
                    <p className="text-5xl md:text-9xl font-black leading-none">
                        {gameCode}
                    </p>
                    <p className="text-xl md:text-3xl font-medium leading-none md:mt-3">
                        {strings.newGameCodeDisplayBetween}
                    </p>
                    <Heading2 className="">
                        {strings.gameLink}
                    </Heading2>
                    <p className="text-xl md:text-3xl font-medium leading-none md:mt-2 mb-16">
                        {strings.newGameCodeDisplayAfter}
                    </p>

                    <button onClick={() => {
                        ws.send(JSON.stringify({
                            action: "start_game",
                            gameId: gameId
                        }));
                    }} className="rounded-xl h-12 px-12 bg-gray-500 text-white font-bold hover:border-2 hover:border-gray-500 hover:bg-white hover:text-gray-700 transition-all mb-12">
                        {strings.startGame}
                    </button>
                </div>
            }

            {hasGameStarted && <Byline className="mb-16">{gameSecondsLeft > 0 ? `${gameSecondsLeft}s` : strings.gameEnded}</Byline>}

            {players.map(player => (
                <Byline className="mb-4" key={player.id}>
                    {player.displayName}{hasGameStarted ? `: ${player.points} ${strings.points}` : ""}
                </Byline>
            ))}
        </DefaultContainer>
    )
}

export default New;