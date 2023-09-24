import styled from "styled-components"
import check from "../assets/fluent_checkmark-starburst-20-regular.png"
import truck from "../assets/ph_truck-light.svg"
export const Header = () => {
     return (
     <HeaderContainer>
        <HeaderItems><img src={check} alt="" />30-DAY SATISFACTION GUARANTEE</HeaderItems>
        <HeaderItems><img src={truck} alt="" />Free delivery on orders over $40.00</HeaderItems>
        <HeaderItems><img src={check} alt="" />50.000+ HAPPY CUSTOMERS</HeaderItems>
        <HeaderItems><img src={check} alt="" />100% Money Back Guarantee</HeaderItems>
     </HeaderContainer>
    )
}


const HeaderContainer = styled.div`
font-family: 'Manrope', sans-serif;
background-color:#252F3D;
width:100vw;
height: 50px;
display:flex;
justify-content:space-around;
align-items:center;
color: white;
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