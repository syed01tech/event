import './Landing.css';
import banner from '../../../assets/event_banner.png';
import button from '../../../assets/landing_button.png';
import { useNavigate } from 'react-router-dom';

export default function Landing (props){
    let navigate = useNavigate()

    return(
        <div className='landing_wrapper'>
            <div className='landing_page'>
                <div className='module_title'>
                    <p>General Users Module</p>
                </div>
                <div className='banner'>
                    <img className='image' src={banner}></img>
                </div>
                <div className='welcome_wrapper' onClick={event =>  navigate('/login')}>
                    <div className='welcome'>
                        <p>Welcome</p>
                    </div>
                    <div className='get_started'>
                        <p>Get Started</p>
                    </div>
                    <div className='button'>
                        <img className='image' src={button}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}