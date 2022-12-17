import styled from "styled-components"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const Container = styled.div`
    width: 100vw;
    height: 80vh;
    background:linear-gradient(rgba(200,200,200,0.6),rgba(200,200,200,0.7)),
    url("https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3474&q=80") center ;
    background-size:cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    background-color: white;
    width: 25%;
    padding: 20px 35px;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 400;
`
const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
`

const InputContainer = styled.div`
    width: 100%;
    margin-bottom: 15px;
    height: 35px;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    outline: none;
    position: relative;
    overflow: hidden;
    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        border-bottom: 1.6px solid black;
        transform: translateX(-100%);
        transition: .25s ease-in;
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
    width: 100%;
    height: 100%;
    padding: 15px;
    font-size: 17px;
    outline: none;
    border: none;
`
const Agrement = styled.p`
    font-style: 14px;
    margin-bottom: 20px;
`
const Button = styled.button`
    width: 70%;
    height: 35px;
    font-size: 18px;
    border:none;
    color: white;
    background-color: teal;
    margin-top: 10px;
    cursor: pointer;
    &:hover{
        background-color: #11aeae;
    }
`

const Register = () => {
  return (
    <>
    <Navbar where="login"/>
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <InputContainer><Input placeholder='Name'/></InputContainer>
                <InputContainer><Input placeholder='Surname'/></InputContainer>
                <InputContainer><Input placeholder='Email'/></InputContainer>
                <InputContainer><Input placeholder='Username'/></InputContainer>
                <InputContainer><Input type="password" placeholder='Password'/></InputContainer>
                <InputContainer><Input type="password" placeholder='Confirm Password'/></InputContainer>
                <Agrement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agrement>
                <Button>Create</Button>   
            </Form>
        </Wrapper>
    </Container>
    <Footer/>
    </>
  )
}

export default Register