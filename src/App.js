//import './App.css';
import { useState, useRef, useCallback } from 'react';
import { db } from './Firebase';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { Calender } from './calender';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
//import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import ControlList from './components/ControlList';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import ToDoEdit from './components/ToDoEdit';



function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    // {
    //   id: 2,
    //   text: '컴포넌트 스타일링 하기',
    //   checked: true,
    // },
    // {
    //   id: 3,
    //   text: '투두리스트 만들기',
    //   checked: false,
    // },
  ]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);

  const nextId = useRef(4);
  const onInsertToggle = useCallback(() => {
    if (selectedTodo) {
      setSelectedTodo((selectedTodo) => null);
    }
    setInsertToggle((prev) => !prev);
  }, [selectedTodo]);

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo((selectedTodo) => todo);
  };

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo)); //concat(): 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환
    nextId.current++; //nextId 1씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);
  const onUpdate = useCallback(
    (id, text) => {
      onInsertToggle();

      setTodos((todos) =>
        todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
      );
    },
    [onInsertToggle],
  );
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onRemove={onRemove}
        onChangeSelectedTodo={onChangeSelectedTodo}
        onInsertToggle={onInsertToggle}
      />
      {insertToggle && (
        <ToDoEdit
          onInsert={onInsert}
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onUpdate={onUpdate}
          insertToggle={insertToggle}
        />
      )}
    </TodoTemplate>
  );

  // return (
  //   <div>
  //     <AuthContextProvider>
  //       <Routes>
  //         <Route path='/' element = {<Signin/> } />
  //         {/* <Route path='/a/*' element = {<Home/> } /> */}
  //         <Route path='/signup' element = {<Signup/> } />
  //         {/* <Route path='/a/*' element = {<Home/> } />
  //         <Route path='/account' element = {<Account/> } /> */}
  //         <Route path='/account' element = {<ProtectedRoute><Account/></ProtectedRoute>} />
  //         <Route path='/calender' element = {<ControlList/> } />
  //         <Route path='/todotemplate' element = {<TodoTemplate/> } />
  //       </Routes>
  //     </AuthContextProvider>
  //     {/* <ControlList></ControlList> */}
  //   </div>
  // );
}
export default App;
