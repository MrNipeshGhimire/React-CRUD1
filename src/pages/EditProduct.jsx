import { Link } from "react-router-dom"

const EditProduct=()=>{
    return(
        <>
<Link to={"/"} >
<button class="mt-10 ml-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
Home Page
</span>
</button>
</Link>
<div className="bg-white border border-4 rounded-lg shadow relative mx-10">

<div className="flex items-start justify-between p-5 border-b rounded-t">
    <h3 className="text-xl font-semibold">
        Edit product
    </h3>
    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>

<div className="p-6 space-y-6">
    <form action="#">
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
                <label for="product-name" className="text-sm font-medium text-gray-900 block mb-2">Product Name</label>
                <input type="text" name="productName" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Product Name" required=""/>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label for="category" className="text-sm font-medium text-gray-900 block mb-2">Category</label>
                <input type="text" name="productCategory" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Category" required=""/>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label for="brand" className="text-sm font-medium text-gray-900 block mb-2">Brand</label>
                <input type="text" name="productBrand" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Brand" required=""/>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label for="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                <input type="number" name="productPrice" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Price" required=""/>
            </div>
            <div className="col-span-full">
                <label for="product-details" className="text-sm font-medium text-gray-900 block mb-2">Product Details</label>
                <textarea id="product-details" name="productDescription" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Enter Description"></textarea>
            </div>
            <div className="p-6 border-t border-gray-200 rounded-b">
              <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Add Product</button>
            </div>
        </div>
    </form>
</div>
</div>

        
        </>
    )
}

export default EditProduct