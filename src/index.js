class ToDoList {
  constructor () {
    this._list = [];
  }

  addItem (title) {
    this._list.push(new ToDo(title));
  }
}

class ToDo {
  constructor (title) {
    this._title = title;
    this._isFinished = false;
  }

  finishTodo () {
    this._isFinished = true;
  }
}

const myList = new ToDoList();

console.log(myList);
myList.addItem('Task 1');
myList.addItem('Task 2');
myList.addItem('Task 3');
myList._list[1].finishTodo();
console.log(myList);
