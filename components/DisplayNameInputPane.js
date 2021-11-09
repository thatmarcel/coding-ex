import Link from "next/link";
import { useState } from "react";

import strings from "../misc/strings.json";

const DisplayNameInputPane = ({ className, onSubmit }) => {
    const [displayName, setDisplayName] = useState("");
    const [gameCode, setGameCode] = useState("");

    return (
        <div className={`${className}`}>
            <input
                type="text"
                placeholder={strings.displayNameInputPlaceholder}
                value={displayName}
                onChange={event => setDisplayName(event.target.value)}
                className="border-2 border-gray-500 rounded-xl h-12 px-4 outline-none focus:outline-none focus:border-4 transition-all mr-4 mb-4" />
        
            <input
                type="text"
                placeholder={strings.gameCodeInputPlaceholder}
                value={gameCode}
                onChange={event => setGameCode(event.target.value)}
                className="w-48 border-2 border-gray-500 rounded-xl h-12 px-4 outline-none focus:outline-none focus:border-4 transition-all mr-4 mb-4" />
        
            <button onClick={() => {
                onSubmit({
                    displayName: displayName,
                    gameCode: gameCode
                })
            }} className="rounded-xl h-12 px-12 bg-gray-500 text-white font-bold hover:border-2 hover:border-gray-500 hover:bg-white hover:text-gray-700 transition-all mb-4">
                {strings.letsGo}
            </button>

            <br />

            <Link href="/new">
                <a className="mt-2 text-gray-500 font-bold underline">
                    {strings.createNewGame}
                </a>
            </Link>

            <div className="mt-16">
                <span className="text-gray-500 font-bold">
                    {strings.sourceCodeLinksBefore}
                </span>
                
                <a href="https://github.com/thatmarcel/coding-ex" target="_blank" className="ml-4 text-gray-500 font-bold underline">
                    {strings.sourceCodeLinkFrontend}
                </a>

                <a href="https://github.com/thatmarcel/coding-ex-backend" target="_blank" className="ml-4 text-gray-500 font-bold underline">
                    {strings.sourceCodeLinkBackend}
                </a>
            </div>
        </div>
    )
}

export default DisplayNameInputPane;