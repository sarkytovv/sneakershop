function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove"></img></h2>

                <div className="items" style={{ flex: 1 }}>
                    <div className="cartItem d-flex align-center mb-20">

                        <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <p className="mb-5">LLDSALDLASDLASLDLAS L LADSL LASL DALS DLAS LDSA</p>
                            <b>12 999kzt.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"></img>
                    </div>

                    <div className="cartItem d-flex align-center mb-20">

                        <div style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
                            <b>12 999kzt.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"></img>
                    </div>

                    <div className="cartItem d-flex align-center">

                        <div style={{ backgroundImage: 'url(/img/sneakers/3.jpg)' }} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
                            <b>12 999kzt.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"></img>
                    </div>

                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b> 21 212 kzt.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b> 1 000 kzt.</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
                </div>

            </div>
        </div>
    )
}

export default Drawer;