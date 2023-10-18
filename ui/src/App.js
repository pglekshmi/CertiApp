import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Certificate from './Components/Certificate'
import Front from './Components/Front'
import Issue from './Components/Issue'

export default function App() {
 

  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path='/' element={<Front />}/>
        <Route path='/issue' element={<Issue />}/>
        <Route path='/view' element={<Certificate />} />
      </Routes>
    </main>
    </BrowserRouter>
  )
}