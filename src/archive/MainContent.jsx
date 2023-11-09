import Dashboard from './sections/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function MainContent() {
   // const [count, setCount] = useState(0)

   return (
      <>
         <div className="p-4 sm:ml-56 sm:mt-16 flex-grow">
            <Dashboard />
         </div>
      </>
   )
}
