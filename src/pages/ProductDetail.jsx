import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from 'swr'


export default function ProductDetail() {
  const params = useParams();

  const { data, error, isLoading } = useSWR(`https://dummyjson.com/products/${params.id}`, axios)

  const product = data?.data;
  console.log("products", data);
  

  const [selectedImage, setSelectedImage] = useState(null);

  console.log("selectImage", selectedImage);

    return (
      <main>

      <div className="product flex p-3 outline-dotted min-h-[600px] flex-col md:flex-row">
        <div className="images flex outline-dotted md:w-[55%] bdr">
          {product?.images?.length > 1 ?
        <div className="w-[150px]  outline-dotted h-full">
              {product?.images.map((image, i) => (
                <img 
                key={i}
                src={image} alt="" 
                className="outline-dotted " 
                onMouseOver={()=> 
                  setSelectedImage(image)
                } />
              ))}

        </div> :null  }
            <div >
            <img className="w-[500px]" src={selectedImage || product?.images[0]} alt="" />
             
             
              </div>  
              
        </div>

      <div className="product-data md:w-[45%] outline-dotted"></div>
       </div>

      </main>



    // <div>
    //     ProductDetail{' '}
    //     {params.id}        
    //     </div>
  )
}
