import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return ( 
    <>
    <header className='flex flex-row justify-between p-1 bg-gray-500'>
    <div className='flex justify-center text-white'>
        <img src={logo} alt="logo" className='h-12' />
        <h1 className='text-3xl font-bold'>Alertify</h1>        
    </div>
      <nav >
       <ul className='flex gap-10 m-2 text-xl font-bold text-white' >
        <li>
          Home
        </li>
        <li>
          Incidents
        </li>
        <li>
          Community
        </li>
        <li>
          Login
        </li>
       </ul>
      </nav>
    </header>
    </>
   );
}
 
export default Header;