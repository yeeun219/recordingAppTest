async function getTime(){
  const res = await fetch(process.env.URL + '/api/datetime', {next:{revalidate:1}});
  const data = await res.json();
  console.log(data.datetime);
  return data.datetime;
}

export default async function Home() {
    
    const time = await getTime();
    
    return (
      <div className='h-screen w-screen bg-white flex flex-col justify-center items-center'>
        <h1>Welcome to my Server Action</h1>
        <div className="bg-white h-screen w-full p-10">
          <h1 className='m-10'>{time}</h1>
        </div>
      </div> 
    );
  }  