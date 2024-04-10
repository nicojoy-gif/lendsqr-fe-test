import '../styles/main.scss'
import logo from '../assets/Group.svg';
import loginimg from '../assets/pablo-sign-in_1-removebg-preview.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="Logo" className="logo" />
        <img src={loginimg} alt="Login" className="login-image" />
      </div>
      <div className="text-container">
        <h2 className='header'>Welcome!</h2>
        <p>Enter details to login.</p>
        <form>
          <div className="form-group">
           
            <input type="email" id="email" name="email"  placeholder='Email'/>
          </div>
          <div className="form-group">
          
            <input type="password" id="password" name="password" placeholder='Password'/>
          </div>
          <div className='form-group'>
<p>FORGOT PASSWORD</p>
          </div>
          <Link to='/dashboard' >
          <button type="submit">
     
            LOG IN</button>
            </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
