import {TodoItem} from './TodoItem';

export const TodoList = (props: { title: string }) => {
    return (<>
        <div>{props.title}</div>
        <TodoItem title={'todo item 1'}/>
    </>)
}
