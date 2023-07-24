import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    return (
       
        <Card style={{ width: '25rem' }}>
        <Card.Img style={{ height: '15rem'  }} variant="top" src={chef.chefPicture} className="card-image" />
        <Card.Body style={{fontSize:"22px",padding:"20px"}}>
          <Card.Title> </Card.Title>
          <Card.Text >
            <h3>{chef.chefName}</h3>
            <h5>Experience : {chef.yearsOfExperience} Years</h5>
            <h5>Recipes : {chef.numberOfRecipes}</h5>
            <h5>Likes : {chef.likes}</h5>
          </Card.Text>
          <div className="d-flex justify-content-end">
         
          <Link to={`/recipe/${chef.id}`}> <Button style={{ border: 'none', background: 'hsl(39, 100%, 61%)',padding:"12px" }} variant="outline-dark">View Recipes</Button></Link>
        


         
        </div>
        </Card.Body>
      </Card>
     
    );
};

export default Chef;