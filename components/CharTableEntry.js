const CharTableEntry = ({ character, hexValue }) => {
    return (
        <div className="grow select-none w-14 h-20 lg:w-24 lg:h-32 rounded-xl bg-gray-600 text-center flex items-center">
            <div className="text-center mx-auto">
                <span
                    className="font-black text-white text-2xl md:text-3xl lg:text-5xl"
                >
                    {character}
                </span>
                <span className="block text-center pt-1 md:pt-0 lg:pt-2 text-white font-bold text-4xl text-sm md:text-base lg:text-lg">
                    0x{hexValue}
                </span>
            </div>
        </div>
    )
}

export default CharTableEntry;
