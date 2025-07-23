// src/app/api/spaces/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

const mockSpaces = [
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

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id; // Extract the dynamic segment
    // Fetch or process data based on the id
    const data = { id }; // Replace with actual data fetching logic
    return NextResponse.json(data);

}