import Image from "next/image";
import PaginatedDisplay from "../tables/hardware-pagination";

export const Manholes = ({ pageData }: { pageData: any[] }) => {
  return (
    <PaginatedDisplay
      itemsPerPage={3}
      items={pageData}
      renderItem={(item, index) => (
        <div>
          <h3 className="uppercase text-xl ts text-[#333333]  pb-2">
            {item.header}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
            {item.items.map(
              (
                itemItem: { img: string; title: string[] },
                itemIndex: number,
              ) => (
                <div
                  key={itemIndex}
                  className=" border-r-[#ddd] border-r py-6 flex flex-col gap-4 "
                >
                  <Image
                    src={itemItem.img}
                    height={218}
                    width={172}
                    alt=""
                    className="px-4 self-center h-[154px]"
                  />
                  <div className="text-xs font-bold text-white flex flex-col gap-1 text-center w-full bg-[#277e78] py-1">
                    {itemItem.title.map((title: string, titleIndex: number) => (
                      <p key={titleIndex}>{title || ""}</p>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      )}
    />
  );
};
