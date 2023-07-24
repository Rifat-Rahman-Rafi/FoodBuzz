import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import './AllChef.css'
const AllChef = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
          .then(res => res.json())
          .then(data => setChefs(data)) // Update the state with fetched data
          .catch(error => console.log(error)); // Handle any error
      }, []);

    return (
        <div className="all-chefs-container">
        <h1  style={{fontSize:"50px"}} className="text-center mt-5 mb-2 ">Our <small className='chef_text'>Chef</small></h1>
<p className="text-center mb-5">A chef is a professional cook and tradesman who is proficient in all
aspects of food preparation, often focusing on a particular cuisine.</p>
        <div className="card-container">
          {chefs.map(chef => (
            <Chef key={chef.id} chef={chef} />
          ))}
        </div>
      </div>
    );
};

export default AllChef;
