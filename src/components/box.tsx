export default function Box(props: { handleClick: (index: number) => void, key: number, value: string, cardIndex: number }) {
    const { handleClick, key, value, cardIndex } = props;

    return (

        <div><button onClick={() => { handleClick(cardIndex) }}>{value} </button></div>

    );
}