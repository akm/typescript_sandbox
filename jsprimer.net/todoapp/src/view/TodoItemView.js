import { element } from "./html-util.js";

export class TodoItemView {

  /**
   * `item`に対応するTodoアイテムのHTML要素を作成して返す
   * @param {TodoItemModel} item
   * @param {function({id:string, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
   * @param {function({id:string})} onDeleteTodo 削除ボタンのクリックイベントリスナー
   * @returns {Element}
   */
  createElement(item, { onUpdateTodo, onDeleteTodo }) {
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
        completed: item.completed
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
