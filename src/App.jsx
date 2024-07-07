import { Fragment, useState } from 'react'
import Header from './components/Layout/Header'
import ResponsiveNavbar from './components/Layout/ResponsiveNavbar';



function App() {
  const [navShown, setnavShown] = useState(false);


  const showNavHandler = () => {
    setnavShown(true);
  };

  const hideNavHandler = () => {
    setnavShown(false);
  };

  return (
    <Fragment>
      <Header
        onShowNav={showNavHandler}
      />

      {navShown && <ResponsiveNavbar
        onClose={hideNavHandler}
      />}
    </Fragment>
  )
}

export default App
