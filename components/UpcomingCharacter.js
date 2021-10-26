const UpcomingCharacter = ({ className, character, isSelected }) => {
    return (
        <input
            value={character}
            disabled={true}
            className={`w-8 h-8 md:w-12 md:h-12 lg:w-24 lg:h-24 mr-8 mb-8 select-none font-black text-white text-2xl md:text-5xl text-center rounded-xl ${isSelected ? "bg-gray-900" : "bg-gray-600"} rounded-xl h-12 px-4 ${className}`}
            />
    )
}

export default UpcomingCharacter;