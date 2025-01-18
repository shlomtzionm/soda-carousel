import Carousel from '../Carousel/Carousel';
import Navigation from '../Navigation/Navigation';
import './Layout.css';

function Layout():JSX.Element {
  return(
    <div className="Layout">
    <header>
      <Navigation/>
    </header>
    <main>
      <Carousel/>
    </main>
    </div>
  )
}

export default Layout

