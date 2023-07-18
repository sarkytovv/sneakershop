import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header className="d-flex justify-between align-center">
            <div className="d-flex align-center">
                <Link to={"/"}>
                    <img width={40} height={40} src="/img/logo.png" alt="logo" />
                </Link>
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img width={18} height={18} src="/img/cart.svg" alt="cart" />
                    <span>21212 kzt.</span>
                </li>
                <li className="mr-15 cu-p">
                    <Link to={"/favorites"}>
                        < img width={18} height={18} src="/img/heart.svg" alt="favorites" />
                    </Link>
                </li>
                <li>
                    <img width={20} height={20} src="/img/user.svg" alt="user" />
                </li>
            </ul>
        </header >
    )
}

export default Header;