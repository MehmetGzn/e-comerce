import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    background: coral;
    position: relative;
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
`


const Slider = () => {
  return (
    <Container>
        <Arrow direction='left'>
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Arrow direction='right'>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider