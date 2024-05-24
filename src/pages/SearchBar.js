import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ ItemList }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  //   const itemList = [
  //     { name: "Apple", price: "$1.99" },
  //     { name: "Banana", price: "$0.99" },
  //     { name: "Orange", price: "$1.49" },
  //     { name: "Strawberry", price: "$2.49" },
  //     { name: "Grapes", price: "$3.99" },
  //     { name: "Watermelon", price: "$4.99" },
  //   ];
  // const ItemList = [...Birbuckt , ...Buckt , ...Chick , ...Perichicken , ...Value]

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = ItemList.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search query:", searchQuery);
    const filtered = ItemList.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button class="btn btn-primary" type="submit">Search</button>
      </form>
      <ul className="item-list d-flex w-100">
      <div className='row'>
        {searchQuery === "" ? (
          ItemList.map((item, index) => (<></>))
          // <li key={index}>{item.img} -
          //   {item.title} - {item.price} -{item.des}
          // </li>
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            
              <div class="col-lg-4 mt-4">
                <div className="card h-100" key={item.id}>
                  <div class="card-body">
                    <img src={item.img} class="card-img-top" alt="..." />
                    <h6 class="card-title">{item.title}</h6>
                    <h6>₹{item.price}</h6>
                    <h6>{item.des}</h6>
                    <button type="button" className='btn btn-danger'>ADD TO CART</button>
                  </div>
                </div>
              </div>
          ))
        ) : (
          <li>No matching items found</li>
        )}
         </div>
      </ul>
      


    </div>
  );
};

export default SearchBar;

