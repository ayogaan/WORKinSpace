import api from '@/lib/axios';
import { Space } from '@/app/types/space';

// CREATE space
export async function createSpace(data: Omit<Space, 'id, company_id'>): Promise<Space> {
    const res = await api.post('/spaces', data);
    return res.data.data;
}

// GET all spaces (optionally filtered by type or company)
export async function getSpaces(params?: { type?: string; company_id?: string }): Promise<Space[]> {
    const res = await api.get('/spaces', { params });
    return res.data.data;
}

// GET a specific space
export async function getSpaceById(id: string): Promise<Space> {
    const res = await api.get(`/spaces/${id}`);
    return res.data.data;
}

// UPDATE space
export async function updateSpace(id: string, data: Partial<Omit<Space, 'id'>>): Promise<Space> {
    const res = await api.put(`/spaces/${id}`, data);
    return res.data.data;
}

// DELETE space
export async function deleteSpace(id: string): Promise<{ message: string }> {
    const res = await api.delete(`/spaces/${id}`);
    return res.data;
}
