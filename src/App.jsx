

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pages from './pages/Pages'
import RootRouter from './components/RootRouter'

function App() {
  

  let myRoute=createBrowserRouter(createRoutesFromElements(

    <Route element={<RootRouter/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/pages' element={<Pages/>}/>
    </Route>
  ))

  return (
    <>
    
    <RouterProvider router={myRoute}/>

    </>
  )
}

export default App
