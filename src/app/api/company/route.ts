// app/api/company/me/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        id: 'mock-company-id',
        name: 'Mock Corp',
        location: '123 Mock St, Mock City',
        description: 'A mock company for testing purposes.',
        services: ['Mock Service 1', 'Mock Service 2'],
        google_maps_link: 'https://maps.google.com/?q=Mock+Corp',
        image1: 'https://via.placeholder.com/150',
        image2: 'https://via.placeholder.com/150',
        image3: 'https://via.placeholder.com/150',
        image4: 'https://via.placeholder.com/150',
    });
}

