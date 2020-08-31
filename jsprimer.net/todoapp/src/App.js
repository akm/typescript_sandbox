import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoItemView } from "./view/TodoItemView.js";
import { element, render } from "./view/html-util.js";

export class App {
  constructor() {
    // 1. TodoListの初期化
    this.todoListModel = new TodoListModel();
  }

  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");

    // 2. TodoListModelの状態が更新されたら表示を更新する
    this.todoListModel.onChange(() => {
      // それぞれのTodoItem要素をtodoListElement以下へ追加する
      const todoItems = this.todoListModel.getTodoItems();
      // TodoリストをまとめるList要素
      const todoListElement = this.createListElement(todoItems, {
          // 指定したTodoアイテムの完了状態を反転させる
          onUpdateTodo: ({id, completed}) => {
            this.todoListModel.updateTodo({
              id: id,
              completed: !completed
            });
          },
          // 削除ボタン(x)がクリックされたときにTodoListModelからアイテムを削除する
          onDeleteTodo: ({id}) => {
            this.todoListModel.deleteTodo({
              id: id
            });
          }
      });

      // containerElementの中身をtodoListElementで上書きする
      render(todoListElement, containerElement);
      // アイテム数の表示を更新
      todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
    });

    // 3. フォームを送信したら、新しいTodoItemModelを追加する
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      // 新しいTodoItemをTodoListへ追加する
      this.todoListModel.addTodo(new TodoItemModel({
        title: inputElement.value,
        completed: false
      }));
      inputElement.value = "";
    });
  }


  /**
   * `todoItems`に対応するTodoリストのHTML要素を作成して返す
   * @param {TodoItemModel[]} todoItems TodoItemModelの配列
   * @param {function({id:string, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
   * @param {function({id:string})} onDeleteTodo 削除ボタンのクリックイベントリスナー
   * @returns {Element} TodoItemModelの配列に対応したリストのHTML要素
   */
  createListElement(todoItems, { onUpdateTodo, onDeleteTodo }) {
    const todoListElement = element`<ul />`;
    // 各TodoItemモデルに対応したHTML要素を作成し、リスト要素へ追加する
    todoItems.forEach(todoItem => {
      const todoItemView = new TodoItemView();
      const todoItemElement = todoItemView.createElement(todoItem, {
        onDeleteTodo,
        onUpdateTodo
      });
      todoListElement.appendChild(todoItemElement);
    });
    return todoListElement;
  }


}
