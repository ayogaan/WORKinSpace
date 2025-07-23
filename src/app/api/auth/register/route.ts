import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();

    return NextResponse.json({
        message: 'Company registered successfully',
        data: {
            id: 'mock-company-id',
            company_name: body.company_name,
            email: body.email,
        },
    });
}