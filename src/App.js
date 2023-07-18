import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
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
    axios.get('https://64a316fcb45881cc0ae61baa.mockapi.io/allItems').then(res => {
      setItems(res.data);
    })
    axios.get('https://64a316fcb45881cc0ae61baa.mockapi.io/cartItems').then(res => {
      setCartItems(res.data);
    })
  }, []);

  const onAddToCart = async (obj) => {
    const addedItem = await axios.post('https://64a316fcb45881cc0ae61baa.mockapi.io/cartItems', obj);
    console.log('addedItem', addedItem)
    setCartItems([...cartItems, addedItem.data]);
  }


  //должен быть роут favorites но mockapi не дает создать еще один роут, поэтому избранные будут добавляться в корзину
  // const onAddToFavorites = (obj) => {
  //   axios.post('https://64a316fcb45881cc0ae61baa.mockapi.io/cartItems', obj);
  //   setFavorites([...favorites, obj]);
  // }


  //если добавить товар и сразу удалить айди будет андефайнед
  //если добавить товар, обновить страницу и удалить товар то все работает правильно
  const onRemoveItem = async (id) => {
    const deletedItem = await axios.delete(`https://64a316fcb45881cc0ae61baa.mockapi.io/cartItems/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== deletedItem.data.id));
  }


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return <div className="wrapper clear">

    {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
    <Header onClickCart={() => setCartOpened(true)} />

    {/* <Routes>
      <Route path='/' />
      <Home
        items={items}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onChangeSearchInput={onChangeSearchInput}
        onAddToCart={onAddToCart} />
    </Routes> */}

    <Routes>
      <Route path='/' element={
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToCart={onAddToCart} />} />
    </Routes>

    <Routes>
      <Route path='/favorites' element={
        <Favorites items={cartItems} />} />
    </Routes>



  </div >;
}

export default App;
