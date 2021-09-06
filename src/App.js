
import './App.scss';
import Video from './components/Video';
import NavBar from './components/NavBar';
import NavBarOptions from './components/NavBarOptions'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import socialMediaApi from './images/imageList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
}));



function App() {

  

  const classes = useStyles();
  return (
    <div className="App">
       <NavBar />
       <NavBarOptions />
      <header className="App-header">
          <div className="jumbotron-video">
            <Video />
            <div className="video-right-jumbotron">
            <ImageList rowHeight={160} className={classes.imageList} cols={3}>
              {socialMediaApi.map((item) => (
                <ImageListItem key={item.thumbnailUrl} cols={item.cols || 1}>
                  <img src={item.thumbnailUrl} alt={item.title} />
                </ImageListItem>
              ))}
            </ImageList>

            </div>
          </div>
        <button className='shop-now'>Shop</button>
      </header>
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

