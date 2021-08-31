import React from 'react'

const areEqual = (prevProps, nextProps) => {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
   return prevProps === nextProps ? true : false;
  }

//add poster image
const Video = ({mp4Src, oggSrc}) => {
    return (
        <div className='video-container'>
            <video width="100%" height="100%" loop muted='' autoPlay >
                <source src={mp4Src} type="video/mp4"/>
                <source src={oggSrc} type="video/ogg"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

//React.memo(
    //,areEqual )



export default Video;
