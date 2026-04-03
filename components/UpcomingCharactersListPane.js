import UpcomingCharacter from "./UpcomingCharacter";

const UpcomingCharactersListPane = ({ className, characters, activeIndex }) => {
    return (
        <div className={`flex flex-wrap justify-center mt-12 lg:mt-16 gap-4 lg:gap-8 ${className || ""}`}>
            {characters.map((character, index) =>
                <UpcomingCharacter
                    key={`upcoming-character-${index}`}
                    character={character}
                    isSelected={index === activeIndex}
                    />
            )}
        </div>
    )
}

export default UpcomingCharactersListPane;
