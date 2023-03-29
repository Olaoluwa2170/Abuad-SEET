import {
  Route,
  Routes,
  HashRouter
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'

//layout
import RootLayouts from './layouts/RootLayouts'




function App() {
  

  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<RootLayouts/>}>
              <Route index element={<Home/>}/>
              <Route path='about' element={<About/>}/>
          </Route>
          </Routes>
        </HashRouter>
  )
}

export default App
