import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function PUT(request){
    const res = await fetch('http://worldtimeapi.org/api/timezone/America/Chicago');
    const data = await res.json();
    console.log(data);

    const path = request.nextUrl.searchParams.get('path') || '/';
    revalidatePath(path);
    return Response.json({datetime: data.datetime});
  } 