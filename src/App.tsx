import './App.css';
import useFetch from './useFetch';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Listagem from './components/Listagem';

export default function App() {
  
  const [movieList , movieStatus] = useFetch();

  return (
    <div className="page">
      <NavBar/>
      <Listagem listNumber='1960-1995' movieList={movieList} movieStatus={movieStatus}/>
      <Listagem listNumber='1996-2010' movieList={movieList} movieStatus={movieStatus}/>
      <Listagem listNumber='2011-2020' movieList={movieList} movieStatus={movieStatus}/>
      <Listagem listNumber='2021-2022' movieList={movieList} movieStatus={movieStatus}/>
      <Footer />
    </div>
  )
}