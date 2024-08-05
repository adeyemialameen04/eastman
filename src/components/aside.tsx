import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { aside } from "@/data/aside";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import slugify from "react-slugify";

export function Aside({ defaultValue }: { defaultValue?: string }) {
  return (
    <aside className="flex flex-col gap-3">
      <Accordion
        defaultValue={defaultValue}
        type="single"
        collapsible
        className="w-full bg-white mt-3 p-1"
      >
        {aside.map((item, index) => (
          <AccordionItem
            value={slugify(item.title)}
            className="gap-0"
            key={index}
          >
            <AccordionTrigger className="py-2 trigger bg-blue-900 border-black data-[state=open]:bg-[#EEEEEE] truncate data-[state=open]:text-[#333] text-[13px] hover:no-underline pl-2 text-white font-bold ">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="pl-1 text-[#333]">
              {item.sections.map((section, index) => (
                <div className="" key={index}>
                  <p
                    className={cn(
                      "flex items-center gap-1 text-xs font-bold border-b border-b-[#ccc] text-[#333] my-1 py-[5px]",
                      section.label === "" && "hidden",
                    )}
                  >
                    <ArrowDown size={15} color="#930" /> {section.label}
                  </p>
                  <div
                    className={cn(
                      "pl-2 flex flex-col gap-1 text-[12px] ts",
                      section.label === "" && "mt-2",
                    )}
                  >
                    {section.menu.map((menu, index) => (
                      <Link
                        href={`/products/${slugify(item.title)}?product=${slugify(menu)}`}
                        key={index}
                        className="flex items-center gap-1 border-b border-b-[#ddd] py-1 hover:underline hover:text-[#930] capitalize"
                      >
                        <ArrowRight size={15} color="#930" /> {menu}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Link href={"/contact"}>
        <Image
          src={"/callback-off.jpg"}
          alt="Callback"
          height={247}
          width={87}
          className="w-full object-contain"
        />
      </Link>
      <Link href={"/contact"} className="flex flex-col">
        <h3 className="uppercase">Reach us</h3>
        <Image
          src={"/googlemap.jpg"}
          height={119}
          width={247}
          alt="Google map"
          className="w-full my-2"
        />
        <p className="text-xs text-[#333]">
          B-XXX - 2185, C-203/1, Phase-VII, Focal Point, Ludhiana - 141 010
        </p>
        <Link
          href={"/contact"}
          className="text-xs text-white bg-[#333] py-1 px-3 rounded-[100vh] self-end mt-2"
        >
          more info..!
        </Link>
      </Link>
    </aside>
  );
}
