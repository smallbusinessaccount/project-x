// import { useState } from 'react'

export default function MainContent() {
   // const [count, setCount] = useState(0)

   return (
      <>
         <div className="p-4 sm:ml-56">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
               <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  </div>
                  <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  </div>
                  <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  </div>
               </div>
               <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
               </div>
            </div>
         </div>
      </>
   )
}
