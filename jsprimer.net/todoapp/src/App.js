import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
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
      // TodoリストをまとめるList要素
      const todoListElement = element`<ul />`;
      // それぞれのTodoItem要素をtodoListElement以下へ追加する
      const todoItems = this.todoListModel.getTodoItems();
      todoItems.forEach(item => {
        // 完了済みならchecked属性をつけ、未完了ならchecked属性を外す
        const todoItemElement = this.createItemElement(item, {
          // 指定したTodoアイテムの完了状態を反転させる
          onUpdateTodo: ({id, completed}) => {
            this.todoListModel.updateTodo({
              id: item.id,
              completed: !item.completed
            });
          },
          // 削除ボタン(x)がクリックされたときにTodoListModelからアイテムを削除する
          onDeleteTodo: ({id}) => {
            this.todoListModel.deleteTodo({
              id: item.id
            });
          }
        });
        todoListElement.appendChild(todoItemElement);
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
   * `item`に対応するTodoアイテムのHTML要素を作成して返す
   * @param {TodoItemModel} item
   * @param {function({id:string, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
   * @param {function({id:string})} onDeleteTodo 削除ボタンのクリックイベントリスナー
   * @returns {Element}
   */
  createItemElement(item, { onUpdateTodo, onDeleteTodo }) {
    const todoItemElement = item.completed
          ? element`<li><input type="checkbox" class="checkbox" checked>
                <s>${item.title}</s>
                <button class="delete">x</button>
            </li>`
          : element`<li><input type="checkbox" class="checkbox">
                ${item.title}
                <button class="delete">x</button>
            </li>`;
    const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
    inputCheckboxElement.addEventListener("change", () => {
      // コールバック関数に変更
      onUpdateTodo({
        id: item.id,
        completed: !item.completed
      });
    });
    const deleteButtonElement = todoItemElement.querySelector(".delete");
    deleteButtonElement.addEventListener("click", () => {
      // コールバック関数に変更
      onDeleteTodo({
        id: item.id
      });
    });
    // 作成したTodoアイテムのHTML要素を返す
    return todoItemElement;
  }

}
