import React from 'react';
import Carouseln from '../../component/Carouseln/Carouseln';
import AllChef from '../../component/AllChef/AllChef';
import { Container } from 'react-bootstrap';
import Connection from '../../component/Connection/Connection';
import New_Food from '../../component/New_Food/New_Food';

const Home = () => {
    return (
        <div>
           
            <Container>
            <Carouseln></Carouseln>
            <AllChef></AllChef>

            <New_Food></New_Food>

            <Connection></Connection>
            </Container>
           
        </div>
    );
};

export default Home;