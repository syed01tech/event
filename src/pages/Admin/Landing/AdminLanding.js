import './AdminLanding.css';
import banner from '../../../assets/event_banner.png';
import button from '../../../assets/landing_button.png';

export default function AdminLanding (props){
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
                    <div className='button' onClick={event =>  window.location.href='/admin/login'}>
                        <img className='image' src={button}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}