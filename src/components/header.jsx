import styled from "styled-components"
import check from "../assets/fluent_checkmark-starburst-20-regular.png"
import truck from "../assets/ph_truck-light.svg"
import layer1 from "../assets/Layer_1.svg"
import layer2 from "../assets/Layer_1.png"
export const Header = () => {
    return (
        <HeaderContainer>
            <div className="desktop">
                <HeaderItems><img src={check} alt="" />30-DAY SATISFACTION GUARANTEE</HeaderItems>
                <HeaderItems><img src={truck} alt="" />Free delivery on orders over $40.00</HeaderItems>
                <HeaderItems><img src={check} alt="" />50.000+ HAPPY CUSTOMERS</HeaderItems>
                <HeaderItems><img src={check} alt="" />100% Money Back Guarantee</HeaderItems>
            </div >
            <div className="mobile">
                <HeaderItems><img src={layer1} alt="" /></HeaderItems>
                <HeaderItems><img src={check} alt="" />30-DAY SATISFACTION GUARANTEE</HeaderItems>
                <HeaderItems><img src={layer2} alt="" /></HeaderItems>
            </div>
        </HeaderContainer>
    )
}


const HeaderContainer = styled.div`
font-family: 'Manrope', sans-serif;
background-color:#252F3D;
color: white;
.desktop{
    height: 50px;
    display:flex;
    justify-content:space-around;
    align-items:center;
}
.mobile{
    display:none;
}
@media(max-width:400px){
      .desktop{
         display:none;
        }   
        .mobile{
            display:flex;
            justify-content:space-around;
            padding:8px 0;
        }
    }
`
const HeaderItems = styled.div`
display: flex;
align-items:center;
font-size:12px;
img{
    width:22px;
    margin-right:10px;
}

`