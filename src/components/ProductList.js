import ImageOne from '../images/IMG_5948.jpg';
import ImageTwo from '../images/IMG_5951.jpg';
// import ImageThree from '../images/IMG_5962.jpg';
import ImageFour from '../images/IMG_5975.jpg';
import ImageFive from '../images/IMG_5955.jpg';
import ImageSix from '../images/IMG_5947.jpg';
import mp4VideoFile from '../videos/jumbotron.mp4';
import '../styles/ProductList.scss';

const productCategoryImages = [{src:ImageOne, text:'Dream Catcher'},
                                {src:ImageTwo, text:'Masks'},
                                {src:mp4VideoFile, text:'Videos'},
                                {src:ImageFour,text:'Knitwear'},
                                {src:ImageFive,text:'Accesories'},
                                {src:ImageSix,text:'Pets'}];



const ProductList = () => {

    const VideoCategory = ({src}) => {
        return (<video width="100%" height="100%" loop autoPlay muted>
                    <source src={src} type="video/mp4"/>
                    {/* <source src={oggSrc} type="video/ogg"/> */}
                    Your browser does not support the video tag.
                </video>)
    }

    const CategoryText = ({children, text}) => {
        return ( <>
             <div className="category-text">
                    <div className="category-name"><button>{text}</button></div>
                    {children}
                    </div>
                </>)
    }

    const CategoryListImages = ({images}) => {
        console.log(images, 'no map')
        return (images.map(({src,text},id) => {
                        return src.endsWith('jpg') ?
                                (<CategoryText key={id} text={text}><img  src={src} alt='cat list'/></CategoryText>) :
                                (<CategoryText key={id} text={text}><VideoCategory src={src}/></CategoryText>)
                        })
            
            )
    }
    


    return (
        <div className="product-categories container">
            {/* <CategoryText> */}
                 <CategoryListImages images={productCategoryImages}/>
            {/* </CategoryText> */}
        </div>
    )
}

export default ProductList;
