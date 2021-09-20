import mp4VideoFile from '../videos/jumbotron.mp4';

const Video = ({mp4Src, oggSrc}) => {
    return (
        <div className='video-container'>
            <video width="100%" height="100%" loop autoPlay muted>
                <source src={mp4VideoFile} type="video/mp4"/>
                {/* <source src={oggSrc} type="video/ogg"/> */}
                Your browser does not support the video tag.
            </video>
            <div className="buy-now-card">

                <button>Buy Now</button>
            </div>
        </div>
    )
}


export default Video;
