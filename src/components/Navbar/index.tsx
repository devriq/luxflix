import { useState } from "react";
import Listagem from "../Listagem";
import logoURL from "../../assets/luxflix-logo.png"

function NavBar(): JSX.Element {

    

    return (
        <>
        <nav>
            <img id="logo" src={logoURL} alt="logIMGo" />
            <ul>
            </ul>
        </nav>
        </>

    )
}

export default NavBar;