import React from 'react';
import { Container } from 'react-bootstrap';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const Blog = () => {
    return (
       <Container style={{ justifyContent: 'center', marginTop:60 }}>
        
      
    <Card className='mt-5' sx={{ maxWidth: 1500 }}>
      <CardActionArea>
       
          
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          1. Tell us the differences between uncontrolled and controlled components.
          </Typography>
          <Typography variant="body2" color="text.secondary">
         
In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    
      </CardActions>
    </Card>







    <Card className='mt-5' sx={{ maxWidth: 1500 }}>
      <CardActionArea>
       
          
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          2. How to validate React props using PropTypes?
          </Typography>
          <Typography variant="body2" color="text.secondary">
         
         
Props are an important mechanism for passing the read-only attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use props validation in improving react components.

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    
      </CardActions>
    </Card>







          
    <Card className='mt-5' sx={{ maxWidth: 1500 }}>
      <CardActionArea>
       
          
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          3. Tell us the difference between nodejs and express js.
          </Typography>
          <Typography variant="body2" color="text.secondary">
         
         
Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    
      </CardActions>
    </Card>





    <Card className='mt-5' sx={{ maxWidth: 1500 }}>
      <CardActionArea>
       
          
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          4. What is a custom hook, and why will you create a custom hook?
          </Typography>
          <Typography variant="body2" color="text.secondary">
         
         
          
Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    
      </CardActions>
    </Card>



       </Container>
    );
};

export default Blog;


















