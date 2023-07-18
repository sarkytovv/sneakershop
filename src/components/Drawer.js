function Drawer({ onClose, onRemove, items = [] }) {
    console.log(items);
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Корзина
                    <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close"></img>
                </h2>

                {
                    items.length > 0 ?
                        <div>
                            <div className="items" style={{ flex: 1 }}>
                                {
                                    items.map(obj =>
                                        <div className="cartItem d-flex align-center mb-20">

                                            <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>

                                            <div className="mr-20 flex">
                                                <p className="mb-5">{obj.title}</p>
                                                <b>{obj.price}</b>
                                            </div>
                                            <img onClick={() => onRemove(obj.id)} className="removeBtn" src={"/img/btn-remove.svg"} alt="Remove"></img>
                                        </div>)
                                }
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
                        :
                        <div className="cartEmpty d-flex align-center flex-column flex mt-40">
                            <img className="mb-20" width={120} height={120} src="/img/empty-cart.jpg" alt="empty cart img" />
                            <h2>Your Cart is empty</h2>
                            <p className="opacity-6">Add at least one Sneakers, for order</p>
                            <button onClick={onClose} className="greenButton">
                                <img src="/img/arrow.svg" alt="arrow" style={{ transform: 'rotate(180deg)' }} />
                                Go back
                            </button>
                        </div>
                }







            </div>
        </div>
    )
}

export default Drawer;