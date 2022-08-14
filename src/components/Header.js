import { Link } from 'react-router-dom';
import logo from '../images/chaya.jpg'
import login from '../images/icons8-user-90.png'
import cart from '../images/icons8-shopping-cart-48.png'
function Header () {
    return (
        <div className="header-container">

            <div className="logo">
                <img className="img" src={logo}/>
            </div>

            <div className="logo-separator"/>

            <div className="search-bar">
                <input type="text" className="search-input icon-rtl" placeholder="جستجوی محصول" />
            </div>

            <div className="search-separator"/>

            <div className="login">
                <img src={login}/>
                <p>ورود / ثبت نام</p>
            </div>

            <div className="cart">
                <img src={cart}/>
                <p>سبد خرید</p>
            </div>

        </div>

    )
}

export default Header;