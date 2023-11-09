// import { useState } from 'react'

export default function Footer() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <footer className="bg-slate-300 rounded-lg shadow sm:ml-60 ml-4 mr-4 mb-4 p-2">
        <span className="p-4 text-sm text-gray-500 sm:text-center ">© 2023 {process.env.REACT_APP_COMPANY_NAME}™. All Rights Reserved.
        </span>
      </footer>
    </>
  )
}
