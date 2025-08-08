import { MVSCard } from "./MVSCard"
import { getHomeData } from '@/app/data/resourceData';

const homeData = getHomeData();

const mvs = [
    {
        title: "Our Mission",
        description: homeData?.hero_banner_slides?.welcome_statement?.mission || "To harness Imo State’s natural gas resources by collaborating with private and public partners to deliver gas-based infrastructure, foster investment, generate revenue, reduce gas flaring, and promote domestic industrial growth."
    },
    {
        title: "Our Vision",
        description: homeData?.hero_banner_slides?.welcome_statement?.vision || "To transform Imo State into a regional leader in gas-driven industrialization and socio-economic development."
    }
]   

export const MVSSection = () => {
    return(
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-8 py-20 justify-center items-center w-full bg-[#F1F1F1]">
            {mvs.map((mvs, index) => (
                <MVSCard key={index} title={mvs.title} description={mvs.description} />
            ))}
        </div>
    )
}