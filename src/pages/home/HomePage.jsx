import React from 'react'
import './homePage.css'
import Nabvar from '../../components/navbar/Nabvar'
const HomePage = () => {
  return (
    <>
        <div className="homeMainContainer">
          <div className="circle"></div>
            <div className="homePageContentContainer">
              <div className="cardContainer">
                <div className="topRow">
                  <div className="firstCard">
                    amsbd
                  </div>
                  <div className="secondCard"></div>
                  <div className="thirdCardContainer">
                    <div className="thirdCardContainerTopCard"></div>
                    <div className="thirdCardContainerBottomCard"></div>
                  </div>
                </div>
                <div className="bottomRow">
                  <div className="thirdCardContainer">
                    <div className="thirdCardContainerBottomCard"></div>
                    <div className="thirdCardContainerTopCard"></div>
                  </div>
                  <div className="firstCard"></div>
                  <div className="secondCard"></div>

                </div>
              </div>

            </div>
        </div>
    </>
  )
}

export default HomePage