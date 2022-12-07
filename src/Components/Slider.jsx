import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react";
import { sliderItems } from '../data'

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex; 
    position: relative;
    overflow: hidden ;
`
const Arrow = styled.div`
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: lightgray;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      opacity: 50%;
      left: ${props=> props.direction === 'left' &&'10px' };
      right: ${props=> props.direction === 'right' &&'10px' };
      cursor: pointer;
      &:hover{
        opacity: 90%;
      }
      z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(-${props=>props.slideIndex*100}vw);
    transition: 1s ease;
`

const Slide = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`

const ImageContatiner = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    height: 85%;
`

const InfoContatiner = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-style: 70px;
`
const Description = styled.p`
    margin: 50px 0px;
    font-style: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-style: 20px;
    background-color: transparent;
    border: 2px solid black;
    transition: .1s ease-in-out;
    &:hover{
        background-color: lightgray; 
        color: white;
        border: 2px solid white;
    }
`





const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction==='left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        if (direction==='right') {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

  return (
    <Container>
        <Arrow direction='left' onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
                <Slide bg={item.bg}>
                    <ImageContatiner>
                        <Image src={item.img}/>
                    </ImageContatiner>
                    <InfoContatiner>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContatiner>
                </Slide>
            ))}
            
        </Wrapper>
        <Arrow direction='right' onClick={()=>handleClick("right")}>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider