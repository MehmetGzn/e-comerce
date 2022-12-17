import React from 'react'
import styled from 'styled-components' 
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    height: 6vh;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 1px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
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
    border: none;
    outline: none;
    padding: 5px;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-style: 14px;
    cursor: pointer;
    margin-left: 15px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Input placeholder='Search'/> 
                    <SearchIcon style={{ color:'gray', fontSize:18, marginRight:"4px"}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>LAMA.</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>LOGIN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={6} color="primary">
                        <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar