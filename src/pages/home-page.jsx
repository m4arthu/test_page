import styled from "styled-components"
import { Header } from "../components/header"
import clrifionLogo from "../assets/600a41c73b670a97ae1d4f47_Clarifion_Logo 1.svg"
import macafeeLogo from "../assets/Frame 1484578055.svg"
import nortonlogo from "../assets/norton-antivirus-logo 1.png"
import confirmed from "../assets/Group 1484578147.png"
import thirdStep from "../assets/Group 1484578146.png"
import fourdStep from "../assets/Group 1484578146 (1).png"
import comments from "../assets/Frame 1484578050.png"
import img4 from "../assets/image 4.png"
import frame14 from "../assets/Frame 14.png"
import { Bottom } from "../components/bottom"
export const HomePage = () => {
    return (
        <>
            <Header />
            <SubHeader>
                <img className="left" src={clrifionLogo} alt="" />
                <div className="right">
                    <img src={macafeeLogo} alt="" />
                    <img className="norton" src={nortonlogo} alt="" />
                </div>
            </SubHeader>
            <Status>
                <h1>Wait ! your order in progress.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            </Status>
            <OrderStatus>
                <div><img src={confirmed} alt="" /><p><span>Step 1 :</span> Cart Review</p></div>
                <div><img src={confirmed} alt="" /><p><span>Step 2 :</span> Checkout</p></div>
                <div className="actual"><img src={thirdStep} alt="" /><p><span>Step 3</span> Special Offer</p></div>
                <div><img src={fourdStep} alt="" /><p><span>Step 4 :</span> Confirmation</p></div>
            </OrderStatus>
            <Body>
                <div className="body-container">
                    <LeftBody>
                        <img src={img4} alt="" />
                        <img src={comments} alt="" />
                    </LeftBody>
                    <RightBody>
                        <img src={frame14} alt="" />
                    </RightBody>
                </div>
            </Body>
            <Bottom />
        </>
    )
}

const SubHeader = styled.div`
   margin: 30px 100px;
   display:flex;
   justify-content: space-between;
   .right{
    .norton{
            margin-left:20px;
        }
    img{
        width:88px;
    }
   }
   @media(max-width:400px){
    margin:20px 20px;
    .left{
        width:106px;
    }
    .right{
        img{
            width:44px;
        }
    }
   }
`
const Status = styled.div`
   font-family: 'Manrope', sans-serif;
   width:100vw;
   text-align:center;
   h1{
    font-size:48px;
    font-weight:400;
   }
   p{
    margin-top:10px;
    font-size:24px;
    font-weight:400
   }
   @media(max-width:400px){
    h1{
        font-size:32px;
        line-height: 45px;
    }
    p{
        font-size:16px;
        line-height:22px;
    }
   }
`
const OrderStatus = styled.div`
  font-family: 'Manrope', sans-serif;
  display:flex;
  justify-content: space-between;
  margin: 30px 100px;

 div{
    display:flex;
    align-items: center;
    p{
        margin-left:15px;
        font-size:20px;
    }
 }
 .actual{
    p{
        font-weight:700;
    }
 }
 @media(max-width:400px){
    margin:20px 10px;
    img{
        width:20px;
    }
  
    div{
        flex-direction:column;
        text-align:center;
        p{
        font-size:12px;
        margin:0;
        span{
            display:none;
        }
        }
    }
 }
`

const Body = styled.div`
display:flex;
margin: 30px 80px;
justify-content:center;
.body-container{
    display:flex;
    width:1200px;
}
@media(max-width:400px){
    .body-container{
        flex-direction:column;
        align-items:center;
        width:100vw;
    }
    img{
        width:320px;
    }
}
`

const LeftBody = styled.div`
img{
    width:585px;
}

@media(max-width:400px){
    img{
        width:320px;
    }
}
`

const RightBody = styled.div`

`
