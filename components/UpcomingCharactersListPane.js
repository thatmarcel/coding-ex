import UpcomingCharacter from "./UpcomingCharacter";

const UpcomingCharactersListPane = ({ className, characters, activeIndex }) => {
    return (
        <div className={`flex flex-wrap justify-center mt-16 ${className || ""}`}>
            {characters.map((character, index) =>
                <UpcomingCharacter
                    character={character}
                    isSelected={index === activeIndex}
                    />
            )}
        </div>
    )
}

export default UpcomingCharactersListPane;