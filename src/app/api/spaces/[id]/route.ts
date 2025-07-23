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

export async function GET(
    request: NextRequest,
    context: { params: { id: string } } // ✅ NO destructuring here
) {
    const { id } = context.params;

    const space = mockSpaces.find((s) => s.id === id);

    if (!space) {
        return NextResponse.json(
            { success: false, message: 'Space not found' },
            { status: 404 }
        );
    }

    return NextResponse.json({ success: true, data: space });
}