import { NextResponse } from 'next/server';
export async function PUT(request: Request) {
    const data = await request.json();
    // Here you would typically update the company in your database
    return NextResponse.json({
        ...data,
        id: 'mock-company-id', // Mock response
    });
}