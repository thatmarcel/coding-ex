import CharacterBitInput from "./CharacterBitInput";

const CharacterSolvingPane = ({ character, className, solution, onSolve }) => {
    const getBits = () => {
        return !!(typeof document) && [...document.getElementsByClassName("character-bit-input")].map(element => element.value).join("");
    }

    const resetInputs = () => {
        const elements = !!(typeof document) && [...document.getElementsByClassName("character-bit-input")];

        elements && elements.forEach(element => element.value = "");
        elements && elements[0].focus();
    }

    const checkSolution = (solution, callback) => {
        console.log(getBits())
        getBits() === solution && callback();
        getBits() === solution && resetInputs();
    }

    return (
        <div className={`w-full xl:pb-16 md:pb-12 p-8 bg-gray-600 rounded-2xl text-center ${className}`}>
            <span className="inline-block -mt-4 -mb-8 lg:text-[10rem] md:text-[6rem] text-[4rem] font-black text-white select-none">
                {character}
            </span>

            <div className="flex flex-wrap justify-center mt-6 md:mt-8 xl:mt-12 gap-2 lg:gap-4">
                <div className="flex gap-2 lg:gap-4">
                    <CharacterBitInput index={0} onChange={() => checkSolution(solution, onSolve)} autoFocus={true} />
                    <CharacterBitInput index={1} onChange={() => checkSolution(solution, onSolve)} />
                    <CharacterBitInput index={2} onChange={() => checkSolution(solution, onSolve)} />
                    <CharacterBitInput index={3} onChange={() => checkSolution(solution, onSolve)} />
                </div>
                <div className="flex gap-2 lg:gap-4">
                    <CharacterBitInput index={4} onChange={() => checkSolution(solution, onSolve)} />
                    <CharacterBitInput index={5} onChange={() => checkSolution(solution, onSolve)} />
                    <CharacterBitInput index={6} onChange={() => checkSolution(solution, onSolve)} />
                    <CharacterBitInput index={7} onChange={() => checkSolution(solution, onSolve)} />
                </div>
            </div>
        </div>
    )
}

export default CharacterSolvingPane;
