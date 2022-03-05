import React from "react";


import {
    Container,
} from "./styles";

export function Home() {
    return (
        <Container >
            <div>
                <h1>ENTER YOUR NAME</h1>
                <input type="text" id="inputName"/>
            </div>

            <section className="active">
                <h3></h3>
                <button>GO</button>
            </section>
            
        </Container>
    )


    document.querySelector("#inputName").focus()
}