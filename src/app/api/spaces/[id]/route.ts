// app/api/spaces/[id]/route.ts
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

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const space = mockSpaces.find((s) => s.id === params.id);
    if (!space) {
        return NextResponse.json({ message: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(space);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const index = mockSpaces.findIndex((s) => s.id === params.id);
    if (index === -1) {
        return NextResponse.json({ message: 'Not found' }, { status: 404 });
    }

    const body = await req.json();
    mockSpaces[index] = { ...mockSpaces[index], ...body };

    return NextResponse.json({
        message: 'Space updated',
        data: mockSpaces[index],
    });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const index = mockSpaces.findIndex((s) => s.id === params.id);
    if (index === -1) {
        return NextResponse.json({ message: 'Not found' }, { status: 404 });
    }

    const deleted = mockSpaces.splice(index, 1);
    return NextResponse.json({
        message: 'Space deleted',
        data: deleted[0],
    });
}
