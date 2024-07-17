import "./App.css";
import Footer from "./Pages/Footer";
import ProductGrid from "./Pages/ProductGrid";
import Sidebar from "./Pages/Sidebar";
import NavbarOne from "./Pages/Navbar/NavbarOne";

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <header>
        <NavbarOne />
      </header>
      <main className="md:flex">
        <Sidebar />
        <ProductGrid />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
