import Image from "next/image";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import newsList from "./newsList";

const categories = [
  { name: "Latest Updates", count: 0 },
  { name: "Policies", count: 0 },
  { name: "Latest Updates", count: 0},
  { name: "Latest Updates", count: 0 },
];

const popularNews = newsList.slice(0, 3).map(({ title, date, img }) => ({ title, date, img }));

export default function NewsSidebar() {
  if(newsList.length === 0) return null;
  return (
    <aside className="w-full lg:w-64 flex-shrink-0 bg-[#F9F9F9] p-2 md:p-4 mb-8 md:mb-0">
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <span className="font-medium text-base md:text-[18px]">Popular</span>
          <BiChevronDown className="text-gray-500 text-[18px] cursor-pointer" />
        </div>
        <div className="flex flex-col gap-2 mt-4" id="dropdown">
          {categories.map((cat, idx) => (
            <div key={idx} className="w-full flex gap-2 md:gap-3 items-center">
              <span>{cat.name}</span>
              {/* <span>{cat.count}</span> */}
            </div>
          ))}
        </div>
      </div>
      <div className="mb-6 md:mb-8 max-md:hidden">
        <h3 className="font-medium text-base md:text-[18px] mb-2 md:mb-4">CATEGORIES</h3>
        <ul className="space-y-1 md:space-y-2">
          {categories.map((cat, idx) => (
            <li key={idx} className="flex justify-between text-gray-700 text-xs md:text-[15px]">
              <span>{cat.name}</span>
              <span>{cat.count}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-lg:hidden">
        <h3 className="font-medium text-base md:text-[18px] mb-2 md:mb-4">POPULAR NEWS</h3>
        <ul className="space-y-2 md:space-y-4">
          {popularNews.map((news, idx) => (
            <li key={idx} className="flex gap-2 md:gap-3 items-center">
              <Link href={`/news/${news.title}`} className="flex gap-2 md:gap-3 items-center">
                <div className="w-[50px] h-[50px] relative rounded overflow-hidden flex-shrink-0">
                  <Image src={news.img} alt={news.title} width={100} height={100} className="object-cover w-full h-full" />
                </div>
                <div>
                <div className="text-xs md:text-[14px] font-medium leading-tight line-clamp-2">{news.title}</div>
                  <div className="text-[10px] text-gray-500 mt-1">{news.date}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
} 