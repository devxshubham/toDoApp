import './App.css'

import {RecoilRoot} from 'recoil'

import useTodos from './fetchData/customHook';
import {SingleTodo} from './components/singleTodo'
import {CreateTodo} from './components/CreateTodo'
import {RenderTodo} from './components/RenderTodo'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path : '/todo', Component : Todos},
  { path : '/todo/:id', Component : SingleTodo}
]);

function App() {
  return <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>;
}

function Todos(){
  const {todos, setChange} = useTodos();
  return <div className="container" >
    <CreateTodo setChange={setChange}></CreateTodo>
    <RenderTodo  todos={todos} setChange={setChange}></RenderTodo>
</div>
}

export default App
