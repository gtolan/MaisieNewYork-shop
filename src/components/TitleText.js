import '../styles/Video.scss'
import logoHandwriting from '../images/logo-handwriting.png'
import logoText from '../images/logo-text.png'
const TitleText = () => {
    return (
        <div className="welcome-information">
          <div className="welcome-inner-card">
          <img src={logoHandwriting}/>
          </div>
          <div className="welcome-inner-card">
          <img src={logoText}/>
          </div>
        </div>
    )
}
export default TitleText 
