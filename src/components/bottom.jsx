import styled from "styled-components"
import copyright from "../assets/Frame 1000004692.png"
import secure256 from "../assets/Frame 1000001268.png"
export const Bottom = () =>{
  return (
    <BottomContainer>
        <img className="copy" src={copyright} alt="" />
        <img className="secure" src={secure256} alt="" />
    </BottomContainer>
  )
}


const BottomContainer = styled.div`
font-family: 'Manrope', sans-serif;
background-color:#252F3D;
width:100vw;
height: 100px;
display:flex;
justify-content:space-around;
align-items:center;
color: white;
@media(max-width:400px){
    flex-direction:column;
    .copy{
      width:301px;
    }
    .secure{
      width:201px;
    }
}

`

