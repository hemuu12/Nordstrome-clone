
import {Box,Button,Input}  from "@chakra-ui/react"


export default function Login(){
return (
<>
<Box margin="auto"  alignItems="center" w="50%">
<h1 style={{fontSize:"25px"}}>Sign In | Create Account</h1>
<p style={{marginTop:"10px",marginRight:"98px",fontSize:"12px"}}>Enter your email to get started.</p>
<p style={{marginTop:"10px",marginRight:"235px",fontSize:"12px",fontWeight:"600"}}>Email</p>

<Input type="search" w="350px"  mt="20px" ml="80px" borderRadius="none" />
<p style={{margin:"auto",marginTop:"15px",marginRight:"134px",fontSize:"12px",width:"50%",textAlign:"left"}}>By tapping Next, you agree to our <span style={{ textDecoration:"underline"}}   > Privacy Policy</span> and <span style={{ textDecoration:"underline"}} >Terms & Conditions</span>.</p>


<Button  w="350px" ml="74px" bg="black" color="white" mt="20px" borderRadius="none">Next</Button>
</Box>




</>


)

}