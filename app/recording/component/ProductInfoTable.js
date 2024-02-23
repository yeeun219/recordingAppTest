//상품정보 loading skeleton 
export function ProductInfoTableSkeleton() {
    return (
        <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-4 py-2">
                       ID
                    </th>
                    <th scope="col" className="px-6 py-2">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-2">
                        Stock
                    </th>
                    <th scope="col" className="px-6 py-2">
                        Rating
                    </th>
                </tr>
            </thead>
              <tbody>
            
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 ">
                      <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
                      </th>
                      <td className="px-4 py-2">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                      </td>
                      <td className="px-6 py-2">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                      </td>
                      <td className="px-6 py-2">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      </>

    );
}
  
//상품정보 표
export async function ProductInfoTable({
    data
  }) {
    const products = (await data.then((res) => res.json())) ;
    return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                     <th scope="col" className="px-4 py-2">
                       ID
                    </th>
                    <th scope="col" className="px-6 py-2">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-2">
                        Stock
                    </th>
                    <th scope="col" className="px-6 py-2">
                        Rating
                    </th>
                </tr>
            </thead>
              <tbody>
              {products.map((product) => (
                  <>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 ">
                      <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.id}
                      </th>
                      <td className="px-4 py-2">
                      {product.name}
                      </td>
                      <td className="px-6 py-2">
                      {product.stock}
                      </td>
                      <td className="px-6 py-2">
                      {product.rating}
                      </td>
                  </tr>
                  </>
                  
                  
            ))}
              </tbody>
          </table>
      </div>


    );
  }
  