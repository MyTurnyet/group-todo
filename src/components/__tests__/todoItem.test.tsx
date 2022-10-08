import {render, RenderResult} from '@testing-library/react';
import {TodoItem} from '../TodoItem';


describe('Todo Item', () => {
    const title = 'FOO!';
    const todoItem:RenderResult = render(<TodoItem title={title}/>);
    it('displays item title', () => {
        todoItem.getByText(title);
    });
});