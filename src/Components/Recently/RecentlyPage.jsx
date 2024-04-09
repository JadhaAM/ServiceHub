import './recentPage.css';
import { FaArrowRight } from "react-icons/fa";
function RecentlyPage() {
    return (
        <>
            <main className='section recently__contane'>
                <div className='home__title'>

                    <p className='section__subtitle'>Recently Added</p>
                    <h3 className='section__title'>Sushi Samurai <br /></h3>
                    <div className='flex'>
                        <h3 className='section__title'> Salmón Cheese</h3>
                        <div className="recent_subLogoImg"></div>
                    </div>
                    <p>Take a look at what's new. And do not <br /> deprive
                        yourself of a good meal, enjoy and <br /> be happy.
                    </p>
                    <div className="btn">
                        Order Now  <FaArrowRight />
                    </div>
                </div>

                <div className='img recently__hero_img'>
                </div>

            </main>
        </>
    )
}

export default RecentlyPage;