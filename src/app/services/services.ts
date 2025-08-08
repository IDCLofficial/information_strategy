import { getServicesData } from '@/app/data/resourceData';

type service = {
    imgSrc: string,
    title: string,
    description: string
}

const servicesData = getServicesData();

// Create service objects from resource.json data
export const services:service[] = servicesData?.map((service: any) => ({
    imgSrc: "/images/no_image.jpg",
    title: service.name,
    description: service.description
})) || [];

// Fallback services if resource.json data is not available
if (services.length === 0) {
    services.push(
        {
            imgSrc: "/images/no_image.jpg",
            title: "Government Publicity",
            description: "Disseminates news, policies, and official information from the State Government to the public through radio, TV, print, and online media."
        },
        {
            imgSrc: "/images/no_image.jpg",
            title: "Media Relations",
            description: "Coordinates press briefings, interviews, and statements on behalf of the Governor and State Executive Council."
        }
    );
}