import './App.css';
import useFetch from './useFetch';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Listagem from './components/Listagem';

export default function App() {
  
  const [movieList , movieStatus] = useFetch();

  return (
    <div className="page">
      <NavBar movieList={movieList} movieStatus={movieStatus}/>
      <Footer />
    </div>
  )
}