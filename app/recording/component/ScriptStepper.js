import { Stepper } from "../../../common/component/Stepper";

export async function ScriptStepper({data}) {
    const products = (await data.then((res) => res.json())) ;
    console.log("script",  products.map(item=>`${item.id}: ${item.rating}` ))
    return (
      <div className="flex items-end max-w-screen-lg mx-auto">
        {products.map((item,index) => {
          return <Stepper key={item.id} type={"completed"}stepNum={item.id} stepName={item.name} isLast={index===products.length -1}/>;
        })}
      </div>
    );
}

export function ScriptStepperSkeleton() {
    return (
        <div className="flex items-end max-w-screen-lg mx-auto">
            <Stepper type={"inprogress"} isLast={false}/>
            <Stepper type ={"incomplete"} isLast={false}/>
            <Stepper type ={"incomplete"} isLast={true}/> 
        </div>
    );
}