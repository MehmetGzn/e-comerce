import { Facebook, Instagram, Pinterest, Twitter, Room, Phone, Mail } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    margin: 20px;
    display: flex;

`
const Left = styled.div`
    flex: 1;
    margin-right: 10px;
    display: flex;
    flex-direction: column;

`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 10px 0;
`
const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    `
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 5px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #${props=>props.color};
`
const Center = styled.div`
    flex: 1;
    margin: 0 10px;
`
const Title = styled.h3`
    margin: 12px 0 13px 0;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 7px;
`
const Right = styled.div`
    flex: 1;
    margin-left:10px;
`
const ContactItem = styled.h4`
    margin-bottom:7px;
    font-weight: 400;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 40px;
    margin-right: 5px;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>
                There are many variations of Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae error architecto inventore quaerat culpa consectetur, est itaque ad praesentium modi natus? Praesentium doloremque enim ut deserunt dignissimos eos pariatur est.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55acee">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="e60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
                <Title>Useful links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:'7px'}}/>Radzymińska 12, 03-752 Warszawa</ContactItem>
            <ContactItem><Phone style={{marginRight:'7px'}}/>+730061806</ContactItem>
            <ContactItem><Mail style={{marginRight:'7px'}}/>mehmetgzn96@gmail.com</ContactItem>
            <ContactItem>
                <Payment style={{width:"27px"}} src="https://img.icons8.com/ios-filled/512/bank-cards.png"/>
                <Payment src="https://img.icons8.com/color/512/visa.png"/>
                <Payment src="https://img.icons8.com/fluency/512/mastercard.png"/>
                <Payment style={{width:"36px"}} src="https://img.icons8.com/external-those-icons-fill-those-icons/512/external-American-Express-payment-methods-those-icons-fill-those-icons.png"/>
                <Payment src="https://img.icons8.com/color/512/discover.png"/>
                <Payment style={{width:"26px"}}  src="https://img.icons8.com/external-justicon-flat-justicon/512/external-paypal-social-media-justicon-flat-justicon.png"/>
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer