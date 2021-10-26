import { useState } from "react";
import CharacterSolvingPane from "./CharacterSolvingPane";
import UpcomingCharactersListPane from "./UpcomingCharactersListPane";

const PhraseSolvingPane = ({ characters }) => {
    let [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <CharacterSolvingPane character={characters[activeIndex]} />
            <UpcomingCharactersListPane characters={characters} activeIndex={activeIndex} />
        </div>
    )
}

export default PhraseSolvingPane;