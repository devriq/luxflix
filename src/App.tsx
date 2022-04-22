import useFetch from './useFetch';
import NavBar from './components/Navbar';

export default function App() {
  
  const [movieList , movieStatus] = useFetch();

  return (
    <div className="page">
      <NavBar movieList={movieList} movieStatus={movieStatus}/>
      
    </div>
  )
}