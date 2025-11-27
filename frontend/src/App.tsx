import './App.css'
import { Home } from './assets/components/Home'
import { MovieDetails } from './assets/components/MovieDetails'
import { Navbar } from './assets/components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return(
    <>
    <Navbar />
    <div className='app'>
      <Routes>
        <Route path='/' element={
          <div className='content'>
            <Home />
          </div>
        } />
        <Route path='/movie/:title' element={
          <div className='content'>
            <MovieDetails />
          </div>
        } />
      </Routes>
    </div>
  </>
  )
}

export default App
