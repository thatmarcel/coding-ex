import { useState } from "react";
import CharacterSolvingPane from "./CharacterSolvingPane";
import UpcomingCharactersListPane from "./UpcomingCharactersListPane";

const PhraseSolvingPane = ({ characters, onFinish }) => {
    let [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <CharacterSolvingPane character={characters[activeIndex].character} solution={characters[activeIndex].solution} onSolve={() => {
                ((activeIndex + 1) < characters.length
                    && setActiveIndex(activeIndex + 1))
                    || onFinish();
            }} />
            <UpcomingCharactersListPane characters={characters.map(character => character.character)} activeIndex={activeIndex} />
        </div>
    )
}

export default PhraseSolvingPane;