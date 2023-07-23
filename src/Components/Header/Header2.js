
import React,{useState} from 'react'
import logo from '../../images/Logo.png'
import "./header.scss"
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai"
const Header2 = () => {

    const [navmobile,setNavmble]=useState(false)

    const hanldeNav=()=>{
         setNavmble(!navmobile)
    }
  return (
   <header >
            <nav className='nav_bar'>
            <div className='nav_top flex justify-between items-center'>
                    <div className='brand'>
                      <img src={logo} alt='logo'/>
                    </div>

                    <div className='nav_top_col2'>
           
                     <a className=' btn text-white'>051 844 2556</a>
                     <button className=' btn text-white Register_Startup hover:bg-white'>Register Startup</button>
                     <button className=' btn  hover:bg-white'>Book a Seat</button>
                     </div>
                   
                </div>

                                      <hr class="solid navborder mt-7"/>

                      <div className='nav_bottom flex justify-between items-center'>
                          <ul className='hidden md:flex  pt-4'>
                          <li><a className="nav-link text-white" aria-current="page" href="#">Workspace</a></li>
                          <li><a className="nav-link text-white px-6" aria-current="page" href="#">Company</a></li>
                          <li><a className="nav-link text-white px-6" aria-current="page" href="#">Packages</a></li>
                          <li><a className="nav-link text-white px-6" aria-current="page" href="#">Photo Gallery</a></li>
                          <li><a className="nav-link text-white px-6" aria-current="page" href="#">Our Blog</a></li>
                          <li><a className="nav-link text-white px-6" aria-current="page" href="#">Contact us</a></li>
                          </ul>
                          <div onClick={hanldeNav} className='pb-4 block md:hidden'>
                            {!navmobile ? <AiOutlineClose className='text-white'  size={20}/> : <AiOutlineMenu className='text-white' size={20}/>}
                          
                          </div>
                          <div className={!navmobile ? 'fixed top-0 left-0  w-[40%] border-r border-r-gray-900 ease-in-out duration-500 md:hidden' :"fixed left-[-100%] md:hidden"}>
                          <ul className='pt-32'>
                            
                          <li className='pt-2 pb-2 border-b border-b-gray-500'><a className="nav-link text-white" aria-current="page" href="#">Workspace</a></li>
                          <li className='pt-2 pb-2 border-b border-b-gray-500'><a className="nav-link text-white " aria-current="page" href="#">Company</a></li>
                          <li className='pt-2 pb-2 border-b border-b-gray-500'><a className="nav-link text-white pt-5" aria-current="page" href="#">Packages</a></li>
                          <li className='pt-2 pb-2 border-b border-b-gray-500'><a className="nav-link text-white pt-5" aria-current="page" href="#">Photo Gallery</a></li>
                          <li className='pt-2 pb-2 border-b border-b-gray-500'><a className="nav-link text-white  pt-5" aria-current="page" href="#">Our Blog</a></li>
                          <li className='pt-2 '><a className="nav-link text-white pt-5" aria-current="page" href="#">Contact us</a></li>
                          </ul>
                          </div> 
                      </div>
            </nav>
   </header>
  )
}

export default Header2
