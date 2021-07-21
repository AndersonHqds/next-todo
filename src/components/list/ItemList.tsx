import Selection from "./Selection"

interface ItemListProps {
    value: string;
    completed: boolean;
    updateStatus: () => void;
}

const ItemList: React.FC<ItemListProps> = (props) => {
    const textStyle = props.completed ? 'line-through text-gray-300' : 'text-gray-500';

    return (
        <li onClick={props.updateStatus} className={`
            flex items-center
            text-black
            p-5 text-xl
            border-b border-gray-400 cursor-pointer
        `}>
            <Selection value={props.completed} />
            <span className={`
                font-light  ml-5
                ${textStyle}
            `}>
                {props.value}
            </span>
        </li>
    )
}
export default ItemList;