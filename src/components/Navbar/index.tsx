import {useState } from "react";
import Listagem from "../Listagem";
import logoURL from "../../assets/luxflix-logo.png"
import Movie from "../../Movie";


const pages = ['1960-1995', '1996-2010', '2011-2020', '2021-2022'];

function NavBar({ movieList, movieStatus }: {movieList: Movie[]; movieStatus: any[] }): JSX.Element {   
    const [listNumber, setListNumber] = useState('')

 
  

  function handleClick(event: React.MouseEvent<HTMLElement>): void{
        setListNumber(event.currentTarget.innerText)
    }

    return (
        <>
        
              {pages.map((page) => (
                <div onClick={handleClick}>{page}</div>              ))}
           <img src={logoURL}  />
            
          <Listagem listNumber={listNumber} movieList={movieList} movieStatus={movieStatus}/>
        </>

    )
}

export default NavBar;