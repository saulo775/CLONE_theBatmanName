import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: black;
    h1 {
        font-family: 'League Gothic', sans-serif;
        font-size: 300px;
        background-image: url('https://cdn.atomix.vg/wp-content/uploads/2020/10/New-Project-79.jpg');
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-repeat: no-repeat;
        background-size: cover;
    }
`