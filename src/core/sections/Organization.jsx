import { BiExport } from "react-icons/bi"
import { IoMdAdd } from "react-icons/io"
import { BsSearch } from "react-icons/bs"
import { AiOutlineSortAscending } from "react-icons/ai"

export default function Organization() {
   // const [count, setCount] = useState(0)

   return (
      <>

         <section className="container px-4 mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
               {/* heading, desctiption anotification*/}
               <div>
                  <div className="flex items-center gap-x-3">
                     <h2 className="text-lg font-medium text-gray-800">Organization</h2>

                     <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">5</span>
                  </div>

                  <p className="mt-1 text-xs text-gray-500 ">Add an organization that would like to issue the credential. If no organization is found credential will be issued by the registered company</p>
                  {/* buttons and search */}
                  <div className="flex gap-4 pt-4">
                     <button className="min-w-fit max-h-10 flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-100 pointer-events-none">
                        <BiExport size="20" />
                        <span>Import</span>
                     </button>

                     <button className="min-w-fit max-h-10 flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-100">
                        <IoMdAdd size="20" />
                        <span>Add Org</span>
                     </button>

                     {/* search */}
                     <div>
                        <BsSearch className="absolute text-gray-400 ml-3 mt-3" size="16" />
                        <input type="text" placeholder="Search" className="h-10 block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm" />
                     </div>

                  </div>
               </div>
            </div>


            {/* Table */}
            <div className="flex flex-col mt-6">
               <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle px-6 lg:px-8">
                     <div className="overflow-hidden border border-gray-200  rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                           <thead className="bg-gray-50 ">
                              <tr>
                                 <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                    <button className="flex items-center gap-x-3 focus:outline-none">
                                       <span>Org</span>

                                       <AiOutlineSortAscending size="20" />
                                    </button>
                                 </th>

                                 <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                    Status
                                 </th>

                                 <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                    About
                                 </th>

                                 <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Users</th>

                                 <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">License use</th>

                                 <th scope="col" className="relative py-3.5 px-4">
                                    <span className="sr-only">Edit</span>
                                 </th>
                              </tr>
                           </thead>
                           <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                              <tr>
                                 <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                       <h2 className="font-medium text-gray-800 dark:text-white ">Catalog</h2>
                                       <p className="text-sm font-normal text-gray-600 ">catalogapp.io</p>
                                    </div>
                                 </td>
                                 <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                    <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                       Customer
                                    </div>
                                 </td>
                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div>
                                       <h4 className="text-gray-700 dark:text-gray-200">Content curating app</h4>
                                       <p className="text-gray-500 ">Brings all your news into one place</p>
                                    </div>
                                 </td>
                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center">
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="" />
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                       <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                    </div>
                                 </td>

                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                       <div className="bg-blue-500 w-2/3 h-1.5"></div>
                                    </div>
                                 </td>

                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                       </svg>
                                    </button>
                                 </td>
                              </tr>

                              <tr>
                                 <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                       <h2 className="font-medium text-gray-800 dark:text-white ">Circooles</h2>
                                       <p className="text-sm font-normal text-gray-600 ">getcirooles.com</p>
                                    </div>
                                 </td>
                                 <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                    <div className="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full  gap-x-2 dark:bg-gray-800">
                                       Churned
                                    </div>
                                 </td>
                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div>
                                       <h4 className="text-gray-700 dark:text-gray-200">Design software</h4>
                                       <p className="text-gray-500 ">Super lightweight design app</p>
                                    </div>
                                 </td>
                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center">
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="" />
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                       <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                    </div>
                                 </td>

                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                       <div className="bg-blue-500 w-2/5 h-1.5"></div>
                                    </div>
                                 </td>

                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                       </svg>
                                    </button>
                                 </td>
                              </tr>

                              <tr>
                                 <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                       <h2 className="font-medium text-gray-800 dark:text-white ">Sisyphus</h2>
                                       <p className="text-sm font-normal text-gray-600 ">sisyphus.com</p>
                                    </div>
                                 </td>
                                 <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                    <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                       Customer
                                    </div>
                                 </td>
                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div>
                                       <h4 className="text-gray-700 dark:text-gray-200">Automation and workflow</h4>
                                       <p className="text-gray-500 ">Time tracking, invoicing and expenses</p>
                                    </div>
                                 </td>
                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center">
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="" />
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                       <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                    </div>
                                 </td>

                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                       <div className="bg-blue-500 w-11/12 h-1.5"></div>
                                    </div>
                                 </td>

                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                       </svg>
                                    </button>
                                 </td>
                              </tr>

                              <tr>
                                 <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                       <h2 className="font-medium text-gray-800 dark:text-white ">Hourglass</h2>
                                       <p className="text-sm font-normal text-gray-600 ">hourglass.app</p>
                                    </div>
                                 </td>
                                 <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                    <div className="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full  gap-x-2 dark:bg-gray-800">
                                       Churned
                                    </div>
                                 </td>
                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div>
                                       <h4 className="text-gray-700 dark:text-gray-200">Productivity app</h4>
                                       <p className="text-gray-500 ">Time management and productivity</p>
                                    </div>
                                 </td>
                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center">
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="" />
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                       <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                    </div>
                                 </td>

                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                       <div className="bg-blue-500 w-1/3 h-1.5"></div>
                                    </div>
                                 </td>

                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                       </svg>
                                    </button>
                                 </td>
                              </tr>

                              <tr>
                                 <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                       <h2 className="font-medium text-gray-800 dark:text-white ">Quotient</h2>
                                       <p className="text-sm font-normal text-gray-600 ">quotient.co</p>
                                    </div>
                                 </td>
                                 <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                    <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                       Customer
                                    </div>
                                 </td>
                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div>
                                       <h4 className="text-gray-700 dark:text-gray-200">Sales CRM</h4>
                                       <p className="text-gray-500 ">Web-based sales doc management</p>
                                    </div>
                                 </td>
                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center">
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="" />
                                       <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                       <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                    </div>
                                 </td>

                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                       <div className="bg-blue-500 w-1/6 h-1.5"></div>
                                    </div>
                                 </td>

                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                       </svg>
                                    </button>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
               <div className="text-sm text-gray-500 ">
                  Page <span className="font-medium text-gray-700 dark:text-gray-100">1 of 10</span>
               </div>

               <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
                  <a href="#" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                     </svg>

                     <span>
                        previous
                     </span>
                  </a>

                  <a href="#" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                     <span>
                        Next
                     </span>

                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                     </svg>
                  </a>
               </div>
            </div>
         </section>

      </>
   )
}
