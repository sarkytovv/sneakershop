import Card from "../components/Card";

function Favorites({items}){
    
    return(
        <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>My favorites</h1>
      </div>

      <div className="d-flex flex-wrap mb-20">
      {items
          .map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              favorited={true}
               />
          ))}
      </div>




    </div>
    );
}

export default Favorites;