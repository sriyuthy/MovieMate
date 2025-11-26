import './App.css'
import { Home } from './Home'
import { Navbar } from './Navbar'
import { Searchbar } from './Searchbar'

function App() {

  return(

    <div className='app'>
      <Navbar />
      <div className='content'>
        <Searchbar />
        <Home />
      </div>
    </div>

  )

}

export default App
