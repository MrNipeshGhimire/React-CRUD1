import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Home=()=>{
    const[product, setProduct] = useState([])

    const fetchProduct=async()=>{
       const response = await axios.get('https://67175b9db910c6a6e027b39d.mockapi.io/products')
       if(response.status === 200){
        //console.log("Data aato")
        setProduct(response.data)
       }   
    }

    useEffect(()=>{
        fetchProduct()
    },[])

    //truncateTExt //text lai certain length show garna 
    const truncateText=(text,maxlength)=>{
        return text.length > maxlength ? text.slice(0,maxlength)+'...':text
    }

    //delete
    const deleteProduct=async(id)=>{
        const response = await axios.delete('https://67175b9db910c6a6e027b39d.mockapi.io/products/'+product.id)
        if(response.status === 200){

        }
    }

    return(
        <>
<div className="bg-white p-8 overflow-auto mt-16 h-screen">
<Link to={"/create"} >
<button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Add New
</span>
</button>
</Link>
  <div className="relative overflow-auto">
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full bg-white border mb-20">
        <thead>
          <tr className="bg-[#2B4DC994] text-center text-lg md:text-sm font-bold text-white">
            <th className="p-0">
              <span className="block py-2 px-3 border-r border-gray-300 ">ID</span>
            </th>
            <th className="p-0">
              <span className="block py-2 px-3 border-r border-gray-300">Title</span>
            </th>
            <th className="p-0">
              <span className="block py-2 px-3 border-r border-gray-300">Brand</span>
            </th>
            <th className="p-0">
              <span className="block py-2 px-3 border-r border-gray-300">Category</span>
            </th>
            <th className="p-0">
              <span className="block py-2 px-3 border-r border-gray-300">Price</span>
            </th>
            <th className="p-0">
              <span className="block py-2 px-3 border-r border-gray-300">Description</span>
            </th>
            
            <th className="p-4 text-xs md:text-sm">Actions</th>
          </tr>
        </thead>
        <tbody>
            {
            product.map((product)=>(
            <tr className="border-b text-xs md:text-sm text-center text-gray-800">
            <td className="p-2 md:p-4">{product.id} </td>
            <td className="p-2 md:p-4">{product.productName}</td>
            <td className="p-2 md:p-4">{ product.productBrand}</td>
            <td className="p-2 md:p-4">{product.productCategory}</td>
            <td className="p-2 md:p-4">{product.productPrice}</td>
            <td className="p-2 md:p-4">{truncateText(product.productDescription,20)}</td>
            <td className="relative p-2 md:p-4 flex justify-center space-x-2">
                <Link to={"/edit/"+product.id} >
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm">Edit</button>
                </Link>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm" onClick={()=>{deleteProduct(product.id)}} >Delete</button>
            </td>
          </tr>
            ))
          
            }
         
         
        </tbody>
      </table>
    </div>
  </div>
</div>     
        </>
    )
}

export default Home