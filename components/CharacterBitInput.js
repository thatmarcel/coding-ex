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
            className={`character-bit-input w-8 h-8 md:w-12 md:h-12 lg:w-24 lg:h-24 select-none caret-transparent mr-8 font-black text-2xl md:text-5xl text-center rounded-xl border-0 border-gray-400 rounded-xl h-12 px-4 outline-none focus:outline-none focus:border-4 transition-all ${className || ""}`}
            />
    )
}

export default CharacterBitInput;