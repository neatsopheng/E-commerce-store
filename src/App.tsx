import './App.css'
import Fetch from './Fetch'
import CartView from './MainPage/CartView'
import Footer from './MainPage/Footer'
import ProductGrid from './MainPage/ProductGrid'
import Sidebar from './MainPage/Sidebar'
import NavbarOne from './Navbar/NavbarOne'

function App() {
return (
    <div className='bg-gray-100 h-screen'>
      <header>
        <NavbarOne />
      </header>
      <main className='md:flex'>
        <Sidebar />
        <ProductGrid />
      </main>

      <footer>
        <Footer />
        
      </footer>
    </div>
  )
}

export default App
