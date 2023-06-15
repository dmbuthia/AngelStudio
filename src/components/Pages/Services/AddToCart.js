import React, { useState } from 'react';

const AddToCart = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    onAddToCart(quantity);
  };

  return (
    <div className="flex items-center">
      <label className="mr-2">Quantity:</label>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
        className="border border-gray-400 rounded px-2 py-1"
      />
      <button
        type="button"
        className="ml-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md px-4 py-2"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
