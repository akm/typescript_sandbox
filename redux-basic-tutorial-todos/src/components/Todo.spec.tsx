import * as React from 'react';
import { shallow } from 'enzyme';
import Todo from './Todo';

describe('Todo', () => {

    const setupTodo = (text: string, completed: boolean, onClick: () => void): JSX.Element => {
        return <Todo onClick={onClick} completed={completed} text={text} />;
    }

    it('has no style incompleted without completed', () => {
        const todo = shallow(setupTodo('foo', false, () => { }))
        // expect(todo.prop('stype')).toEqual({ 'textDecoration': 'none' })
        expect(todo.prop('stype')).toBeUndefined()
    })

    it('has textDecoration style with completed', () => {
        const todo = shallow(setupTodo('foo', true, () => { }))
        expect(todo.prop('style')).toEqual({ 'textDecoration': 'line-through' })
    })

    it('emits an event on click', () => {
        let called = false;
        const todo = shallow(setupTodo('foo', false, () => { called = true }))
        todo.simulate('click')
        expect(called).toBeTruthy()
    })

})
