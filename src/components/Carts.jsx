import React, { useState } from 'react';
import Closebutton from './Closebutton';

const dummyData = [
  { id: 1, name: 'Item 1', price: 100, quantity: 1, image: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Item 2', price: 150, quantity: 1, image: 'https://via.placeholder.com/50' },
  { id: 3, name: 'Item 3', price: 200, quantity: 1, image: 'https://via.placeholder.com/50' },
];

const ShoppingCart = () => {
  const [isChatVisible, setIsChatVisible] = useState(true);
  const [cartItems, setCartItems] = useState(dummyData);
  const [totalPrice, setTotalPrice] = useState(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));


  const toggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  const handleAddItem = (id) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
    updateTotalPrice(updatedItems);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
    updateTotalPrice(updatedItems);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    updateTotalPrice(updatedItems);
  };

  const updateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  return (
    <div    className={`nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 ${
      isChatVisible? '' : 'hidden'
    }`}>
    <div className="flex justify-between items-center">
      <div className="flex gap-3">
        <p className="font-semibold text-lg dark:text-gray-200">Shopping cart</p>
    
      </div>
      <Closebutton onClick={toggleChat} />
    </div>
     
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b-1 border-color p-3">
          <div className="flex items-center gap-3">
            <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded-full" />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.name}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">${item.price}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">x{item.quantity}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => handleRemoveItem(item.id)} className="text-gray-500 dark:text-gray-400 text-sm">-</button>
            <button onClick={() => handleAddItem(item.id)} className="text-gray-500 dark:text-gray-400 text-sm">+</button>
            <button onClick={() => handleDeleteItem(item.id)} className="text-red-500 dark:text-red-400 text-sm">Remove</button>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center mt-4">
        <p className="font-semibold text-lg dark:text-gray-200">Total:</p>
        <p className="font-semibold text-lg dark:text-gray-200">${totalPrice}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
