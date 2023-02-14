import { Link } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {

	return (
	<nav className='nav'>
        <button> <Link to={`/`} >Feed </Link></button>
        <button><Link to={`/post`} > Nova Postagem </Link></button>
	</nav>
      
	);
}

export default Navbar