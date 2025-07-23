import { NextResponse } from 'next/server';

let mockSpaces = [
    {
        id: '1',
        name: 'Hot Desk Area A',
        type: 'hot_desk',
        price_per_day: 150000,
        total_seats: 20,
    },
    {
        id: '2',
        name: 'Fixed Desk Zone B',
        type: 'fixed_desk',
        price_per_day: 300000,
        total_seats: 10,
    },
];

export async function GET() {
    return NextResponse.json({success: true, data:mockSpaces, message: 'Spaces fetched successfully'});
}

export async function POST(req: Request) {
    const body = await req.json();
    const newSpace = {
        id: String(mockSpaces.length + 1),
        ...body,
    };
    mockSpaces.push(newSpace);
    return NextResponse.json({
        message: 'Space created successfully',
        data: newSpace,
    });
}