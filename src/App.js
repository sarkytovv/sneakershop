import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    // fetch('https://64a316fcb45881cc0ae61baa.mockapi.io/items')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //   });

    //replace fetch to axios
    axios.get('https://64a316fcb45881cc0ae61baa.mockapi.io/items').then(res => {
      setItems(res.data);
    })
    axios.get('https://64a316fcb45881cc0ae61baa.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    })
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://64a316fcb45881cc0ae61baa.mockapi.io/cart', obj);
    setCartItems([...cartItems, obj]);
  }

  const onRemoveItem = (id) => {
    // axios.delete(`https://64a316fcb45881cc0ae61baa.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return <div className="wrapper clear">

    {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
    <Header onClickCart={() => setCartOpened(true)} />
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>{searchValue ? `searching: "${searchValue}"` : 'All Sneakers'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Clear"></img>}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
        </div>
      </div>

      <div className="d-flex flex-wrap mb-20">
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={index}
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
