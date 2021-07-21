import TaskList from "../../model/TaskList"
import ButtonList from "./ButtonList";

interface FooterListProps {
    tasks: TaskList;
    onChange: (tasks: TaskList) => void; 
}

export default function FooterList(props: FooterListProps) {
    const { tasks, onChange } = props;

    const renderItemQuantity = () => {
        return (
            <>
                <span className="text-gray-300 hidden lg:inline">
                    { tasks.quantity } 
                    { tasks.quantity === 0 ? 
                        " Nenhuma Tarefa Encontrada" 
                        : tasks.quantity === 1 ? " Tarefa Encontrada" :" Tarefas Encontradas" }
                </span>
                <span className="flex-1  hidden lg:inline"></span>
            </>
        )
    }

    const renderFilterButtons = () => {
        return (
            <>
                <ButtonList 
                    selected={tasks.showingAll()}
                    onClick={() => onChange(tasks.removeFilter())}
                    className="hidden md:inline">
                    Todas
                </ButtonList>
                <ButtonList 
                    selected={tasks.showingOnlyActives()}
                    onClick={() => onChange(tasks.filterActives())}
                    className="mx-4">
                    Ativas
                </ButtonList>
                <ButtonList 
                    selected={tasks.showingOnlyCompleteds()}
                    onClick={() => onChange(tasks.filterCompleteds())}
                    >
                    Concluídas
                </ButtonList>
            </>
        )
    }

    const renderExcludeCompleted = () => {
        return (
            <>
                <span className="flex-grow"></span>
                <ButtonList
                    onClick={() => onChange(tasks.excludeCompleteds())}
                >
                    Excluir <span className="hidden md:inline">Concluidas</span>
                </ButtonList>
            </>
        )
    }
    
    return (
        <li className="flex p-5">
            {renderItemQuantity()}
            {renderFilterButtons()}
            {renderExcludeCompleted()}
        </li>
    )
}