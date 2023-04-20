import './BoothHelperLanding.css';
import banner from '../../../assets/event_banner.png';
import button from '../../../assets/landing_button.png';
import { useNavigate } from 'react-router-dom';

export default function BoothHelperLanding (props){
    let navigate = useNavigate()

    return(
        <div className='bh_landing_wrapper'>
            <div className='bh_landing_page'>
                <div className='bh_module_title'>
                    <p>Booth Helpers Module</p>
                </div>
                <div className='bh_banner'>
                    <img className='bh_image' src={banner}></img>
                </div>
                <div className='bh_welcome_wrapper' onClick={event =>  navigate('/login')}>
                    <div className='bh_welcome'>
                        <p>Welcome</p>
                    </div>
                    <div className='bh_get_started'>
                        <p>Get Started</p>
                    </div>
                    <div className='bh_button'>
                        <img className='bh_image' src={button}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}