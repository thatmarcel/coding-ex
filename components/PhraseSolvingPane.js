import { useEffect, useState } from "react";
import CharacterSolvingPane from "./CharacterSolvingPane";
import UpcomingCharactersListPane from "./UpcomingCharactersListPane";

const PhraseSolvingPane = ({ characters, onSolve }) => {
    let [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(0);
    }, [characters]);

    return (
        <div>
            <CharacterSolvingPane character={characters[activeIndex]?.character || ""} solution={characters[activeIndex]?.solution || "none"} onSolve={() => {
                onSolve(characters[activeIndex].solution);

                ((activeIndex + 1) < characters.length
                    && setActiveIndex(activeIndex + 1));
            }} />
            <UpcomingCharactersListPane characters={characters.map(character => character.character)} activeIndex={activeIndex} />
        </div>
    )
}

export default PhraseSolvingPane;