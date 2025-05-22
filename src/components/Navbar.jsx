import {Link, NavLink} from 'react-router-dom'



export default function Navbar(){


    return(
        <div className="flex items-center justify-between px-20 py-2 bg-cyan-600 text-white text-l shadow-md z-0">

            <div className="text-xl">
                <Link to="/">Ecom</Link>
            </div>
            

            <div className=''>
                <ul className='flex gap-5 items-center'>
                    <li className="">
                        <NavLink to ="/" className={({isActive }) => (isActive) ? "text-cyan-600 bg-white p-1 px-2 rounded-lg": "text-white p-1 px-2 rounded-lg hover:bg-white hover:text-cyan-600" }>Home</NavLink>
                    </li>

                    {/* <li className="">
                        <NavLink to ="/about" className={({isActive }) => (isActive) ? "text-cyan-600 bg-white p-1 px-2 rounded-lg": "text-white p-1 px-2 rounded-lg hover:bg-white hover:text-cyan-600" }>About Us</NavLink>
                    </li> */}
                    <li className="">
                        <NavLink to = "/cart" className={({isActive }) => (isActive) ? "text-cyan-600 bg-white p-1 px-2 rounded-lg": "text-white p-1 px-2 rounded-lg hover:bg-white hover:text-cyan-600" }>Cart</NavLink> 
                    </li>
                    <li className='text-white p-1 rounded-lg hover:bg-white hover:text-cyan-600'>
                        <NavLink to = "/register" className={({isActive }) => (isActive) ? "text-cyan-600 bg-white p-1 px-2 rounded-lg": "text-white p-1 px-2 rounded-lg hover:bg-white hover:text-cyan-600" }>SignUp</NavLink> 
                    </li>
                </ul>

            </div>
        </div>

        
    )
}