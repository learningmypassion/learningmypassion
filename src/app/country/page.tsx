import Link from "next/link"
import React from "react"
function Country(){
    return( 
        <div> 
      <h1>This is country list</h1>
        <Link href={"/country/Canada"}><h2>Canada</h2></Link>
        <Link href={"/country/china"}><h2>China</h2></Link>
        <Link href={"/country/japan"}><h2>Japan</h2></Link>
        <Link href={"/country/pakistan"}><h2>Pakistan</h2></Link>
        <Link href={"/country/india"}><h2>India</h2></Link> 
        </div>    
       
        
    )
}
export default Country