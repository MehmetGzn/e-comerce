import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  margin: 10px;
  position: relative;
  &:hover{
    opacity: 90%;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Info = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
const Title = styled.h1`
  color: white;
  margin-bottom: 15px;
`
const Button = styled.button`
  border: none;
  padding: 10px;
  color: white;
  background: gray;
  font-weight: 600;
  border: 2px solid white;
  cursor: pointer;
  &:hover{
        background-color: lightgray; 
        color: black;
        border: 2px solid black;
    }
`


const CategoriyItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoriyItem