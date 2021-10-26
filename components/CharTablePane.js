import CharTableEntry from "./CharTableEntry";

const entries = [
    { character: "!", decimal: "33", binary: "0010 0001", hex: "21" },
    { character: "\"", decimal: "34", binary: "0010 0010", hex: "22" },
    { character: "#", decimal: "35", binary: "0010 0011", hex: "23" },
    { character: "$", decimal: "36", binary: "0010 0100", hex: "24" },
    { character: "%", decimal: "37", binary: "0010 0101", hex: "25" },
    { character: "&", decimal: "38", binary: "0010 0110", hex: "26" },
    { character: "'", decimal: "39", binary: "0010 0111", hex: "27" },
    { character: "(", decimal: "40", binary: "0010 1000", hex: "28" },
    { character: ")", decimal: "41", binary: "0010 1001", hex: "29" },
    { character: "*", decimal: "42", binary: "0010 1010", hex: "2A" },
    { character: "+", decimal: "43", binary: "0010 1011", hex: "2B" },
    { character: ",", decimal: "44", binary: "0010 1100", hex: "2C" },
    { character: "-", decimal: "45", binary: "0010 1101", hex: "2D" },
    { character: ".", decimal: "46", binary: "0010 1110", hex: "2E" },
    { character: "/", decimal: "47", binary: "0010 1111", hex: "2F" },

    { character: "0", decimal: "48", binary: "0011 0000", hex: "30" },
    { character: "1", decimal: "49", binary: "0011 0001", hex: "31" },
    { character: "2", decimal: "50", binary: "0011 0010", hex: "32" },
    { character: "3", decimal: "51", binary: "0011 0011", hex: "33" },
    { character: "4", decimal: "52", binary: "0011 0100", hex: "34" },
    { character: "5", decimal: "53", binary: "0011 0101", hex: "35" },
    { character: "6", decimal: "54", binary: "0011 0110", hex: "36" },
    { character: "7", decimal: "55", binary: "0011 0111", hex: "37" },
    { character: "8", decimal: "56", binary: "0011 1000", hex: "38" },
    { character: "9", decimal: "57", binary: "0011 1001", hex: "39" },

    { character: ":", decimal: "58", binary: "0011 1010", hex: "3A" },
    { character: ";", decimal: "59", binary: "0011 1011", hex: "3B" },
    { character: "<", decimal: "60", binary: "0011 1100", hex: "3C" },
    { character: "=", decimal: "61", binary: "0011 1101", hex: "3D" },
    { character: ">", decimal: "62", binary: "0011 1110", hex: "3E" },
    { character: "?", decimal: "63", binary: "0011 1111", hex: "3F" },
    { character: "@", decimal: "64", binary: "0100 0000", hex: "40" },

    { character: "A", decimal: "65", binary: "0100 0001", hex: "41" },
    { character: "B", decimal: "66", binary: "0100 0010", hex: "42" },
    { character: "C", decimal: "67", binary: "0100 0011", hex: "43" },
    { character: "D", decimal: "68", binary: "0100 0100", hex: "44" },
    { character: "E", decimal: "69", binary: "0100 0101", hex: "45" },
    { character: "F", decimal: "70", binary: "0100 0110", hex: "46" },
    { character: "G", decimal: "71", binary: "0100 0111", hex: "47" },
    { character: "H", decimal: "72", binary: "0100 1000", hex: "48" },
    { character: "I", decimal: "73", binary: "0100 1001", hex: "49" },
    { character: "J", decimal: "74", binary: "0100 1010", hex: "4A" },
    { character: "K", decimal: "75", binary: "0100 1011", hex: "4B" },
    { character: "L", decimal: "76", binary: "0100 1100", hex: "4C" },
    { character: "M", decimal: "77", binary: "0100 1101", hex: "4D" },
    { character: "N", decimal: "78", binary: "0100 1110", hex: "4E" },
    { character: "O", decimal: "79", binary: "0100 1111", hex: "4F" },
    { character: "P", decimal: "80", binary: "0101 0000", hex: "50" },
    { character: "Q", decimal: "81", binary: "0101 0001", hex: "51" },
    { character: "R", decimal: "82", binary: "0101 0010", hex: "52" },
    { character: "S", decimal: "83", binary: "0101 0011", hex: "53" },
    { character: "T", decimal: "84", binary: "0101 0100", hex: "54" },
    { character: "U", decimal: "85", binary: "0101 0101", hex: "55" },
    { character: "V", decimal: "86", binary: "0101 0110", hex: "56" },
    { character: "W", decimal: "87", binary: "0101 0111", hex: "57" },
    { character: "X", decimal: "88", binary: "0101 1000", hex: "58" },
    { character: "Y", decimal: "89", binary: "0101 1001", hex: "59" },
    { character: "Z", decimal: "90", binary: "0101 1010", hex: "5A" },

    { character: "[", decimal: "91", binary: "0101 1011", hex: "5B" },
    { character: "\\", decimal: "92", binary: "0101 1100", hex: "5C" },
    { character: "]", decimal: "93", binary: "0101 1101", hex: "5D" },
    { character: "^", decimal: "94", binary: "0101 1110", hex: "5E" },
    { character: "_", decimal: "95", binary: "0101 1111", hex: "5F" },
    { character: "`", decimal: "96", binary: "0110 0000", hex: "60" },

    { character: "a", decimal: "97", binary: "0110 0001", hex: "61" },
    { character: "b", decimal: "98", binary: "0110 0010", hex: "62" },
    { character: "c", decimal: "99", binary: "0110 0011", hex: "63" },
    { character: "d", decimal: "100", binary: "0110 0100", hex: "64" },
    { character: "e", decimal: "101", binary: "0110 0101", hex: "65" },
    { character: "f", decimal: "102", binary: "0110 0110", hex: "66" },
    { character: "g", decimal: "103", binary: "0110 0111", hex: "67" },
    { character: "h", decimal: "104", binary: "0110 1000", hex: "68" },
    { character: "i", decimal: "105", binary: "0110 1001", hex: "69" },
    { character: "j", decimal: "106", binary: "0110 1010", hex: "6A" },
    { character: "k", decimal: "107", binary: "0110 1011", hex: "6B" },
    { character: "l", decimal: "108", binary: "0110 1100", hex: "6C" },
    { character: "m", decimal: "109", binary: "0110 1101", hex: "6D" },
    { character: "n", decimal: "110", binary: "0110 1110", hex: "6E" },
    { character: "o", decimal: "111", binary: "0110 1111", hex: "6F" },
    { character: "p", decimal: "112", binary: "0111 0000", hex: "70" },
    { character: "q", decimal: "113", binary: "0111 0001", hex: "71" },
    { character: "r", decimal: "114", binary: "0111 0010", hex: "72" },
    { character: "s", decimal: "115", binary: "0111 0011", hex: "73" },
    { character: "t", decimal: "116", binary: "0111 0100", hex: "74" },
    { character: "u", decimal: "117", binary: "0111 0101", hex: "75" },
    { character: "v", decimal: "118", binary: "0111 0110", hex: "76" },
    { character: "w", decimal: "119", binary: "0111 0111", hex: "77" },
    { character: "x", decimal: "120", binary: "0111 1000", hex: "78" },
    { character: "y", decimal: "121", binary: "0111 1001", hex: "79" },
    { character: "z", decimal: "122", binary: "0111 1010", hex: "7A" },

    { character: "{", decimal: "123", binary: "0111 1011", hex: "7B" },
    { character: "|", decimal: "124", binary: "0111 1100", hex: "7C" },
    { character: "}", decimal: "125", binary: "0111 1101", hex: "7D" },
    { character: "~", decimal: "126", binary: "0111 1110", hex: "7E" }
];

const CharTablePane = ({ className }) => {
    return (
        <div className={`bg-gray-400 px-2 rounded-2xl h-full ${className || ""}`}>
            <div className="h-full w-full pt-24 flex flex-wrap justify-center overflow-y-scroll" style={{
                scrollbarColor: "#6B7280 transparent"
            }}>
                {entries.map(entry =>
                    <CharTableEntry
                        character={entry.character}
                        hexValue={entry.hex}
                        />
                )}
            </div>
        </div>
    )
}

export default CharTablePane;