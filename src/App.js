import React, { useEffect, useMemo, useState, useRef } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
const App = () => {
  // prop
  const [todoList, setTodoList] = useState([]);
  const addTodo = (todo) => {
    const tempTodoList = [...todoList];
    tempTodoList.push(todo);
    setTodoList(tempTodoList);
  };

  const deleteTodo = (index) => {
    const tempTodoList = [...todoList];
    tempTodoList.splice(index, 1);
    setTodoList(tempTodoList);
  };
  // useState 숫자 변경
  const [list, setList] = useState([0, 0, 0]);
  const changeList = (index) => {
    const tempList = [...list];
    tempList[index] = tempList[index] + 1;
    setList(tempList);
  };
  // useEffect
  const [count, setCount] = useState(0);
  const countUp = () => setCount(count + 1);
  useEffect(() => {
    console.log("useEffect!!", count);
  });
  // useMemo
  // useRef
  return (
    <div>
      {/* prop */}
      <h1>부모</h1>
      <hr />
      <Child1 data={todoList} setData={addTodo} />
      <Child2 data={todoList} deleteData={deleteTodo} />
      {/* useState숫자변경 */}
      <hr />
      <div>{list[0]}</div>
      <div>{list[1]}</div>
      <div>{list[2]}</div>
      <button onClick={() => changeList(0)}>0번 변경</button>
      <button onClick={() => changeList(1)}>1번 변경</button>
      <button onClick={() => changeList(2)}>2번 변경</button>
      {/* useEffect */}
      <hr />
      <p>{count}번 클릭!</p>
      <button onClick={countUp}>Click Me</button>
    </div>
  );
};

export default App;
