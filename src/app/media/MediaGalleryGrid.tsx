import React from "react";
import MediaGalleryCard from "./MediaGalleryCard";
import Link from "next/link";

interface MediaItem {
  image: string;
  title: string;
  isVideo?: boolean;
}

interface MediaGalleryGridProps {
  items: MediaItem[];
}

const MediaGalleryGrid: React.FC<MediaGalleryGridProps> = ({ items }) => {
  if(items.length === 0) {
    return (
      <div className="w-full flex flex-col gap-2 items center justify-center p-4 border-1 border-gray-200 text-center">
        <p>The media gallery is empty at the moment. <br/> Come back later</p>
        <Link href="/" className="bg-primary-green p-2 rounded text-white">Back to homepage</Link>
      </div>
    )
  }
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, idx) => (
        <MediaGalleryCard key={idx} image={item.image} title={item.title} isVideo={item.isVideo} />
      ))}
    </div>
  );
};

export default MediaGalleryGrid; 