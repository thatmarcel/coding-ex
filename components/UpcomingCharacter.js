const UpcomingCharacter = ({ className, character, isSelected }) => {
    return (
        <input
            value={character}
            disabled={true}
            className={`
                w-12
                h-12
                lg:w-20
                lg:h-20
                lg:pb-2
                pb-1
                select-none
                font-black
                text-white
                text-3xl
                lg:text-5xl
                text-center
                rounded-xl
                ${isSelected ? "bg-gray-900" : "bg-gray-600"}
                lg:px-4
                ${className}
            `.split("\n").map(s => s.trim()).join(" ")}
            />
    )
}

export default UpcomingCharacter;
