import styled from "styled-components"
import CategoriyItem from "./CategoriyItem"
import { categories } from "../data"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`


const Categories = () => {
  return (
    <Container>
        {categories.map((item)=>(
            <CategoriyItem item={item}>
                
            </CategoriyItem>  
        ))}  
    </Container>
  )
}

export default Categories