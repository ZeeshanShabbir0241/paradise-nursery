
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total items count for the navbar icon badge
  const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Plant Data: 3 Categories, 6 Plants each (18 plants total)
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, perfect for bedrooms.", cost: "$15" },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene from indoor air.", cost: "$12" },
        { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg", description: "Removes harmful mold spores and toxins.", cost: "$18" },
        { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Restores moisture and purifies air naturally.", cost: "$14" },
        { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/plant-4850669_1280.jpg", description: "Large shiny leaves that absorb airborne pollutants.", cost: "$22" },
        { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/18/08/aloe-vera-3284620_1280.jpg", description: "Cleans air and provides soothing gel for burns.", cost: "$10" }
      ]
    },
    {
      category: "Aromatic & Medicinal Plants",
      plants: [
        { name: "Lavender", image: "https://cdn.pixabay.com/photo/2017/07/07/12/31/lavender-2481326_1280.jpg", description: "Soothes stress and improves sleep quality.", cost: "$20" },
        { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Fragrant herb that enhances memory and cooking.", cost: "$15" },
        { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/26/18/16/mint-1163013_1280.jpg", description: "Refreshing scent and great for herbal teas.", cost: "$12" },
        { name: "Eucalyptus", image: "https://cdn.pixabay.com/photo/2016/11/29/05/07/eucalyptus-1867472_1280.jpg", description: "Invigorating aroma that helps clear sinuses.", cost: "$25" },
        { name: "Basil", image: "https://cdn.pixabay.com/photo/2016/07/22/10/05/basil-1534509_1280.jpg", description: "Aromatic herb popular in culinary dishes.", cost: "$11" },
        { name: "Thyme", image: "https://cdn.pixabay.com/photo/2017/06/12/19/02/thyme-2396489_1280.jpg", description: "Medicinal herb with powerful antibacterial qualities.", cost: "$13" }
      ]
    },
    {
      category: "Low Maintenance & Succulents",
      plants: [
        { name: "ZZ Plant", image: "https://cdn.pixabay.com/photo/2021/01/29/14/41/zz-plant-5961238_1280.jpg", description: "Thrives in low light with minimal watering.", cost: "$24" },
        { name: "Pothos", image: "https://cdn.pixabay.com/photo/2020/05/26/09/32/pothos-5222230_1280.jpg", description: "Hardy trailing vine, practically indestructible.", cost: "$14" },
        { name: "Jade Plant", image: "https://cdn.pixabay.com/photo/2020/03/17/13/20/jade-plant-4940263_1280.jpg", description: "Symbol of good luck and very easy to care for.", cost: "$16" },
        { name: "Echeveria", image: "https://cdn.pixabay.com/photo/2016/11/21/16/06/succulent-1846153_1280.jpg", description: "Rose-shaped succulent requiring very little water.", cost: "$9" },
        { name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2019/12/03/11/10/aspidistra-4670001_1280.jpg", description: "Tolerates neglect, low light, and temperature fluctuations.", cost: "$28" },
        { name: "Haworthia", image: "https://cdn.pixabay.com/photo/2018/02/08/10/36/succulent-3139151_1280.jpg", description: "Small zebra-striped succulent, perfect for desks.", cost: "$10" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      {/* Navbar visible across both pages */}
      <nav className="navbar">
        <div className="navbar-logo" onClick={handlePlantsClick} style={{ cursor: 'pointer' }}>
          <h3>Paradise Nursery</h3>
        </div>
        <div className="navbar-links">
          <a href="#" onClick={handlePlantsClick}>Plants</a>
          <a href="#" onClick={handleCartClick} className="cart-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="34" width="34">
              <rect width="256" height="256" fill="none"></rect>
              <circle cx="80" cy="216" r="12"></circle>
              <circle cx="184" cy="216" r="12"></circle>
              <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,180,176H84a15.9,15.9,0,0,1-15.3-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#FAF9F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path>
            </svg>
            {totalItemsCount > 0 && <span className="cart-badge">{totalItemsCount}</span>}
          </a>
        </div>
      </nav>

      {/* Toggle between Product Catalog and Cart Page */}
      {!showCart ? (
        <div className="product-grid-container">
          {plantsArray.map((categoryObj, catIndex) => (
            <div key={catIndex} className="category-section">
              <h2 className="category-title">{categoryObj.category}</h2>
              <div className="product-list">
                {categoryObj.plants.map((plant, plantIndex) => {
                  const isAdded = addedToCart[plant.name] || cartItems.some((item) => item.name === plant.name);
                  return (
                    <div key={plantIndex} className="product-card">
                      <img src={plant.image} alt={plant.name} className="product-image" />
                      <h3 className="product-title">{plant.name}</h3>
                      <p className="product-description">{plant.description}</p>
                      <p className="product-price">{plant.cost}</p>
                      <button
                        className={`add-to-cart-btn ${isAdded ? 'disabled' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                      >
                        {isAdded ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
