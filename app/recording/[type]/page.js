
import { Suspense } from "react";
import { Boundary } from "../../../common/component/boundary";
import { ScriptStepper, ScriptStepperSkeleton } from "../component/ScriptStepper";
import { ProductInfoTable, ProductInfoTableSkeleton } from "../component/ProductInfoTable";
import {ProductInfoTableServerAction} from "../component/ProductInfoTableServerAction"
// import { CardSlider } from "@/common/component/cardSlider";
export default async function Page({params}) {
  // const products = await data.then((res) => res.json());
  return (
    <div className="space-y-1">
        <Suspense fallback={ <Boundary labels={['productInfo(streaming)']} animateRerendering={true} size="sm">
                                <ProductInfoTableSkeleton/>
                            </Boundary>}>
          <Boundary labels={['productInfo(streaming)']} animateRerendering={true} size="sm">
              <ProductInfoTable data={fetch(
                    // We intentionally delay the reponse to simulate a slow data, equest that would benefit from streaming
                    `https://app-router-api.vercel.app/api/products?delay=1500&filter=${params.type}`,
                    {
                      // We intentionally disable Next.js Cache to better demo streaming
                      cache: 'no-store',
                    },
                )}/>
          </Boundary>
        </Suspense>

        <Suspense fallback={ <Boundary labels={['productInfo(streaming)']} animateRerendering={true} size="sm">
                                <ProductInfoTableSkeleton/>
                            </Boundary>}>
          <Boundary labels={['productInfo(streaming)']} animateRerendering={true} size="sm">
              <ProductInfoTableServerAction type={params.type}/>
          </Boundary>
        </Suspense>
      
       <Suspense fallback={ <Boundary labels={['scriptStep(streaming)']} animateRerendering={true} size="sm">
                          <ScriptStepperSkeleton/>
                          </Boundary>}>
            <Boundary labels={['scriptStep(streaming)']} animateRerendering={true} size="sm">
                <ScriptStepper data={fetch(
                  // We intentionally delay the reponse to simulate a slow data, equest that would benefit from streaming
                  `https://app-router-api.vercel.app/api/products?delay=1500&filter=${params.type}`,
                  {
                    // We intentionally disable Next.js Cache to better demo streaming
                    cache: 'no-store',
                  },
              )}/>
            </Boundary>
        </Suspense>
        {/* <CardSlider/> */}

    </div>
  );
}
