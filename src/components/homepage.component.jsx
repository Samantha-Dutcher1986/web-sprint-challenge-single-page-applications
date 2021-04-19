import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Frame = styled.div`
    width: 50vw,
    margin: center;
`

export default function HomePage(){
    return(
        <Frame>
            <h2>Your favorite food</h2>
            <Link to="/pizza">
                <button>Pizza?</button>
            </Link>
        </Frame>
    )
}