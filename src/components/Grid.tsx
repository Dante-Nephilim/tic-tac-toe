import { useEffect, useState } from "react";
import Box from './box';

export default function Grid() {
    const [box, boxSet] = useState(Array(9).fill(null));
    const [player, playerSet] = useState<'X' | 'O'>(
        Math.round(Math.random() * 1) === 0 ? 'X' : 'O'
    );
    const [winner, winnerSet] = useState<string | null>(null)
    function checkGamestate() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],

            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (box[a] && box[a] === box[b] && box[a] === box[c]) {
                winnerSet(box[a]);
                return;
            }
        }
        if (box.filter(x => x === null).length === 0) {
            winnerSet("Tie");
        }
    }
    useEffect(
        () => {
            checkGamestate();
        },
        [box]
    )



    function setSquareValue(index: number, value: string) {
        const newBox = [...box];
        newBox[index] = value;
        boxSet(newBox);
    }

    function handleClick(index: number) {
        if (winner) return;
        if (box[index]) return;
        setSquareValue(index, player);
        playerSet(player === 'X' ? 'O' : 'X');

    }
    function Reset() {
        boxSet(Array(9).fill(null));
        playerSet(player === 'X' ? 'O' : 'X');
        winnerSet(null);
    }

    return (<>
        <div className="playerTurn">Hey Player {player},Please Select a Square</div>

        <div className="grid">
            <div className="card">
                {box.map((card, index) => {
                    return (<Box key={index} handleClick={handleClick} value={card} cardIndex={index} />)
                })}
            </div>
        </div>

        { }
        {winner && <><div className="winnerDeclaration"><h1>winner is {winner}</h1><button onClick={Reset}>Reset</button></div></>}
    </>
    );
}