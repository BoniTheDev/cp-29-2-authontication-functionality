// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <ul className="header-list">
      <li className="each-item">
        <Link to="/">Home</Link>
      </li>
      <li className="each-item">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default Header
