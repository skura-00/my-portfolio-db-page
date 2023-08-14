import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
    <nav className="nav_container">
      <ul>
        <li><Link to='/' className='link'>Home</Link></li>
        <li><Link to='/insert' className='link'>Insert</Link></li>
        <li><Link to='/select' className='link'>Select 1</Link></li>
        <li><Link to='/select2' className='link'>Select 2</Link></li>
      </ul>
      
    </nav>
  )
}

export default Navigation