function Header() {
    return (
        <header className="d-flex justify-between align-center">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt="logo" />
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img width={18} height={18} src="/img/cart.svg" alt="cart" />
                    <span>21212 kzt.</span>
                </li>
                <li>
                    <img width={20} height={20} src="/img/user.svg" alt="user" />
                </li>
            </ul>
        </header>
    )
}

export default Header;