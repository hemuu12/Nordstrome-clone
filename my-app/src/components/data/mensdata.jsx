import {
    Menu,
    MenuButton,
    MenuList,
    MenuItemOption,
    MenuOptionGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'
import {Fetch,Fetchwomen} from "../data/fetch"


import {useState , useEffect} from "react"
import {ChevronDownIcon} from "@chakra-ui/icons"
import Struture from './structure'





export default function Data(){

let [data,setData] =useState([])
let [data1,setData1] =useState([])

function fetch(){
    Fetch().then((res)=>setData(res.data))
    .catch((error)=>console.log(error))
    .finally(()=>console.log("promise Complete"))
}
function fetchsecond(){
    Fetchwomen().then((res)=>setData1(res.data))
    .catch((error)=>console.log(error))
    .finally(()=>console.log("promise Complete"))
}
useEffect(()=>{
fetch()
fetchsecond()
},[])



    return (

      <>
        <div>
        <h1>Business Casual Apparel for Men</h1>
        <div>
            <div style={{display:"flex" ,alignItems:"center",justifyContent:"space-between",paddingLeft:"20px",paddingRight:"30px"}}>
                <h1>Items</h1>
              <div>
            <Menu closeOnSelect={false}>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} border="1px solid black" pl="50px" pr="50px" ta="left">
                MenuItem
            </MenuButton>
            <MenuList minWidth='240px'>
                <MenuOptionGroup defaultValue='asc' title='Filters' type='radio'>
                <MenuItemOption value='asc'>Ascending</MenuItemOption>
                <MenuItemOption value='desc'>Descending</MenuItemOption>
                </MenuOptionGroup>
            </MenuList>
            </Menu>
            </div>  
            </div>
        </div>


        <h1 style={{marginTop:"20px",fontSize:"18px",fontWeight:"200",textAlign:"left",paddingLeft:"20px"}}>All Business Casual Apparel for Men</h1>

       
        <div style={{display:"grid",margin:"auto",gap:"20px",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"1fr 1fr 1fr"}}>
        {
            data.map((el)=>(
                <Struture  key={el.id}
                   img= {el.image}
                  des={el.title}
                  name={el.category}
                  price={el.price}
                /> 

            ))
        }
        {
            data1.map((el)=>(
                <Struture  key={el.id}
                   img= {el.image}
                   des={el.title}
                   name={el.category}
                  price={el.price}
                /> 

            ))
        }

        </div>



        </div>

       







      </>  






    )
}