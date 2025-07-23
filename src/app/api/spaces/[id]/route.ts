// src/app/api/spaces/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';


export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id; // Extract the dynamic segment
    // Fetch or process data based on the id
    const data = { id }; // Replace with actual data fetching logic
    return NextResponse.json(data);

}