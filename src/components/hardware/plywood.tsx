import { cn } from "@/lib/utils";
import { CardImageTitle } from "@/types/products/garden";
import Image from "next/image";

export const Plywood = ({ pageData }: { pageData: any }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
        {pageData[0].map((item: string, index: number) => (
          <Image
            alt=""
            src={item}
            height={232}
            width={292}
            className={cn(
              "px-2 w-full border-b border-b-[#ddd] py-6 flex flex-col gap-4",
              index % 2 === 0 && "border-r-[#ddd] md:border-r",
            )}
            key={index}
          />
        ))}
      </div>
      <div>
        <Image
          alt=""
          src={"/n7.jpg"}
          height={190}
          width={689}
          className="w-full"
        />
        <h3 className="text-xs font-semibold text-center text-white py-1 w-full mt-1 bg-[#277e78]">
          102
        </h3>
      </div>
      <div className="flex flex-col gap-5">
        {pageData[1].map(
          (item: { title: string; img: string[] }, index: number) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-white py-2 pl-2 w-full mb-1 bg-[#277e78]">
                {item.title}
              </h3>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {item.img.map((img, imgIndex) => (
                  <Image
                    alt=""
                    src={img}
                    height={126}
                    width={342}
                    className="w-full"
                    key={imgIndex}
                  />
                ))}
              </div>
            </div>
          ),
        )}
      </div>
      <div>
        <h3 className="text-sm pl-2 font-semibold text-white py-2 mb-3 w-full mt-1 bg-[#277e78]">
          Colors Available
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:grid-cols-5">
          {pageData[2].map((item: CardImageTitle, index: number) => (
            <div key={index}>
              <Image
                src={item.img}
                height={161}
                width={132}
                alt=""
                className="mb-1"
              />
              <h3 className="text-sm font-semibold py-1 text-white text-center w-full bg-[#277e78]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
