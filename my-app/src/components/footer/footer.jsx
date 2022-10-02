import {Wrap,WrapItem,Avatar} from "@chakra-ui/react"


export default function Footers(){

let arr=[
    "Customer Service",
    "About Us",
    "Stores & Services",
    "Nordstrom Card & Rewards",
   


]

let obj=
[
"Contact Us",
"Order Status",
"Shipping",
"Return Policy & Exchanges",
"Price Adjustments",
"Gift Cards",
"FAQ",
"Product Recalls",
]
let obj1=
[
"Careers",
"Corporate Social Responsibility",
"Shipping",
"Diversity, Inclusion & Belonging",
"Get Email Updates",
"Nordstrom Blog",
"The Thread",
"Nordy Podcast",
]
let obj2=
[
"The Nordy Club Rewards",
"Pay My Bill",
"Manage My Nordstrom Card",

]
let obj3=
[
"Nordstrom Rack",
"Nordstrom Canada",
"Investor Relations",
"Press Releases",
"Nordstrom Media Network",

]

const social={
width:"30px",
height:"30px",
background:"white",
}

let obj4=[
    "Privacy","Do Not Sell My Personal Information","Terms & Conditions","Interest-Based Ads","©2022 Nordstrom, Inc."
]


return(
<>


<div style={{backgroundColor:"lightgrey",border:"1px solid black", paddingTop:"30px",paddingBottom:"20px",marginTop:"30px",background:"whitegrey"}}>
<div style={{display:"flex" ,gap:"60px"}}>
{
        arr.map((el)=>{
            return (
               <h1 style={{fontSize:"18px", fontWeight:"700"}}>{el}</h1>
            ) 
        })
    }
</div>
<div style={{display:"flex"}}>
<div>
{
        obj.map((el)=>{
            return (
               <h1  style={{width:"60%",marginTop:"14px", fontSize:"14px" ,textAlign:"left",marginLeft:"20px"}}>{el}</h1>
            ) 
        })
    }
</div>
<div>
{
        obj1.map((el)=>{
            return (
               <h1 style={{width:"60%" ,marginTop:"14px",textAlign:"left",marginLeft:"10px", fontSize:"14px"}} >{el}</h1>
            ) 
        })
    }


</div>
<div>
{
        obj2.map((el)=>{
            return (
               <h1 style={{width:"60%",marginTop:"14px",textAlign:"left",marginLeft:"0px", fontSize:"14px"}} >{el}</h1>
            ) 
        })
    }


</div>
<div>
{
        obj3.map((el)=>{
            return (
               <h1 style={{width:"60%",marginTop:"14px",textAlign:"left",marginLeft:"10px", fontSize:"14px"}} >{el}</h1>
            ) 
        })
    }
</div>
<div style={{height:"100px",marginLeft:"50px",}}>
<div style={{display:"flex",gap:"20px",alignItems:"center"}}>
   <img alt="" style={{width:"30px", height:"30px"}}   src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/000000/external-responsive-responsive-design-xnimrodx-lineal-xnimrodx-2.png"/>
    <p style={{fontSize:"25px"}} >Get our apps</p>  
</div> 
   <Wrap mt="20px" w="100%">
  <WrapItem>
    <Avatar style={social} name='facebook'  src="https://img.icons8.com/ios/50/000000/facebook-circled--v2.png" />
  </WrapItem>
  <WrapItem>
    <Avatar style={social} name='twitter' src="https://img.icons8.com/ios/50/000000/twitter-circled--v3.png" />
  </WrapItem>
  <WrapItem>
    <Avatar style={social} name='instagram' src="https://img.icons8.com/carbon-copy/100/000000/instagram-new--v2.png" />
  </WrapItem>
  <WrapItem>
    <Avatar style={social} name='pinterest' src="https://img.icons8.com/ios/50/000000/pinterest--v5.png"/>
  </WrapItem>
</Wrap> 


</div>
</div>

<WrapItem marginTop="20px" gap="10px" alignItems="center">
    <Avatar style={{width:"30px",height:"30px",marginLeft:"20px"}} name='india' src="https://img.icons8.com/color/48/000000/india-circular.png" />
    <h1>India</h1>
</WrapItem>

<WrapItem width="70%" >
{
        obj4.map((el)=>{
            return (
               <p style={{width:"60%" ,marginTop:"14px",textAlign:"left",marginLeft:"10px", fontSize:"14px"}} >{el}</p>
            ) 
        })
    }  
</WrapItem>

</div>





</>


);




}





