
import { Send } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 20px;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    border: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        border-bottom: 2px solid black;
        transform: translateX(-100%);
        transition: .4s ease-in;
    }
    &:hover {
        &::after{
            transform: translateX(0);
        }
    }
    &:focus-within {
        &::after{
            transform: translateX(0);
        }
    }
    `
const Input = styled.input`
    width: 93%;
    text-align: center;
    font-size: 20px;
    outline: none;
    padding-left: 10px;
    border: none;
`
const Button = styled.button`
    width: 7%;
    border: none;
    cursor: pointer;
    background-color: lightgray;
    &:hover{
        background: #000;
        color: #fff;
    }
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favourite products</Description>
        <InputContainer>
            <Input placeholder="Your email !"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter