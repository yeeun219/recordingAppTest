"use  client"
async function getDataThroughServerAction(type){
    "use server"
    const data = await fetch(
        // We intentionally delay the reponse to simulate a slow data, equest that would benefit from streaming
        `https://app-router-api.vercel.app/api/products?delay=1500&filter=${type}`,
        {
          // We intentionally disable Next.js Cache to better demo streaming
          cache: 'no-store',
        },
    )
    return data;

}

//상품정보 표
export async function ProductInfoTableServerAction({
    type
  }) {
    const products = (await getDataThroughServerAction(type)) ;
    console.log("aaa")
    console.log(products)

    return (
        <div></div>
    // <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    //     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    //         <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
    //             <tr>
    //                  <th scope="col" className="px-4 py-2">
    //                    ID
    //                 </th>
    //                 <th scope="col" className="px-6 py-2">
    //                     Name
    //                 </th>
    //                 <th scope="col" className="px-6 py-2">
    //                     Stock
    //                 </th>
    //                 <th scope="col" className="px-6 py-2">
    //                     Rating
    //                 </th>
    //             </tr>
    //         </thead>
    //           <tbody>
    //           {products.map((product) => (
    //               <>
    //               <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 ">
    //                   <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //                   {product.id}
    //                   </th>
    //                   <td className="px-4 py-2">
    //                   {product.name}
    //                   </td>
    //                   <td className="px-6 py-2">
    //                   {product.stock}
    //                   </td>
    //                   <td className="px-6 py-2">
    //                   {product.rating}
    //                   </td>
    //               </tr>
    //               </>
                  
                  
    //         ))}
    //           </tbody>
    //       </table>
    //   </div>


    );
  }
  