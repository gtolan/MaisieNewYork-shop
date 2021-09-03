import shoppingCart from '../images/shopping-cart.svg'

const NavBarOptions = () => {
    return (
        <nav className="bottom-nav">
        <div className="left-nav">
        <button className="hamburger hamburger--elastic" type="button"
                aria-label="Menu" aria-controls="navigation">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
        </button>
        </div>
        <div className="mid-nav">
    
        </div>
        <div className="right-nav">
            <img className="center-logo" alt="navbar logo" src={shoppingCart}/>
        </div>

        </nav>
    )
}

export default NavBarOptions
