import { Link } from 'react-router-dom'
import '../styles/NavigationBar.css'
export function NavigationBar () {
  
  return (
    <div className='navigation-bar'>
      <div className='navigation-container'>
        <div className='nav-logo'>
          <img src='/images/PHONGKER-COM-LOGO-02.gif' width={200}/>
        </div>
        <ul className='nav-menu'>
          <li className='nav-menu-item'>
            <Link to='/' className='nav-menu-link'> Trang chủ
            </Link>
          </li>
          <li className='nav-menu-item'>
            <Link to='/money' className='nav-menu-link'> Nạp tiền
            </Link>
          </li>
          <li className='nav-menu-item'>
            <Link to='/service' className='nav-menu-link'> Dịch vụ
            </Link>
          </li>
          <li className='nav-menu-item'>
            <Link to='/' className='nav-menu-link'> Chưa biết
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
