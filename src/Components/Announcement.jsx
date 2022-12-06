import styled from "styled-components"

const Container = styled.div`
    height: 4vh;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Super deal! Free shipping on orders over $50
    </Container>
  )
}

export default Announcement