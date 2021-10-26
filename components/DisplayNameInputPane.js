import Link from "next/link";

import strings from "../misc/strings.json";

const DisplayNameInputPane = ({ className }) => {
    return (
        <div className={`${className}`}>
            <input
                type="text"
                placeholder={strings.displayNameInputPlaceholder}
                className="border-2 border-gray-500 rounded-xl h-12 px-4 outline-none focus:outline-none focus:border-4 transition-all mr-4 mb-4" />
        
            <input
                type="text"
                placeholder={strings.gameCodeInputPlaceholder}
                className="w-48 border-2 border-gray-500 rounded-xl h-12 px-4 outline-none focus:outline-none focus:border-4 transition-all mr-4 mb-4" />
        
            <button className="rounded-xl h-12 px-12 bg-gray-500 text-white font-bold hover:border-2 hover:border-gray-500 hover:bg-white hover:text-gray-700 transition-all mb-4">
                {strings.letsGo}
            </button>

            <br />

            <Link href="/new">
                <a className="mt-2 text-gray-500 font-bold underline">
                    {strings.createNewGame}
                </a>
            </Link>
        </div>
    )
}

export default DisplayNameInputPane;