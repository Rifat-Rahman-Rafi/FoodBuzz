import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FavoriteButton.css'
const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState(false);
  
    const handleFavoriteClick = () => {
      setIsFavorite(true);
      toast.success('Added to favorites!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    };
  
    return (
      <div>
<button onClick={handleFavoriteClick} disabled={isFavorite} className="favorite-button">
  {isFavorite ? '' : <span id="favoriteIcon" className="favorite-icon">&#9825;</span>}
</button>


        <ToastContainer />
      </div>
    );
  };
  
  export default FavoriteButton;
  