import * as React from 'react';
import { mount } from 'enzyme';
import TodoList from './TodoList';

describe('TodoList', () => {
    const todos = [
        { id: 1, text: "foo", completed: false },
        { id: 2, text: "bar", completed: true },
        { id: 3, text: "baz", completed: false },
    ]
    const setupTodoList = (handler: (id: number) => void): JSX.Element => {
        return <TodoList todos={todos} toggleTodo={handler} />;
    }

    it('shows with ul and li', () => {
        // shallow ではなく mount を使っているのは、childrenをrenderする必要があるため。
        // https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913
        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
        // https://enzymejs.github.io/enzyme/docs/api/mount.html
        const todoList = mount(setupTodoList((_: number) => { }));
        // https://jestjs.io/docs/ja/expect#tohavelengthnumber
        expect(todoList.find('ul').find('li')).toHaveLength(todos.length);
    })

    it('emits an event with id on click', () => {
        let clickedIDs: number[] = [];
        const todoList = mount(setupTodoList((id: number) => clickedIDs.push(id)));
        const texts = ['bar', 'baz', 'foo']
        texts.forEach(text => {
            todoList.find('li').findWhere(x => x.contains(text)).first().simulate('click')
        })
        expect(clickedIDs).toEqual([2, 3, 1])
    })
});
