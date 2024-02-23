
export default async function Page() {
  return (
    <div className="grid h-auto px-4 place-content-center"> 
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">스크립트 정보를 받아올수 없습니다!.</p>

        <a
          href="#"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-orange-300 rounded hover:bg-orange-600 focus:outline-none focus:ring"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
