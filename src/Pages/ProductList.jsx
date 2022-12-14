import Navbar from "../Components/Navbar"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import styled from "styled-components"
import Products from "../Components/Products"
import Newsletter from "../Components/Newsletter"

const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterText = styled.div`
    font-style: 25px;
    margin: 20px 0;
`
const Select = styled.select`
    margin-left: 10px;
    padding: 6px;
    padding-right: 30px;
    height: 40px;
    font-size: 14px;
    border-radius: 0%;
    position: relative;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    background: transparent url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='15' height='15' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='black'/></g></svg>") no-repeat;
    background-position: right 5px top 50%;
`
const Option = styled.option`
    
`


const ProductList = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name="Colors">
                    <Option disabled selected>Color</Option>
                    <Option>Blue</Option>
                    <Option>Red</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                 </Select>
                <Select name="Size">
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                 </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products:</FilterText>
                <Select name="sort">
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                 </Select>
            </Filter>            
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductList