import styled from 'styled-components'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Info = styled.div`
    opacity: 0;
    position: absolute;
    display: flex;
    background: rgba(0,0,0,0.2);
    z-index: 3;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    transition: .3s ease-in;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    max-width: 320px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${props=>props.img}) center no-repeat;
    background-size:cover;
    position: relative;
    &:hover ${Info} {
        opacity: 1;
    }
`

const Icon = styled.div`
    margin: 5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s ease-in;
    cursor: pointer;
    &:hover{
        transform:scale(1.1);
    }
`

const ProductItem = ({ item }) => {
    return (
        <Container img={item.img}>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link style={{color:"black"}}  to="/product"><SearchOutlined /></Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    );
  };
  

export default ProductItem