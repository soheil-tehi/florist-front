import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import bootstarp
import "bootstrap/dist/css/bootstrap.min.css";
//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Footer from "./Componenst/Footer";
import Blog from "./pages/Blog";
import NavCom from "./Componenst/NavCom";
import Cart from "./pages/Cart";

//import plants class select
import Kaktos from "./pages/PlantSelect/Kaktos";
import HousePlants from "./pages/PlantSelect/HousePlants";
import Sakolent from "./pages/PlantSelect/Sakolent";
import GardenPlants from "./pages/PlantSelect/GardenPlants";

// import show plant details
import ShowPlant from "./Componenst/ShowPlant";

//redux config
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavCom />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" component={Products} />
          <Route path="/blog" component={Blog} />
          <Route path="/cart" component={Cart} />
          <Route path="/plant/kaktos" component={Kaktos} />
          <Route path="/plant/HousePlants" component={HousePlants} />
          <Route path="/plant/Sakolent" component={Sakolent} />
          <Route path="/plant/GardenPlants" component={GardenPlants} />
          <Route path="/detail/:id" component={ShowPlant} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
