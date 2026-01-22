import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AddTodo from './component/addtodo'
import ViewTodo from './component/ViewTodo'

function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<AddTodo/>}/>
            <Route path='/view' element={<ViewTodo/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
