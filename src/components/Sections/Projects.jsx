import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/add/add2.png";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Unlock the Power of Rewards and <br/>Start Collecting Points Today!</h1>
            <p className="font25">
            Join Fidus Points and embark on a rewarding journey to enhance your retail experience. <br/>Sign up now and start 
collecting points that can be redeemed for exciting rewards, exclusive discounts, and memorable experiences.              <br />
            </p>
          </HeaderInfo>
          <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h2 className="font40 extraBold">Why Choose Fidus Points?</h2>
              

              <h2 className="font25 extraBold">Get Rewarded for Your Loyalty</h2>
              <ul className="font15">
              
              <li>At Fidus Points, we believe in rewarding our valued retail customers. By becoming a member, you'll 
have the opportunity to earn points with every purchase and interaction. The more points you collect, 
the greater the rewards you can enjoy. Say goodbye to ordinary shopping experiences and get ready for 
a world of perks and benefits!</li>


              
              </ul>

              <h2 className="font25 extraBold">Enjoy Exclusive Discounts and Offers</h2>
              <ul className="font15">
              
              <li>As a Fidus Points member, you'll gain access to a treasure trove of exclusive discounts and offers. 
Whether it's discounts on your favorite products, early access to sales, or special promotions, our 
loyalty program ensures that you're always treated like a VIP. Experience the joy of saving while 
indulging in the retail therapy you love.</li>


              
              </ul>
              
            </AddRight>
          </Advertising>
        </div>
      </div>

      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              
              <AddLeftInner>
              <h2 className="font40 extraBold">How Does Fidus Points Work?</h2>
              <h2 className="font20 semiBold"><strong>Simple and Seamless Sign-Up</strong></h2>
              <ul className="font15">
              
              <li>Joining Fidus Points is a breeze! Simply sign up through our user-friendly platform, and you'll be on 
your way to earning rewards. Start collecting points instantly and enjoy the benefits of being a loyal 
customer.</li>


              
              </ul>

              <h2 className="font20 semiBold"><strong>Earn Points with Every Purchase</strong></h2>
              <ul className="font15">
              
              <li>Every time you shop at participating retailers, you'll earn points for your purchases. The more you 
shop, the more points you accumulate. Watch your points grow and get closer to amazing rewards with 
each transaction.</li>


              
              </ul>

              <h2 className="font20 semiBold"><strong>Points for Exciting Rewards</strong> </h2>
              <ul className="font15">
              
              <li>Once you've collected enough points, it's time to reap the rewards. Choose from a wide range of 
options, including discounts, freebies, gift cards, and even exclusive experiences. Whether it's treating 
yourself or surprising loved ones, your points unlock a world of possibilities.</li>


              
              </ul>

              <h2 className="font20 semiBold"><strong>Stay Informed with Notifications</strong></h2>
              <ul className="font15">
              
              <li>Never miss out on exciting opportunities to earn extra points or exclusive rewards. Fidus Points keeps 
you in the loop with real-time notifications about special offers, flash sales, and limited-time 
promotions. Be the first to know and make the most of your loyalty membership.</li>


              
              </ul>


              <h2 className="font20 semiBold"><strong>Unlock a World of Rewards – Join Fidus Points Now!</strong></h2>
              <ul className="font15">
              
              <li>Ready to embark on a rewarding journey? Sign up for Fidus Points today and start collecting points 
with every purchase. Experience the thrill of being a loyal customer</li>


              
              </ul>

              
                
              </AddLeftInner>
            </AddLeft>
            <AddRight>
            <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
            </AddRight>
          </Advertising>
        </div>
      </div>
            <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
           
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
             
            </div>
          </div>
          <div className="row flexCenter">
            
          </div>
        </div>
      </div>

    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
