


export default function Struture({img,name,des,price}){


return (

<>

<div style={{textAlign:"left"}}>
<img style={{width:"200px",height:"180px"}} src={img} alt="" />
<div style={{display:"flex",gap:"20px",marginLeft:"40px",marginTop:"40px"}}>
    <div style={{ borderRadius:"100%", width:"20px",height:"20px",border:"1px solid black" ,background:"black",}} ></div>
    <div style={{ borderRadius:"100%", width:"20px",height:"20px",border:"1px solid black" ,background:"#b39a77",}}></div>
    <div style={{ borderRadius:"100%", width:"20px",height:"20px",border:"1px solid black" ,background:"#4f4b37",}}></div>
</div>
<h1 style={{marginTop:"20px",fontSize:"15px"  }} > {name}</h1>
<p style={{marginTop:"10px",fontSize:"18px",fontWeight:"400",width:"60%"}}>{des}</p>
<p style={{marginTop:"10px", fontSize:"18px",fontWeight:"500"}}>INR {price}</p>
</div>



</>




)

}