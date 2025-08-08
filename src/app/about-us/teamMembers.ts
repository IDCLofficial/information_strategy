import { getHomeData } from '@/app/data/resourceData';
import { getCommissionerData } from '@/app/data/resourceData';

const homeData = getHomeData();
const commissionerData = getCommissionerData();

export const teamMembers = [
    {
        name: commissionerData?.name || "Hon. Declan Emelumba",
        position: "Commissioner",
        imgSrc: "/images/commisioner.jpg" // Use a placeholder or real image if available
    },
    {
        name: "Mrs. Ibeka Ifeoma A",
        position: "Permanent Secretary",
        imgSrc: "/images/permSec.jpg" // Use a placeholder or real image if available
    }
];