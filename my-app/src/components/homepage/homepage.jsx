import Slideshow from "./slideshow"
import {Link} from "react-router-dom"
import {Fetchwomen} from "../data/fetch"
import Struture from "../data/structure"
  import {useState,useEffect} from "react" 
import Slideshow2 from "./slideshow2"

export default function Home(){
    const slideImages = [
        {
          url: "https://n.nordstrommedia.com/id/44648fdb-be56-4600-addb-6d3c7ba21f2c.jpeg?h=200&w=1608",
        }, 
    ]  

    let [data,setData] =useState([])
   
    
    function fetchsecond(){
        Fetchwomen().then((res)=>setData(res.data))
        .catch((error)=>console.log(error))
        .finally(()=>console.log("promise Complete"))
    }
    useEffect(()=>{
    fetchsecond()
    },[])
    


return (
<>
<div>
{slideImages.map((slideImage, index)=> (
            <div style={{width:"95%",margin:"auto",height:"190px",marginTop:"30px"}} key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`,width:"100%" ,height:"180px"}}>
             
                <div style={{textAlign:"left",margin:"auto",paddingTop:"60px",alignItems:"center",width:"50%"}}>
                    <h1 style={{fontWeight:"600"}}>Get a $40 Bonus Note!</h1>
                    <p style={{fontWeight:"400"}}>An exclusive offer for new Nordstrom credit cardmembers. Restrictions apply.</p>
                    <Link style={{marginTop:"10px",textDecoration:"underline"}} to="/apply">Apply Now</Link>
                </div>
             
                
              </div>
            </div>
          ))} 
<Slideshow/>
</div>
<div style={{textAlign:"left",marginTop:"50px",paddingLeft:"20px"}}>
  <h1 style={{fontSize:"30px",fontWeight:"500"}}>Great deals on what you love</h1>
  <p style={{fontSize:"17px",fontWeight:"450",marginTop:"10px"}}>Items similar to what you've browsed are on sale</p>
</div>

<div style={{display:"flex",margin:"auto",gap:"10px",marginTop:"40px" ,paddingLeft:"10px",paddingRight:"10px",textAlign:"center"}}>
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
</div>

<Slideshow2/>
</>


)

}