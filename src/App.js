
import './App.scss';
import Video from './components/Video';
import NavBar from './components/NavBar';
import NavBarOptions from './components/NavBarOptions'
import React from 'react';

import ProductList from './components/ProductList';



function App() {

  

  return (
    <div className="App">
       <NavBar />
       <NavBarOptions />
      <header className="App-header">
          <div className="jumbotron-video">
            <h1>Welcome to MaisieNYC</h1>
            <h5>Handcrafted designs</h5>
            <Video />
          </div>
        <button className='shop-now'>Shop</button>
      </header>
      <ProductList/>
    </div>
  );
}

export default App;





/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
// export default function BasicImageList() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>

//     </div>
//   );
// }

