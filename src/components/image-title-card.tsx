import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const ImageTitleCard = ({
  title,
  image,
  index,
  className,
  product,
  imageClassName,
}: {
  title: string;
  image: string;
  index?: number;
  className?: string;
  product?: string;
  imageClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2  border-t border-t-[#ddd]",
        index && (index + 1) % 2 === 0 && "border-l border-l-[#ddd]",
        className,
      )}
    >
      <Image
        src={image}
        height={product === "hoes-rakes" ? 23 : 168}
        width={product === "hoes-rakes" ? 123 : 318}
        className={cn(
          " px-3 py-3",
          imageClassName,
          product !== "hoes-rakes" && "w-full",
          product === "hoes-rakes" && "self-center",
        )}
        alt={title}
      />
      <p className="bg-[#277e78] flex items-center justify-center py-1 font-semibold text-[15px] text-white">
        {title}
      </p>
    </div>
  );
};
export default ImageTitleCard;
