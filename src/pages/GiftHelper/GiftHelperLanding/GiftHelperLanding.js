import './GiftHelperLanding.css';
import banner from '../../../assets/event_banner.png';
import button from '../../../assets/landing_button.png';
import { useNavigate } from 'react-router-dom';

export default function GiftHelperLanding (props){
    let navigate = useNavigate()

    return(
        <div className='grh_landing_wrapper'>
            <div className='grh_landing_page'>
                <div className='grh_module_title'>
                    <p>Gift Redemption Helpers Module</p>
                </div>
                <div className='grh_banner'>
                    <img className='grh_image' src={banner}></img>
                </div>
                <div className='grh_welcome_wrapper' onClick={event =>  navigate('/login')}>
                    <div className='grh_welcome'>
                        <p>Welcome</p>
                    </div>
                    <div className='grh_get_started'>
                        <p>Get Started</p>
                    </div>
                    <div className='grh_button'>
                        <img className='grh_image' src={button}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}