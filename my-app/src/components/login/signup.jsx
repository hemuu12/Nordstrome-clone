import {Box,Button,Input,  FormControl,
    FormLabel,
    Checkbox
    }  from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {useState} from "react"

export default function Signup(){

const [input, setInput] = useState('')
const [input1, setInput1] = useState('')
const [input2, setInput2] = useState('')


    
const style={

display:"flex",
alignItems:"center",
gap:"5px",
marginTop:"10px", 
fontSize:"14px"
}
const img={
    width:"20px",
    height:"20px",
    marginLeft:'10px'
}
const inputt={
    width:"350px",
    borderRadius:"none",
    border:"1px solid black"
}
    return (

        <>
            <Box pl="10px"  w="50%" m="auto" textAlign="left">
                <h1 style={{fontSize:"35px",fontWeight:"400"}}>Create Account</h1>
               <div style={{marginTop:"30px"}}>
                <Box style={style}><img style={img} src="https://img.icons8.com/material-rounded/24/000000/checkout.png" alt="" /><p>Check out faster</p></Box>
                <Box style={style}><img style={img} src="https://img.icons8.com/ios/50/000000/semi-truck-side-view.png" alt="" /><p>Track orders easily</p></Box>
                <Box style={style}><img style={img} src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-sign-in-user-interface-tanah-basah-glyph-tanah-basah.png" alt="" /><p>Use one sign-in across our brands</p></Box>  
                </div> 
               
               <FormControl isRequired mt="20px">
               *Required
                    <FormLabel mt="15px">First Name</FormLabel>
                    <Input style={inputt}
                        type='Text'
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                    />
        
                    <FormLabel mt="15px">Last Name</FormLabel>
                    <Input style={inputt}
                        type='Text'
                        value={input1}
                        onChange={(e)=> setInput1(e.target.value)}
                    />       
                    <FormLabel mt="15px">Create password</FormLabel>
                    <Input style={inputt}
                        type='password'
                        value={input2}
                        onChange={(e)=> setInput2(e.target.value)}
                    />       
                    <div style={{alignItems:"center" ,marginTop:"20px" }}><Checkbox  isInvalid>Keep me signed in.</Checkbox></div>
                    <p style={{marginTop:"20px",fontSize:"12px",width:"50%"}}>By tapping Next, you agree to our <span style={{ textDecoration:"underline"}}   > Privacy Policy</span> and <span style={{ textDecoration:"underline"}} >Terms & Conditions</span>.</p>
                    <Button  w="300px" bg="black" color="white" mt="20px" borderRadius="none"><Link to="/">Create Account</Link></Button>
                    </FormControl>
            </Box>

        </>
    )
}