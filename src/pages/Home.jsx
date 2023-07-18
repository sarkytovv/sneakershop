import Card from '../components/Card';

function Home({items, searchValue,setSearchValue,onChangeSearchInput,onAddToCart}){
    
    return(
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
        {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}

              // onFavorite={(obj) => onAddToFavorites(obj)}
              onPlus={(obj) => onAddToCart(obj)} />
          ))}
      </div>




    </div>
    );
}

export default Home;