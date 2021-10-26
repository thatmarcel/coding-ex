import CharacterBitInput from "./CharacterBitInput";

const CharacterSolvingPane = ({ character, className }) => {
    return (
        <div className={`w-full p-16 bg-gray-600 rounded-2xl text-center ${className}`}>
            <span className="text-7xl md:text-[12rem] font-black text-white select-none">
                {character}
            </span>

            <div className="flex flex-wrap justify-center mt-16">
                <CharacterBitInput index={0} autoFocus={true} />
                <CharacterBitInput index={1} />
                <CharacterBitInput index={2} />
                <CharacterBitInput index={3} />
                <CharacterBitInput index={4} />
                <CharacterBitInput index={5} />
                <CharacterBitInput index={6} />
                <CharacterBitInput index={7} />
            </div>
        </div>
    )
}

export default CharacterSolvingPane;