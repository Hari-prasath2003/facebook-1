import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headerTop">
          <div className="headerOptions">
            <span className="headerText">Stories</span>
          </div>

          <div className="headerOptions">
            <span className="headerText">Reels</span>
          </div>

          <div className="headerOptions">
            <span className="headerText">Rooms</span>
          </div>
        </div>

        <hr className="headerHr"></hr>

        <div className="headerBottom">
          <div className="headerBottomPartial">
            <img className="headerImg" src="/assets/person/1.jpg" alt="" />
            <img className="headerImg1" src="/assets/person/1.jpg" alt="" />
            <h5 className="headerImgText1">Dhanush</h5>
          </div>

          <div className="headerBottomPartial">
            <img className="headerImg" src="/assets/person/2.jpg" alt="" />
            <img className="headerImg1" src="/assets/person/2.jpg" alt="" />
            <h5 className="headerImgText2">Suriya</h5>
          </div>

          <div className="headerBottomPartial">
            <img className="headerImg" src="/assets/person/3.jpg" alt="" />
            <img className="headerImg1" src="/assets/person/3.jpg" alt="" />
            <h5 className="headerImgText3">vijay</h5>
          </div>

          <div className="headerBottomPartial">
            <img className="headerImg" src="/assets/person/4.jpg" alt="" />
            <img
              className="headerImg1"
              src="/assets/person/4.jpg"
              alt=""
            />
            <h5 className="headerImgText4">Deva</h5>
          </div>

          <div className="headerBottomPartial">
            <img
              className="headerImg"
              src="/assets/person/5.jpg"
              alt=""
            />
            <img
              className="headerImg1"
              src="/assets/person/5.jpg"
              alt=""
            />
            <h5 className="headerImgText5">Monisha</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
