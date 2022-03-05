import styled from "styled-components";
import batman from './batmanLogo.jpeg'

export const Container = styled.main`
    font-family: 'League Gothic', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: black;
    text-align: left;
    /*
    h1 {
        font-size: 300px;
        //background-image: url('https://cdn.atomix.vg/wp-content/uploads/2020/10/New-Project-79.jpg');
        background-image: url("https://raw.githubusercontent.com/shajidhasan/batname/main/src/assets/batman_logo_bg_1200.jpg");
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-repeat: no-repeat;
        background-size: cover;
    } */

    h1 {
        font-size: 2.25rem;
        font-weight: 700;
        color: #B91C1B;
        text-align: left;
        margin-bottom: 2rem;
    }

    input {
        font-family: 'League Gothic', sans-serif;
        font-weight: 700;
        font-size: 3rem;
        min-width: 500px;
        text-align: center;
        background-color: black;
        border: none;
        color: #B91C1B;
        border-bottom: 2px solid #B91C1B;
        padding-bottom: 1rem;
        text-transform: uppercase;
        
        :focus {
            outline: none;
        }
    }

    section.active {
        display: flex;
    }

    section {
        width: 30rem;
        display: none;
        text-align: right;
        justify-content: space-between;
        align-items: right;

        button {
            font-family: 'League Gothic', sans-serif;
            background-color: #B91C1B;
            border: none;
            margin-top: 2rem;
            padding: 0.5rem 2rem;
            font-weight: 700;
            font-size: 1.5rem;
            color: white;
            border-radius: 4px;
        }
    }
`