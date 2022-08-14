import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/products"
                element={<Products />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
