import Link from "next/link";
import NewsCard from "./NewsCard";
import newsList from "./newsList";

export default function NewsGrid() {

  if(newsList.length === 0) {
    return(
      <div className="w-full flex flex-col gap-2 items center justify-center p-4 border-1 border-gray-200 text-center">
        <p>There is currently no news to See. <br/> Come back later</p>
        <Link href="/" className="bg-primary-green p-2 rounded text-white">Back to homepage</Link>
      </div>
    )
  }
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
      {newsList.map((item, idx) => (
        <NewsCard news={item} key={idx} />
      ))}
    </div>
  );
} 