import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AddTodo from './component/addtodo'
import ViewTodo from './component/ViewTodo'
import Login from './component/Login'

function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/addbook' element={<AddTodo/>}/>
            <Route path='/view' element={<ViewTodo/>}/>
            <Route path='/' element={<Login/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
