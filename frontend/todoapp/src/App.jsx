
import './App.css'

import {CreateTodo} from './components/CreateTodo'
import {RenderTodo} from './components/RenderTodo'

import useTodos from './fetchData/customHook'

function App() {
  const {todos, setTodos} = useTodos();
  return(
    <div>
        <CreateTodo></CreateTodo>
        <RenderTodo todos={todos} setTodos={setTodos}></RenderTodo>
        
    </div>

  )
}

export default App
