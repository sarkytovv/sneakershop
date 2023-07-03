import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://64a316fcb45881cc0ae61baa.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });

  }, []);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  }

  return <div className="wrapper clear">

    {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> : null}
    <Header onClickCart={() => setCartOpened(true)} />
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>All Sneakers</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Search..." />
        </div>
      </div>

      <div className="d-flex flex-wrap mb-20">
        {items.map((item) => (
          <Card
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onFavorite={() => console.log('added to favorite')}
            onPlus={(obj) => onAddToCart(obj)} />
        ))}
      </div>




    </div>
  </div >;
}

export default App;
