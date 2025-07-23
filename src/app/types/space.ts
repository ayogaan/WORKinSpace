export interface Space {
    id: string;
    name: string;
    type: 'hot_desk' | 'fixed_desk';
    price_per_day: number;
    total_seats: number;
    company_id: string;
}