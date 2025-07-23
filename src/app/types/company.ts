export interface Profile {
    id: string;
    name: string;
    email: string;
    location?: string;
    google_maps_link?: string;
    services?: string[];
    description?: string;
    image1?: string;
    image2?: string;
    image3?: string;
    image4?: string;
}