import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  { title: 'Мужские кроссовки Nike Blazer Mid Suede', price: '12 999', imageUrl: 'img/sneakers/1.jpg' },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: '15 600', imageUrl: 'img/sneakers/2.jpg' },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499', imageUrl: 'img/sneakers/3.jpg' },
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999', imageUrl: 'img/sneakers/4.jpg' },
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return <div className="wrapper clear">

    {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}
    <Header onClickCart={() => setCartOpened(true)} />
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>All Sneakers</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Search..." />
        </div>
      </div>

      <div className="d-flex">
        {arr.map((obj) => (
          <Card
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onFavorite={() => console.log('added to favorite')}
            onPlus={() => console.log('added to cart')} />
        ))}
      </div>




    </div>
  </div >;
}

export default App;
