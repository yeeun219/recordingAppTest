
import { store } from "../../store";
import { logIn } from "../../store/features/auth-slice";
  async function handleSubmit(formData) {
    'use server';
    const email = formData.get("email");
    console.log('handle Submit Trriggered', email);
    // store.dispatch(logIn(email));
    const state = store.getState();
    console.log(state)
  }
  async function getTime(){
    const res = await fetch('http://worldtimeapi.org/api/timezone/America/Chicago',{
        next: {revalidate: 3 },
    })
    return res.json()
  }

async function setStateFromServer(action, payload){
    store.dispatch(action, payload);
}  

export default async function Home() {
  
  const [time] = await Promise.all([getTime()]);
  store.dispatch(logIn("ㄴㄴㄴㄴ"));
  const state = store.getState();
    console.log(state)
  return (
    <div className='h-screen w-screen bg-white flex flex-col justify-center items-center'>
      <h1>Welcome to my Server Action</h1>
      <form action={handleSubmit}>
        <input
            className="border"
            type="text"
            name="email"
        />
        <button type="submit">Send Message</button>
        {/* <button onClick={setStateFromServer}>set Redux</button> */}
      </form>
      <div className="bg-white h-screen w-full p-10">
        <h1 className='m-10'>{time.datetime}</h1>
      </div>
    </div>
  );
}