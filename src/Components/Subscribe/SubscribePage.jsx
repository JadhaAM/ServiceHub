import './subscribePage.css';
import { RiSendPlaneLine } from "react-icons/ri";

function SubscribePage() {
    return (
        <>
            <main className='section newsletter__contaner'>
                <div className='newsletter__hero_img'>
                </div>
                <div className='home__title'>
                    <p className='section__subtitle'>Newsletter</p>
                        <h3 className='section__title colur'>Subscribe For <br />
                            Offer Updates </h3>
                    <div className='input__box'>
                     <input className='input' type="text" placeholder='Enter email '  /> 
                     <div className="s_btn">
                        Order Now  <RiSendPlaneLine />
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default SubscribePage;