import { store } from "../../store";
import { setToggle } from "../../store/features/toggle-slice";
import ClientComponent from "./component/clientComponent";
import ServerComponent from "./component/serverComponent";

export default function ConditionalComponent() {
    console.log(store.getState())
    //const [toggle,setToggle] = useState(true);
    //console.log(store.getState().toggleReducer.value.isToggle);
    // async function handleSubmit(){
    //     'use server';
    //     store.dispatch(setToggle());
    //     console.log(store.getState().toggleReducer.value.isToggle);
    // }

    return(
        <div>
        <div>여기가 부모 컴포넌트</div>
        {/* <form action={handleSubmit}> */}
        {/* <input
            className="border"
            type="text"
            name="email"
        /> */}
        <button type="submit">Set Redux value</button>
        {/* <button onClick={setStateFromServer}>set Redux</button> */}
      {/* </form> */}
        {store.getState().toggleReducer.value.isToggle ? <ServerComponent/> :<ClientComponent/>}
        </div>
    )
}