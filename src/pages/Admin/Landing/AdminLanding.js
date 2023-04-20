import './AdminLanding.css';
import banner from '../../../assets/event_banner.png';
import button from '../../../assets/landing_button.png';
import { useNavigate } from 'react-router-dom';

export default function AdminLanding (props){
    let navigate = useNavigate();
    
    return(
        <div className='landing_wrapper'>
            <div className='landing_page'>
                <div className='module_title'>
                    <p>Admin/Event Organizers Module</p>
                </div>
                <div className='banner'>
                    <img className='image' src={banner}></img>
                </div>
                <div className='welcome_wrapper'>
                    <div className='welcome'>
                        <p>Welcome</p>
                    </div>
                    <div className='get_started'>
                        <p>Get Started</p>
                    </div>
                    <div className='button' onClick={event =>  {navigate('/admin/login')}}>
                        <img className='image' src={button}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}