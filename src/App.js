import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewArrivals from './components/NewArrivals';
import TopSelling from './components/TopSelling';
import DressStyle from './components/DressStyle';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar />
    <Home />
    <NewArrivals />
    <TopSelling />
    <DressStyle />
    <Footer />
    </>
  );
}

export default App;

