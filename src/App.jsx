// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './Context/AppProvider';

function App() {
  const {loading} = useGlobalContext()

  if(loading){
    return <div>Loading,,,....</div>
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
