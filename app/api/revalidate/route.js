import { revalidateTag,revalidatePath } from 'next/cache'
 
export async function GET(request) {
    console.log("revalidate",request)
    const path = request.nextUrl.searchParams.get('path') || '/api/datetime';
    revalidatePath(path);
    console.log("revalidate",path)
    return Response.json({
        revalidated: true,
        now: Date.now(),
        cache: 'no-store',
    });
}