import { NextResponse } from 'next/server'
export function middleware(request) {
    const origin = request.headers.get('origin');
    console.log(origin);
  
    const allowedOrigins = ['https://example.com', 'https://another-domain.com'];
  
    const response = NextResponse.next();
  
    if (allowedOrigins.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin);
    } else {
      response.headers.delete('Access-Control-Allow-Origin');
    }
  
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Max-Age', '86400');
  
    console.log('Middleware!');
    console.log(`${request.method} ${request.url}`);
  
    return response;
  };

  export const config = {
    matcher: '/api/:path*',
  }