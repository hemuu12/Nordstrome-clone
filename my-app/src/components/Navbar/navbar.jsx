import { Link } from "react-router-dom"
import {Avatar} from "@chakra-ui/react"
import {Input,MenuButton,
    Menu,MenuItem,
    MenuList,
    Button,MenuDivider
} from "@chakra-ui/react"

import { Search2Icon,ChevronDownIcon  } from "@chakra-ui/icons"


export default function Navbar(){
let arr=["Sale",
  "Women",
  "Men",
  "Kids",
  "Young Adult",
  "Activewear",
  "Home",
  "Beauty",
  "Designer",
  "Gifts",
  "The Thread",
  "Brands"
]

const style={
    display:"flex",
    borderStyleBottom:"1px solid black",
    width:'100%',
    height:"120px",
    alignItems:"center",
    paddingLeft:"30px"
}
const menu={
  marginLeft:"none"
}
const link={
  marginLeft:"30px",
  fontSize:"20px",
  display:"flex",
  alignItems:"center",
  gap:"5px"
}
const bottomnav={
display:"flex",
alignItems:"center",
gap:"50px",
fontSize:"16px",
width:'95%',
height:"50px",
margin:"auto",
justifyContent:"center"
}
const poster={
  backgroundImage: "url(https://n.nordstrommedia.com/id/44648fdb-be56-4600-addb-6d3c7ba21f2c.jpeg?h=200)"
}

return (

<>
<div style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly",border:"2px solid black",backgroundColor:"black",color:"white"}}>
  <h1>Get a $40 Bonus Note! An exclusive offer for new Nordstrom credit cardmembers. Restrictions apply.  Apply Now</h1>
  <div style={{marginTop:"20px" ,gap:"10px", alignItems:"center",display:"flex" ,paddingBottom:"15px"}}>
    <Avatar style={{width:"20px",height:"20px",border:"1px solid white"}} name='india' src="https://img.icons8.com/color/48/000000/india-circular.png" />
    <h1>India</h1>
</div>
</div>
<div style={style}>
<Link m="20px"  to="./"><img width="230px" src="https://n.nordstrommedia.com/alias/nordstrom-logo.svg"  alt="" /></Link>

<div style={{display:"flex", alignItems:"center",marginLeft:"40px" ,border:"1px solid #bbb" ,height:"45px"}}>
<i >{<Search2Icon w="30px" />}</i>
<Input  w="500px" h="45px" border="none" type="search" id="search" name="search" placeholder="Search"></Input>
</div>
<Menu >
  <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    borderWidth='1px'
    _hover={{ bg: 'gray.400' }}
    ml="40px"
    border="none"
    gap="10px"
  
  >
    Sign In <ChevronDownIcon />
  </MenuButton>
  <MenuList p="40px" >
    <Button bg="black" color="white"><Link to="/login">Sign In | Create Account</Link></Button>
    <MenuItem style={menu} mt="20px">Your Account</MenuItem>
   
    <MenuItem>Purchase</MenuItem>
    <MenuItem>Wishlist</MenuItem>
    <MenuItem>The Nordy Club Rewards</MenuItem>
    <MenuItem>Shipping Addresses</MenuItem>
    <MenuItem>Payment Methods</MenuItem>
    <MenuItem>Looks</MenuItem>
    <MenuItem>Pay & Manage Nordstrom Card</MenuItem>
    <MenuDivider  />
  </MenuList>
</Menu>
<Link style={link} to="./dataStore"><img width="30px" alt="" src="https://img.icons8.com/ios/50/000000/new-store.png"/>Stores</Link>
<Link style={link} to="./dataStore"><img width="30px" alt=""  src="https://img.icons8.com/pastel-glyph/64/000000/purchase-order.png"/>Purchases</Link>
<Link style={link} to="/dataStore"><img width="30px" alt="" src="https://img.icons8.com/material-outlined/24/000000/shopping-bag--v1.png"/></Link>
</div>

<div style={bottomnav}>
{
  arr.map((el)=>{
 return  <Link to="/dataStore" key={el}>{el}</Link>
})
}
</div>
<h1 style={{magin:"auto",marginTop:"30px",fontSize:"25px",fontWeight:'600',width:"95%"}}>Shop what you love—faster and easier.</h1>
<div style={poster}></div>
 
</>

)


}