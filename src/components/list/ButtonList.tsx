interface ButtonListProps {
    selected?: boolean;
    className?: string;
    children: any;
    onClick: (event: any) => void;
}

const ButtonList: React.FC<ButtonListProps> = (props) => {
    const border = props.selected ? 'border-b-4 border-purple-400' : '';

    return (
        <button onClick={props.onClick} className={`
            text-gray-500 font-semibold hover:text-black
            focus:outline-none ${border}
            ${props.className}
        `}>
            { props.children }
        </button>
    )
}

export default ButtonList;