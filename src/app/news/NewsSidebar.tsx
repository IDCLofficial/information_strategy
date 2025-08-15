import Image from "next/image";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { getNewsList } from "./newsList";

const categories = [
  { name: "Latest Updates", count: 0 },
  { name: "Policies", count: 0 },
  { name: "Latest Updates", count: 0 },
  { name: "Latest Updates", count: 0 },
];


export default async function NewsSidebar() {
  const popularNews = (await getNewsList()).slice(0, 3).map((post) => ({ title: post.fields.title, img: post.fields.featuredImage?.fields.file.url, badge: post.fields.category, desc: post.fields.content }));
  return (
    <aside className="w-full md:w-64 flex-shrink-0 bg-[#F9F9F9] p-2 md:p-4 mb-8 md:mb-0">
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
      <div className="max-md:hidden">
        <h3 className="font-medium text-base md:text-[18px] mb-2 md:mb-4">POPULAR NEWS</h3>
        <ul className="space-y-2 md:space-y-4">
          {popularNews.map((news, idx) => (
            <li key={idx} className="flex gap-2 md:gap-3 items-center">
              <Link href={`/news/${news.title}`} className="flex gap-2 md:gap-3 items-center">
                <div className="w-[50px] h-[50px] relative rounded overflow-hidden flex-shrink-0">
                  <Image src={`https:${news.img}` || ""} alt={news.title} width={100} height={100} className="object-cover w-full h-full" />
                </div>
                <div>
                <div className="text-xs md:text-[14px] font-medium leading-tight line-clamp-2">{news.title}</div>
                  <div className="text-[10px] text-gray-500 mt-1">{news.badge.fields.category_name}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
} 