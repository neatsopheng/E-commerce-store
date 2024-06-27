import "../App.css"
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";

function Homepage() {
  return (
    <div className="bg-gray-100 h-screen flex-1">
      <main className="">
        <ProductGrid />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Homepage;
