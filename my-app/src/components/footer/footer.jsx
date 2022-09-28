


export default function Footers(){

let arr=[
    "Customer Service",
    "About Us",
    "Stores & Services",
    "Nordstrom Card & Rewards",
    "Nordstrom, Inc."
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
"Careers",
"Corporate Social Responsibility",
"Shipping",
"Diversity, Inclusion & Belonging",
"Get Email Updates",
"Nordstrom Blog",
"The Thread",
"Nordy Podcast",
]
let obj3=
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
let obj4=
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



const style={
display:"flex",

}

const smalldiv={
marginTop:"15px",
fontSize:"14px",
width:"60%",
textAlign:"left",
marginLeft:"20px",
}
const firstdiv={
    marginTop:"15px",
    fontSize:"14px",
    width:"50%",
    textAlign:"left",
    marginLeft:"35px",
    }
const style1={
    display:"flex",
    gap:"60px",
    marginLeft:"18px",
   alignItems:"center",
    width:"95%",
    fontWeight:"700",
    marginBottom:"5px",
  
}
return(
<>

<div style={{marginTop:"30px",border:"1px solid grey",width:"95%"}}> 

<div style={style1}  >
{   
arr.map((el)=>{
    return (
        <h1 style={{width:"12%",textAlign:"left",paddingTop:"40px"}} >{el}</h1>
    ) 
})
}

</div>

    <div style={style} >
        <div >
        {
        obj.map((el)=>{
            return (
                <div style={firstdiv} >{el}</div>
            ) 
        })
        }
        </div>
    <div>
        {
            obj1.map((el)=>{
            return (  
                <div style={smalldiv}>{el}</div>      
            ) 
        })
        }
    </div>
    <div>
        {
            obj2.map((el)=>{
            return (  
                <div style={smalldiv}>{el}</div>      
            ) 
        })
        }
    </div>
    <div>
        {
            obj3.map((el)=>{
            return (  
                <div style={smalldiv}>{el}</div>      
            ) 
        })
        }
    </div>
    <div>
        {
            obj4.map((el)=>{
            return (  
                <div style={smalldiv}>{el}</div>      
            ) 
        })
        }
    </div>

    </div>

</div>

</>


);




}