
import './App.css'

import {CreateTodo} from './components/CreateTodo'
import {RenderTodo} from './components/RenderTodo'

import useTodos from './fetchData/customHook'

function App() {
  const {todos, setChange} = useTodos();
  return(
    <div>
        <CreateTodo setChange={setChange}></CreateTodo>
        <RenderTodo todos={todos} setChange={setChange}></RenderTodo>
        
    </div>

  )
}

export default App
