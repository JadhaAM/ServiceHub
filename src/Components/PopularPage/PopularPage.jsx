import React from 'react'
import { LuShoppingCart } from "react-icons/lu";

import "./popularPage.css"
function PopularPage() {
  return (
    <div>
      <section className='section Popular__contaner'>
        <div className="Popular__titles">
          <p className='section__subtitle'>The Best Food</p>
          <h3 className='section__title'>Popular Dishes</h3>
        </div>
        <div className="card__box">
          <div className="cards">
            <div className="img bg_img">
              
            </div>
            <div className="card__contanet">
              <h3 className='section__title'>Onigiri</h3>
              <p className='' >Japanese Dish</p>
              <div className="price">
                <p className='section__subtitle'>$10.29</p>
                <div className="icons"><LuShoppingCart />
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="img bg_img">
             
            </div>
            <div className="card__contanet">
              <h3 className='section__title'>Onigiri</h3>
              <p className='' >Japanese Dish</p>
              <div className="price">
                <p className='section__subtitle'>$10.29</p>
                <div className="icons"><LuShoppingCart />
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="img bg_img">
            </div>
            <div className="card__contanet">
              <h3 className='section__title'>Onigiri</h3>
              <p className='' >Japanese Dish</p>
              <div className="price">
                <p className='section__subtitle'>$10.29</p>
                <div className="icons"><LuShoppingCart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PopularPage
