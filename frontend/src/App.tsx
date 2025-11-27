import './App.css'
import { Home } from './Home'
import { Navbar } from './Navbar'
import { Searchbar } from './Searchbar'

function App() {

  return(

    <div className='app'>
      <Navbar />
      <div className='content'>
        <h1>Welcome</h1>
        <Searchbar />
        
      </div>
    </div>

  )

}

export default App
