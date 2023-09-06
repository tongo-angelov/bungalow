"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import Section from "@/components/Section/Section";

const images = [
  {
    original: "/images/gallery/gallery_1.WEBP",
    originalWidth: 1600,
    originalHeight: 1066,
    thumbnail: "/images/gallery/gallery_1_thumb.WEBP",
  },
  {
    original: "/images/gallery/gallery_2.WEBP",
    originalWidth: 1600,
    originalHeight: 1066,
    thumbnail: "/images/gallery/gallery_2_thumb.WEBP",
  },
  {
    original: "/images/gallery/gallery_3.WEBP",
    originalWidth: 1600,
    originalHeight: 1066,
    thumbnail: "/images/gallery/gallery_3_thumb.WEBP",
  },
  {
    original: "/images/gallery/gallery_4.WEBP",
    originalWidth: 1600,
    originalHeight: 1066,
    thumbnail: "/images/gallery/gallery_4_thumb.WEBP",
  },
  {
    original: "/images/gallery/gallery_5.WEBP",
    originalWidth: 1600,
    originalHeight: 1066,
    thumbnail: "/images/gallery/gallery_5_thumb.WEBP",
  },
  {
    original: "/images/gallery/gallery_6.WEBP",
    originalWidth: 1600,
    originalHeight: 1066,
    thumbnail: "/images/gallery/gallery_6_thumb.WEBP",
  },
  {
    original: "/images/gallery/gallery_7.WEBP",
    originalWidth: 1600,
    originalHeight: 1066,
    thumbnail: "/images/gallery/gallery_7_thumb.WEBP",
  },
  {
    original: "/images/gallery/gallery_8.WEBP",
    originalWidth: 1600,
    originalHeight: 1066,
    thumbnail: "/images/gallery/gallery_8_thumb.WEBP",
  },
  {
    original: "/images/gallery/gallery_9.WEBP",
    originalWidth: 1600,
    originalHeight: 1066,
    thumbnail: "/images/gallery/gallery_9_thumb.WEBP",
  },
];

export default function Gallery({ className }: { className?: string }) {
  return (
    <Section className={`flex justify-center ${className}`}>
      <div className="w-full">
        <ImageGallery showPlayButton={false} lazyLoad items={images} />
      </div>
    </Section>
  );
}
