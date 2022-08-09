import { BrowserRouter, Route, Routes } from "react-router-dom"
//Pages
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'
//Components
import Nav from './components/Nav'
import CategoriesContext from './context'
//state
import { useState } from 'react'

const App = () => {

  const [categories, setCategories] = useState(null)
  const value = { categories, setCategories }
  console.log()



  return (
    <div className="app">
      <CategoriesContext.Provider value={value} >
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/ticket' element={<TicketPage />} />
            <Route path='/ticket/:id' element={<TicketPage editMode={true} />} />
          </Routes>
        </BrowserRouter>
      </CategoriesContext.Provider>

    </div>
  );
}

export default App
