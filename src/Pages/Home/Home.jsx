import React from 'react';
import View_Recipe from '../../component/View_Recipe/View_Recipe';
import Carouseln from '../../component/Carouseln/Carouseln';
import NewLogin from '../NewLogin/NewLogin';
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