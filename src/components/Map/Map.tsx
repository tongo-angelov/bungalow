import ExportedImage from "next-image-export-optimizer";

import { map } from "@/data";

const { latitude, longitude, key, icon, url } = map;

export default function Map({
  zoom = 16,
  scale = 2,
  noMarkers = false,
  width,
  height,
  className,
}: {
  zoom?: number;
  scale?: number;
  noMarkers?: boolean;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <a href={url} className={`flex justify-center ${className}`}>
      <ExportedImage
        className="rounded-xl shadow-md"
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&scale=${scale}&zoom=${zoom}&size=${width}x${height}&markers=color:blue|label:S|${latitude},${longitude}&key=${key}${
          noMarkers ? "&style=feature:poi|visibility:off" : ""
        }`}
        alt="google map"
        width={width}
        height={height}
      />
    </a>
  );
}
