export async function GET(request, { params }) {
    console.log(params)
    return Response.json({response: 'Hello Again, Next.js!'})
}
export async function POST(request) {
    return Response.json({response: 'This is a Post request'})
}