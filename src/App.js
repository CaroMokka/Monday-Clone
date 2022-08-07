import { BrowserRouter, Route, Routes } from "react-router-dom"
//Pages
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'
//Components
import Nav from './components/Nav'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/ticket' element={<TicketPage />} />
          <Route path='/ticket/:id' element={<TicketPage editMode={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
