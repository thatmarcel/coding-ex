const CharTableEntry = ({ className, character, hexValue }) => {
    return (
        <div>
            <input
                value={character}
                disabled={true}
                className={`w-8 h-12 md:w-12 md:h-20 lg:w-24 lg:h-32 mr-8 mb-8 select-none font-black text-white text-2xl md:text-5xl text-center rounded-xl bg-gray-600 rounded-xl h-12 px-4 pb-8 ${className}`}
                />
            <span className="block text-center mr-8 -mt-20 mb-16 pt-2 text-white font-bold select-none">
                0x{hexValue}
            </span>
        </div>
    )
}

export default CharTableEntry;