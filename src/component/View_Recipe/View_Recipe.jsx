import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

const View_Recipe = () => {
     const recipe = useLoaderData();
      const {recipes} = recipe;
 
    //  console.log({recipe.photoURL})

  
  return (
 <div>
   <Container>
   

   <div>
            
            <div className="w-10/12 mx-auto py-40">
                <div className="md:flex items-center gap-8">
                    <div>
                        <img style={{ width: "900px" }} src={recipe.chefPicture
                        } className="rounded-lg shadow-2xl" />
                    </div>
                    <div className='leading-loose'>
                        <h1 className="text-5xl font-bold">{recipe.chefName}</h1>
                        <p className="py-6">{recipe.chefBio}</p>
                        <div className="stats stats-vertical lg:stats-horizontal shadow">

                            <div className="stat">
                                <div className="stat-title">No.of Recipe</div>
                                <div className="stat-value">{recipe.numberOfRecipes}</div>
                                
                            </div>

                            <div className="stat">
                                <div className="stat-title">No. of Likes</div>
                                <div className="stat-value">{recipe.likes}</div>
                            </div>

                            <div className="stat">
                                <div className="stat-title">Years of experinece</div>
                                <div className="stat-value">{recipe.yearsOfExperience} years</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='md:grid grid-cols-2 gap-10 w-10/12 mx-auto pb-20'>
                {
                    
                    recipes.map(recipe => <RecipeCard key={recipe.likes} recipe={recipe}></RecipeCard>)
                }
            </div>
        </div>
   </Container>
 </div>
  );
   
};

export default View_Recipe;