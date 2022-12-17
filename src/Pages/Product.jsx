import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Announcement from "../Components/Announcement"
import Newsletter from "../Components/Newsletter"

import styled from "styled-components"
import { Add, Remove } from "@mui/icons-material"


const Container = styled.div`

`
const Wrapper = styled.div`
    display: flex;
    
`
const ImgContainer = styled.div`
    margin: 20px;
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height:85vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    margin: 20px;
    flex: 1;
`
const Title = styled.h1`
    font-weight: 400;
`
const Desc = styled.p`
    font-style: 20px;
    margin: 20px 0;
`
const Price = styled.p`
    font-size: 40px;
    font-weight: 200;
`
const Filter = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
`
const FilterText = styled.div`
    font-style: 25px;
`
const FilterContainer = styled.div`
    display: flex;
    align-items: center;

`
const ColorFilter = styled.button`
    border: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 7px;
    background-color: ${(props)=> props.color};
    cursor: pointer;
    transition: ease-in 5ms;
    &:hover{
        transform: scale(1.1);
    }
`
const Select = styled.select`
    width: 75px;
    margin-left: 10px;
    padding: 6px;
    padding-right: 30px;
    height: 35px;
    font-size: 14px;
    border-radius: 10px;
    position: relative;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    background: transparent url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='15' height='15' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='black'/></g></svg>") no-repeat;
    background-position: right 5px top 50%;
    cursor:pointer;
`

const Option = styled.option`
`
const AddContainer = styled.div`
    margin-top: 20px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: ease-in 5ms;
    &:hover{
        transform: scale(1.1);
    }
`
const Amount = styled.span`
    width: 25px;
    height: 25px;
    margin: 5px;
    border: 1.3px solid gray;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const AddCard = styled.button`
    font-size: 14px;
    padding: 7px;
    margin-left: 10px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    transition: ease-in 5ms;
    &:hover{
        transform: scale(1.1);
    }
`

const Product = () => {
    const handleClick = () => {
        
    } 
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src='https://img01.ztat.net/article/spp-media-p1/b43a69c748c34a158586da797744b7f6/5a9132255bd449a89838605a6cf50cc4.jpg?imwidth=1800&filter=packshot'/>
                {/* https://img01.ztat.net/article/spp-media-p1/756f1f4ddeaf4a399cf4e59f709630d0/aeb3b6b17d0842eabfbca8f0d202ecf2.jpg?imwidth=1800&filter=packshot -------> WHITE */}
                {/* https://img01.ztat.net/article/spp-media-p1/e30d644f444e4890835208371f41a668/ae40c0dc81074b3abe3d7c7f90530fbe.jpg?imwidth=1800&filter=packshot -------> BLACK */}
            </ImgContainer>
            <InfoContainer>
                <Title>T-shirt</Title>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quasi nobis perspiciatis est ratione sapiente autem dolorum accusamus sed ducimus earum veniam rem necessitatibus quos sunt eius, quae mollitia officiis!</Desc>
                <Price>$20</Price>
                <Filter>
                    <FilterText>Color:</FilterText>
                    <FilterContainer>
                        <ColorFilter onClick={()=>handleClick} color="firebrick"/>
                        <ColorFilter color="black"/>
                        <ColorFilter color="lightgray"/>
                    </FilterContainer>
                    <FilterText style={{marginLeft:'20px'}}>Size:</FilterText>
                    <Select name="Size">
                        <Option>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <AddContainer>
                    <Button><Remove/></Button>
                    <Amount>1</Amount>
                    <Button><Add/></Button> 
                    <AddCard>Add to Card</AddCard>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product