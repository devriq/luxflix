import { SetStateAction, useState } from "react";
import Listagem from "../Listagem";
import logoURL from "../../assets/luxflix-logo.png"
import Movie from "../../Movie";

function NavBar({ movieList, movieStatus }: {movieList: Movie[]; movieStatus: any[] }): JSX.Element {   
    const [listNumber, setListNumber] = useState('2011-2020')

    function handleClick1(): void{
        setListNumber('1960-1995')
    }
    function handleClick2(): void{
        setListNumber('1996-2010')
    }
    function handleClick3(): void{
        setListNumber('2011-2020')
    }
    function handleClick4(): void{
        setListNumber('2021-2022')
    }

    return (
        <>
        <nav>
            <img id="logo" src={logoURL} alt="logIMGo" />
            <ul>
                <li onClick={handleClick1}>1960-1995</li>
                <li onClick={handleClick2}>1996-2010</li>
                <li onClick={handleClick3}>2011-2020</li>
                <li onClick={handleClick4}>2021-2022</li>
            </ul>
        </nav>
        <Listagem listNumber={listNumber} movieList={movieList} movieStatus={movieStatus}/>
        </>

    )
}

export default NavBar;