import styled from "styled-components"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

import { Add, Remove } from "@mui/icons-material"

const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

// ? ____________ TOP SIDE ____________

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TopButton = styled.button`
    border:none;
    padding: 10px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${(props)=>props.color};
    transition: 0.15s ease-in;
    &:hover{
        transform: scale(1.1);
    }
    `
const TopTexts = styled.div`
    display: flex;
    `
const TopText = styled.p`
    margin: 10px;
    cursor: pointer;
    &:hover{
        font-weight: 600;
    }
`

// ? _____________ BOTTOM SIDE ____________ 

const Bottom = styled.div`
    display: flex;
    flex-direction: row;
`
const Bag = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    margin-right: 20px;
    border: 1px solid lightgray;
    position: relative;
    padding-top: 50px;
`
const BagTitle = styled.h3`
    position: absolute;
    font-size: 20px;
    top: 20px;
    left: 50%;
`

const Product = styled.div`
    display: flex;
    align-items: center;
    height: 300px;
    border-bottom: 1px solid lightgray;
`

const ProductImg = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
`
const Image = styled.img`
    width: 250px;
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding-left: 5%;
`
const ProductName = styled.p`
    font-size: 20px;
    margin-bottom: 10px;
`
const ProductId = styled.p`
    font-size: 20px;
    margin-bottom: 10px;
`
const ProductColor = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`
const ColorPallette = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-left: 10px;
    background-color: ${(props)=>props.color};
`

const ProductSize = styled.p`
    font-size: 20px;
`

const PriceDetails = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ProductAmount = styled.div`
    margin-top: 20px;
    width: 100px;
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
const Price = styled.h3`
    font-size: 20px;
    margin: 20px;
`
//! ____________ SUMMARY _____________

const Summary = styled.div`
    flex: 1;
    height: 90%;
    min-width: 300px;
    max-width: 410px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
    margin: 20px 0;
`
const SummaryTitle = styled.h3`
    font-size: 20px;
    margin: 20px;
`
const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: 15px 20px;
    font-weight: ${props=>props.type === 'total' && '500' };
    font-size: ${props=>props.type === 'total' && '21px' };
`
const SummaryText = styled.span``
const SummaryPrice = styled.span``

const SumaryButton = styled.button`
    border:none;
    width: 200px;
    margin-bottom: 10px;
    padding: 10px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    background-color: black;
    transition: 0.15s ease-in;
    &:hover{
        transform: scale(1.1);
    }
`



const Card = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton color='lightgray'>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your WishList (0)</TopText>
                </TopTexts>
                <TopButton color='black'>CHECKOUT</TopButton>
            </Top>
            <Bottom>
                <Bag>
                    <BagTitle>BAG</BagTitle>
                    <Product>
                        <ProductImg>
                            <Image src="https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png"/>
                        </ProductImg>
                        <ProductDetails>
                            <ProductName><b>Product:</b> Shirt</ProductName>
                            <ProductId><b>ID:</b> 9374868623</ProductId>
                            <ProductColor>
                                <b>Color:</b>
                                <ColorPallette color="firebrick"></ColorPallette>
                            </ProductColor>
                            <ProductSize><b>Size:</b> S</ProductSize>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmount>
                                <Button><Remove/></Button>
                                <Amount>2</Amount>
                                <Button><Add/></Button> 
                            </ProductAmount>
                            <Price>$ 39.98</Price>
                        </PriceDetails>
                    </Product>
                    <Product>
                        <ProductImg>
                            <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png"/>
                        </ProductImg>
                        <ProductDetails>
                            <ProductName><b>Product:</b> Trench coat</ProductName>
                            <ProductId><b>ID:</b> 9374868623</ProductId>
                            <ProductColor>
                                <b>Color:</b>
                                <ColorPallette color="burlywood"></ColorPallette>
                            </ProductColor>
                            <ProductSize><b>Size:</b> M</ProductSize>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmount>
                                <Button><Remove/></Button>
                                <Amount>1</Amount>
                                <Button><Add/></Button> 
                            </ProductAmount>
                            <Price>$ 49.99</Price>
                        </PriceDetails>
                    </Product>                
                </Bag>
                <Summary>
                    <SummaryTitle>SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryText>Subtotal</SummaryText>
                        <SummaryPrice>$ 89.97</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Estimated shipping</SummaryText>
                        <SummaryPrice>$ 6.99</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Shipping Discount</SummaryText>
                        <SummaryPrice>$ 11.99</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryText>Total</SummaryText>
                        <SummaryPrice>$ 84.97</SummaryPrice>
                    </SummaryItem>
                    <SumaryButton>CHECKOUT NOW</SumaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Card