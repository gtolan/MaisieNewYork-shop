import ImageOne from '../images/IMG_5948.jpg';
import ImageTwo from '../images/IMG_5951.jpg';
import ImageThree from '../images/IMG_5962.jpg';
import ImageFour from '../images/IMG_5975.jpg';
import ImageFive from '../images/IMG_5955.jpg';
import ImageSix from '../images/IMG_5947.jpg';
import mp4VideoFile from '../videos/jumbotron.mp4';
import '../styles/ProductList.scss';

const productCategoryImages = [ImageOne,ImageTwo,mp4VideoFile,ImageFour,ImageFive,ImageSix];



const ProductList = () => {

    const VideoCategory = ({src}) => {
        return (<video width="100%" height="100%" loop autoPlay muted>
                    <source src={src} type="video/mp4"/>
                    {/* <source src={oggSrc} type="video/ogg"/> */}
                    Your browser does not support the video tag.
                </video>)
    }

    const CategoryText = ({children}) => {
        return ( <>
             <div className="category-text">
                 <h1>Yo</h1>
                    {children}
                    </div>
                </>)
    }

    const CategoryListImages = ({images}) => {
        console.log(images, 'no map')
        return (
            <CategoryText>{images.map((item,id) => {
                        return item.endsWith('jpg') ?
                                (<img key={id} src={item} alt='cat list'/>) :
                                (<VideoCategory src={item}/>)
                        })}
            </CategoryText>
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
