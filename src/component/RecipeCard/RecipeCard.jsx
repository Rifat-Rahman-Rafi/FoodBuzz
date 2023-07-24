import React, { useState } from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar, FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RecipeCard = ({ recipe }) => {
    console.log(recipe);
    const [isVisible, setIsVisible] = useState(true);
    const notify = () => {
        toast("showing the recipe is your favorite");
        setIsVisible(false);
    }
    return (
        
        <div className='mt-10'>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{recipe.recipeName}</h2>
                    <p className='font-bold'>Ingrediants: </p>
                    {
                        recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)
                    }
                    <p><span className='font-bold'>Cooking Method:</span> {recipe.cookingMethod}</p>
                

                    <div className="card-actions flex justify-between items-center">
                        <Rating className='text-xl text-warning' placeholderRating={recipe.rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}>
                        </Rating>
                        {
                            isVisible &&
                            <button onClick={notify} className={`btn btn-primary`}><FaRegHeart className='text-2xl'></FaRegHeart></button>
                        }
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;