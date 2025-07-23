import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const body = await request.json()

    return NextResponse.json({
        success: true,
        message: "User registered successfully",
        user: {
            id: "123",
            email: body.email,
            name: body.name
        },
        token: "mock-jwt-token-123456789"
    }, { status: 201 })
}
