import { getServicesData } from '@/app/data/resourceData';

type service = {
    imgSrc: string,
    title: string,
    description: string
}

type ResourceService = {
    name: string,
    description: string,
    img: string
}

const servicesData = getServicesData() as ResourceService[] | undefined;

// Create service objects from resource.json data
export const services: service[] = (servicesData ?? []).map((srv) => ({
    imgSrc: srv.img,
    title: srv.name,
    description: srv.description
}));

// Fallback services if resource.json data is not available
if (services.length === 0) {
    services.push(
        {
            imgSrc: "/images/megaphone-loudspeaker-making-announcement-vector.jpg",
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