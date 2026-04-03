import { useEffect } from "react";

const CharacterBitInput = ({ className, index, autoFocus, onChange }) => {
    let prevValue = "";

    useEffect(() => {
        if (autoFocus) {
            document.querySelector(`#character-bit-input-${index}`).focus();
        }
    }, [autoFocus]);

    return (
        <input
            id={`character-bit-input-${index}`}
            placeholder="0"
            onFocus={event => prevValue = event.target.value }
            onKeyDown={event => {
                if (event.code !== "Backspace" && (event.target.value.length > 0 || !["0", "1"].includes(event.key))) {
                    event.preventDefault();
                }
            }}
            onKeyUp={event => {
                if (!prevValue && event.code === "Backspace") {
                    const prevElement = document.getElementsByClassName("character-bit-input")[index - 1];
                    prevElement && event.target.blur();
                    prevElement && (prevElement.value = "");
                    prevElement && prevElement.focus();
                }
                if (event.target.value && event.code !== "Backspace") {
                    const nextElement = document.getElementsByClassName("character-bit-input")[index + 1];
                    nextElement && event.target.blur();
                    nextElement && nextElement.focus();
                }
                prevValue = event.target.value;

                onChange();
            }}
            type="number"
            min={0}
            max={1}
            step={1}
            pattern="[0-9]*"
            className={`
                [&::-webkit-inner-spin-button]:appearance-none
                character-bit-input
                w-12
                h-12
                lg:w-20
                lg:h-20
                lg:pb-2
                pb-1
                select-none
                caret-transparent
                font-black
                text-3xl
                lg:text-5xl
                text-center
                text-white
                rounded-xl
                outline-0
                outline-gray-400
                md:px-4
                focus:outline-4
                transition-all
                ${className || ""}
            `.split("\n").map(s => s.trim()).join(" ")}
            />
    )
}

export default CharacterBitInput;
