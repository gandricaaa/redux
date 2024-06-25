
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png'

import { Link } from 'react-router-dom';
function NavbarComponent() {
  const {cart} = useSelector((state) => state.productStore)
  
  return (
    <div className='flex justify-between items-center'>
    <img src={logo} alt=""  className='w-24 rounded-full'/>
        <ul className='flex items-center space-x-4'>
           <Link to='/'>Home</Link>
           <Link to='/products'>Products </Link>
           <Link to='/register'>Register</Link>
           <div>
            <span>{cart.length}</span>
           </div>
        </ul>
    </div>
  )
}

export default NavbarComponent