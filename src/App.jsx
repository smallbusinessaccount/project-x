import Sidebar from './core/Sidebar'
import Header from './core/Header'
import Footer from './core/Footer'
import MainContent from './core/MainContent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Sidebar />
      <div className="flex flex-col min-h-screen">
        <MainContent />
        <Footer />
      </div>

    </>
  )
}

export default App
