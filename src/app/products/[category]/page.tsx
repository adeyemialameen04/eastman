"use client";
import { Aside } from "@/components/aside";
import PaginatedCarpenterTools from "@/components/carpenter-tools";
import Container from "@/components/container";
import DynmamicPagination from "@/components/dynamic-pagination";
import { DynamicTable } from "@/components/dynamic-table";
import { BuildingHardware } from "@/components/hardware/building-hardware";
import { Locks } from "@/components/hardware/locks";
import { Manholes } from "@/components/hardware/manholes";
import MeshWireProducts from "@/components/hardware/mesh-wire-products";
import { Nails } from "@/components/hardware/nails";
import { Plywood } from "@/components/hardware/plywood";
import { RivetsAndScrews } from "@/components/hardware/rivets-screws";
import { ElectricMotorsWatePumps } from "@/components/hardware/treadle-water-pump";
import ImageTitleCard from "@/components/image-title-card";
import { GeneralNoData, NoData } from "@/components/no-data";
import PaginatedContent from "@/components/paginated";
import PaginatedPlanters from "@/components/planters";
import PaginatedPliersAndWrenches from "@/components/pliers&wrenches";
import Shovels from "@/components/shovels";
import PaginatedSpanners from "@/components/spanners";
import ComplexTable from "@/components/tables/conduit-table";
import { HardwareTable } from "@/components/tables/hardware";
import PaginatedDisplay from "@/components/tables/hardware-pagination";
import TeaSetTable from "@/components/tables/tea-set";
import { UtensilsTable } from "@/components/tables/utensils-table";
import TwoDialsPlatformScale from "@/components/two-dial";
import WeighTable from "@/components/weigh-table";
import Wrapper from "@/components/wrapper";
import { products } from "@/data/products/products";
import {
  generateColumns,
  generateHardwareColumns,
  getBannerInfo,
} from "@/lib/products";
import { cn } from "@/lib/utils";
import { BallastSchema } from "@/types/products/electricals-hardware";
import { CardImageTitle, SectionSchema } from "@/types/products/garden";
import { LeatherKit } from "@/types/products/hand-tools";
import { TwoDialsPlatformScaleSchema } from "@/types/products/weigh";
import Image from "next/image";
import slugify from "react-slugify";
// If a product page needs pagination, WRAP it with the DynamicPagination component and pass the appropriate props
type ProductCategory = keyof typeof products;
type SpecialCategory = "chemicals";

const Page = ({
  params,
  searchParams,
}: {
  params: { category: string; item: string };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) => {
  const product: any = searchParams.product as string;
  const category = params.category.replace(/-/g, "_") as
    | ProductCategory
    | SpecialCategory;

  if (category === "chemicals") {
    return <NoData product={product as string} category={params.category} />;
  }
  if (
    (category === "general_products" && product === "candles") ||
    product === "sewing-machines"
  ) {
    return (
      <GeneralNoData product={product as string} category={params.category} />
    );
  }

  const excludedProducts = ["pvc-trunking", "nails", "mesh-wire-products"];
  const sectionData = products[category];
  console.log(sectionData, "HIM");

  let selectedItem, type, pageData, isPagination;

  if (!excludedProducts.includes(product as string)) {
    selectedItem = sectionData.find(
      (item: SectionSchema) => slugify(item.label.toLowerCase()) === product,
    );
    type = selectedItem?.type;
    pageData = selectedItem?.data;
    isPagination = selectedItem?.pagination;
  } else {
    type = "All Products";
    pageData = sectionData;
    isPagination = false;
  }

  console.log("BEGINNING", pageData, "IS THIS THE END?");

  const renderContentGarden = () => {
    if (type === "card-table" && product === "shovels") {
      return <Shovels data={pageData} product={product as string} />;
    } else if (isPagination && product === "planters") {
      return <PaginatedPlanters data={pageData} product={product as string} />;
    } else if (isPagination && type === "image-title") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <PaginatedContent pageData={pageData} product={product as string} />
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {pageData.map((item: CardImageTitle, index: number) => (
            <ImageTitleCard
              index={index as number}
              image={item.img}
              title={item.title}
              product={product as string}
              key={index}
            />
          ))}
        </div>
      );
    }
  };

  const renderHardWare = () => {
    if (product === "art-glass") {
      const renderGlass = (item: any) => (
        <div className={cn("flex flex-col")}>
          <Image
            src={item.img}
            height={273}
            width={154}
            alt=""
            className="w-full object-contain   h-fit"
          />
          <div className="w-full py-1 text-white text-sm font-semibold bg-[#277e78] border-r border-r-white text-center">
            {item.title}
          </div>
        </div>
      );
      return (
        <PaginatedDisplay
          renderItem={renderGlass}
          items={pageData}
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4",
            product === "art-glass" ? "gap-4" : "gap-y-4",
          )}
          itemsPerPage={28}
        />
      );
    } else if (product === "nails") {
      return <Nails />;
    } else if (
      [
        "lock-handles",
        "door-closer",
        "door-locks",
        "pad-locks",
        "drawer-locks",
      ].includes(product)
    ) {
      return <Locks pageData={pageData} product={product as string} />;
    } else if (product === "mesh-wire-products") {
      return <MeshWireProducts />;
    } else if (product === "electric-motors-water-pumps") {
      return <ElectricMotorsWatePumps pageData={pageData} />;
    } else if (product === "hardware") {
      return <BuildingHardware pageData={pageData} />;
    } else if (product === "rivets-screws") {
      return <RivetsAndScrews />;
    } else if (product === "manholes") {
      return <Manholes pageData={pageData} />;
    } else if (product === "welding-electrodes") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 mt-5">
          {pageData.map((item: string, index: number) => (
            <Image src={item} height={218} width={290} alt="" key={index} />
          ))}
        </div>
      );
    } else if (product === "louver-glass") {
      return (
        <div className="flex flex-col gap-0">
          {pageData.map((item: any, index: number) => (
            <div
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-0"
              key={index}
            >
              <Image
                height={270}
                width={328}
                alt=""
                src={item.img}
                className=""
              />
              <div className="flex flex-col self-center pl-3 w-full pr-8 py-5">
                <div className="flex items-center gap-2">
                  <div className="text-xs font-bold min-w-[110px] text-white py-2 pl-2 border-b border-b-white bg-[#277e78]">
                    Product Name
                  </div>
                  <div className="border-b border-b-[#ddd] -ml-2 py-[7px] w-full pl-2 text-xs font-bold">
                    {item.title}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xs font-bold min-w-[110px] text-white py-2 pl-2 border-b border-b-white bg-[#277e78]">
                    Color
                  </div>
                  <div className="border-b border-b-[#ddd] -ml-2 py-[7px] w-full pl-2 text-xs font-bold">
                    {item.color}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xs font-bold min-w-[110px] text-white py-2 pl-2 border-b border-b-white bg-[#277e78]">
                    Model Number
                  </div>
                  <div className="border-b border-b-[#ddd] -ml-2 py-[7px] w-full pl-2 text-xs font-bold">
                    {item.model_number}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-xs font-bold min-w-[110px] text-white py-2 pl-2 border-b border-b-white bg-[#277e78]">
                    Measurement
                  </div>
                  <div className="border-b border-b-[#ddd] -ml-2 py-[7px] w-full pl-2 text-xs font-bold">
                    {item.meas}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-xs font-bold min-w-[110px] text-white py-2 pl-2 border-b border-b-white bg-[#277e78]">
                    Thickness
                  </div>
                  <div className="border-b border-b-[#ddd] -ml-2 py-[7px] w-full pl-2 text-xs font-bold">
                    {item.thickness}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-xs font-bold min-w-[110px] text-white py-2 pl-2 border-b border-b-white bg-[#277e78]">
                    Material
                  </div>
                  <div className="border-b border-b-[#ddd] -ml-2 py-[7px] w-full pl-2 text-xs font-bold">
                    {item.material}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (product === "threaded-bars") {
      return (
        <div className="pt-1 grid grid-cols-1 md:grid-cols-2 gap-y-2">
          <div className="flex flex-col gap-1">
            <Image
              src={"/3 (1).jpg"}
              width={330}
              height={220}
              alt=""
              className="px-2 md:border-r border-r-[#ddd]"
            />
            <p className="bg-[#277e78] text-white py-1 font-semibold text-sm text-center mr-1">
              Threaded
            </p>
          </div>
          <table className="w-95% border-collapse text-xs ml-1">
            <tbody>
              <tr>
                <td
                  className="bg-[#277e78] text-white font-bold border-r border-white p-1.5"
                  colSpan={2}
                >
                  Galvanized Threaded Bars 4.8 Class
                </td>
              </tr>
              <tr>
                <td
                  className="text-black font-bold border-b border-[#ddd] p-1.5"
                  colSpan={2}
                  align="center"
                >
                  <h5>SIZE</h5>
                </td>
              </tr>
              <tr>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  width="51%"
                  align="center"
                >
                  M6
                </td>
                <td
                  className="text-black font-bold border-b border-[#ddd] p-1.5"
                  width="49%"
                  align="center"
                >
                  M16
                </td>
              </tr>
              <tr>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  M8
                </td>
                <td
                  className="text-black font-bold border-b border-[#ddd] p-1.5"
                  align="center"
                >
                  M18
                </td>
              </tr>
              <tr>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  M10
                </td>
                <td
                  className="text-black font-bold border-b border-[#ddd] p-1.5"
                  align="center"
                >
                  M20
                </td>
              </tr>
              <tr>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  M12
                </td>
                <td
                  className="text-black font-bold border-b border-[#ddd] p-1.5"
                  align="center"
                >
                  M22
                </td>
              </tr>
              <tr>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  M14
                </td>
                <td
                  className="text-black font-bold border-b border-[#ddd] p-1.5"
                  align="center"
                >
                  M24
                </td>
              </tr>
              <tr>
                <td className="p-1.5" align="center">
                  &nbsp;
                </td>
                <td className="p-1.5" align="center">
                  &nbsp;
                </td>
              </tr>
            </tbody>
          </table>{" "}
          <div className="flex flex-col gap-1">
            <Image
              src={"/1 (1).jpg"}
              width={330}
              height={220}
              alt=""
              className="px-2 md:border-r border-r-[#ddd]"
            />
            <p className="bg-[#277e78] text-white py-1 font-semibold text-sm text-center mr-1">
              Bundle
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Image
              src={"/2 (1).jpg"}
              width={330}
              height={220}
              alt=""
              className="px-2"
            />
            <p className="bg-[#277e78] text-white py-1 font-semibold text-sm text-center mr-1">
              Pallet
            </p>
          </div>
        </div>
      );
    } else if (product === "plywood") {
      return <Plywood pageData={pageData} />;
    } else if (product === "wheel-barrows") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
          {pageData.map((item: any, index: number) => (
            <div
              key={index}
              className=" border-r-[#ddd] border-r py-6 flex flex-col gap-4 "
            >
              <Image
                src={item.img}
                height={218}
                width={172}
                alt=""
                className="px-4 self-center"
              />
              <div className="text-xs font-bold text-white text-center w-full bg-[#277e78] py-1">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div
          className={cn(
            "mt-5 grid grid-cols-1",
            product === "art-mirror"
              ? "md:grid-cols-3  gap-y-5"
              : "md:grid-cols-2 gap-y-5 gap-x-2",
          )}
        >
          {pageData.map((item: any, index: number) => (
            <div className={cn("flex flex-col")} key={index}>
              <Image
                src={item.img}
                height={273}
                width={154}
                alt=""
                className="w-full object-contain px-1 h-fit mb-2"
              />
              <div className="w-full py-1 text-white text-sm font-semibold bg-[#277e78] text-center border-r border-r-white">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  const renderContentHandTools = () => {
    if (type === "spanners") {
      return <PaginatedSpanners data={pageData} product={product as string} />;
    } else if (type === "pliers_wrenches") {
      return (
        <PaginatedPliersAndWrenches
          data={pageData}
          product={product as string}
        />
      );
    } else if (type === "carpenter_tools") {
      return (
        <PaginatedCarpenterTools data={pageData} product={product as string} />
      );
    } else if (type === "leather_kits") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {pageData.map((item: LeatherKit, index: number) => (
            <div key={index} className="flex flex-col gap-1">
              <Image
                src={item.img}
                height={225}
                width={337}
                alt=""
                className="w-full"
              />
              <div className="py-1 pl-1 bg-[#277e78] font-bold text-sm text-white">
                {item.title}
              </div>
              <p className="text-xs font-bold">{item.desc}</p>
              <p className={cn("text-xs", !item.toOrder && "hidden")}>
                To Order: {item.toOrder}
              </p>
            </div>
          ))}
        </div>
      );
    }
  };

  const renderFan = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        {pageData.map((item: CardImageTitle, index: number) => (
          <div key={index} className="relative p-5">
            <Image
              src={item.img}
              height={274}
              width={228}
              alt=""
              className="object-contain mx-auto"
            />
            <div className="py-1 font-bold text-sm bg-[#277e78] text-white pl-3">
              {item.title}
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-full border-b border-r border-[#ddd]" />
            </div>
          </div>
        ))}
      </div>
    );
  };
  const renderElectricalsHardware = () => {
    if (product === "ballast-louver-fitting") {
      return (
        <div className="flex flex-col gap-2 mt-4">
          {pageData.map((item: BallastSchema, index: number) => (
            <div className="flex gap-1" key={index}>
              <Image
                className="h-fit"
                height={122}
                width={138}
                src={item.img}
                alt=""
              />
              <div>
                <div className="bg-[#277e78] text-white text-sm px-3 py-2 font-bold">
                  {item.name}
                </div>
                <div className="flex-col flex gap-1">
                  {item.power.map((item: string, index: number) => (
                    <div
                      className="border-b py-1 border-b-[#ddd] flex text-sm items-center justify-center"
                      key={index}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (product === "pvc-trunking" || product === "pvc-pipe") {
      const renderPvcItem = (pvc: any) => (
        <div>
          <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-2")}>
            {pvc.img.map((image: string, imgIndex: number) => (
              <Image
                key={imgIndex}
                src={image}
                alt={pvc.type}
                className={cn(imgIndex === 0 && "col-span-2 w-full")}
                width={500}
                height={500}
              />
            ))}
          </div>
          <HardwareTable
            data={pvc.items}
            columns={generateHardwareColumns(pvc.columns)}
          />
        </div>
      );

      console.log("HII", pageData);
      return (
        <PaginatedDisplay
          items={product === "pvc-trunking" ? pageData[1].data : pageData}
          renderItem={renderPvcItem}
        />
      );
    } else if (product === "trunking-accessories") {
      console.log("YHH", pageData[1][0]);
      return (
        <div className="flex flex-col gap-5 mt-4">
          {pageData[0].map((item: any, index: number) => (
            <div key={index} className="bg-[#277e78]">
              <div className="py-1 font-semibold text-white border-b border-b-[] text-sm text-center">
                {item.size}
              </div>
              <Image
                width={692}
                height={209}
                alt=""
                className="w-full"
                src={item.img}
              />
              <div className="grid grid-cols-3">
                {item.positions.map((position: string, posIndex: number) => (
                  <div
                    key={posIndex}
                    className={cn(
                      "flex items-center justify-center py-1 text-white text-sm font-bold",
                      posIndex === 1 && "border-x border-x-white",
                    )}
                  >
                    {position}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <HardwareTable
            columns={generateHardwareColumns(pageData[1][0].columns)}
            data={pageData[1][0].items}
          />
        </div>
      );
    } else if (product === "metal-box") {
      return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {pageData.map((item: any, index: number) => (
            <div key={index} className="">
              <Image
                src={item.img}
                height={247}
                width={337}
                alt=""
                className=""
              />
              <div className="text-sm font-semibold text-white pl-2 py-1 bg-[#277e78] mt-5">
                {item.type}
              </div>
              <div className="font-light text-xs mt-1">
                <p>{item.qty}</p>
                <p>{item.thickness}</p>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (product === "conduit-emt-imc-fittings") {
      const renderItem = (pvc: any) => (
        <div>
          <Image
            src={pvc.img}
            alt={pvc.type}
            className=""
            width={500}
            height={500}
          />
          <HardwareTable
            data={pvc.items}
            columns={generateHardwareColumns(pvc.columns)}
          />
        </div>
      );

      console.log("HII", pageData);
      return (
        <PaginatedDisplay
          items={pageData}
          renderItem={renderItem}
          itemsPerPage={2}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        />
      );
    } else if (product === "conduit-emt-imc") {
      return (
        <div className="flex flex-col gap-4 mt-5">
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {pageData.map((item: any, index: number) => {
              const columns = generateHardwareColumns(item.columns);
              console.log(columns);
              return (
                <div
                  className={cn(
                    "flex flex-col gap-4",

                    item.span && "md:col-span-2",
                  )}
                  key={index}
                >
                  <Image
                    className={cn("")}
                    alt=""
                    src={item.img}
                    height={item.span ? 445 : 238}
                    width={item.span ? 649 : 317}
                  />
                  <HardwareTable data={item.items} columns={columns} />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            <Image src={"/conduit-3.jpg"} height={248} width={694} alt="" />
            <ComplexTable />
            <ComplexTable />
          </div>
        </div>
      );
    } else if (
      product === "drianage-pipe-fittings" ||
      product === "water-supply-pipe-fittings"
    ) {
      return (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {pageData.map((item: any, index: number) => {
            const columns = generateHardwareColumns(item.columns);
            console.log(columns);
            return (
              <div
                className={cn(
                  "flex flex-col gap-4",

                  item.span && "md:col-span-2",
                )}
                key={index}
              >
                <Image
                  className={cn("")}
                  alt=""
                  src={item.img}
                  height={item.span ? 445 : 238}
                  width={item.span ? 649 : 317}
                />
                <HardwareTable data={item.items} columns={columns} />
              </div>
            );
          })}
        </div>
      );
    } else if (
      product === "pvc-pipe-fittings" ||
      product === "pipe-accessories"
    ) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {pageData.map((item: any, index: number) => {
            const columns = generateHardwareColumns(item.columns);
            return (
              <div className="flex flex-col gap-5" key={index}>
                <Image
                  className="w-full h-[238px]"
                  src={item.img}
                  height={238}
                  alt=""
                  width={317}
                />
                <div>
                  <div className="py-1 bg-[#277e78] font-semibold text-sm pl-2 -mb-4 border-b border-b-white text-white">
                    {item.type}
                  </div>
                  <div className="">
                    <HardwareTable data={item.items} columns={columns} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  const renderHouseHoldProducts = () => {
    if (product === "cooking-range") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {pageData.map((item: CardImageTitle, index: number) => (
            <div key={index} className="relative p-5">
              <Image
                src={item.img}
                height={274}
                width={228}
                alt=""
                className="object-contain mx-auto"
              />
              <div className="py-1 font-bold text-sm bg-[#277e78] text-white pl-3">
                {item.title}
              </div>
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full border-b border-r border-[#ddd]" />
              </div>
            </div>
          ))}
        </div>
      );
    } else if (product === "shoe-polish") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {pageData.map((item: string, index: number) => (
            <div key={index} className="relative p-5">
              <Image
                src={item}
                height={274}
                width={228}
                alt=""
                className="object-contain mx-auto"
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full border-b border-r border-[#ddd]" />
              </div>
            </div>
          ))}
        </div>
      );
    } else if (product === "gas-stove") {
      return (
        <DynmamicPagination
          pageData={pageData}
          itemsPerPage={6}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3"
        >
          {pageData.map((item: CardImageTitle, index: number) => (
            <div key={index} className="relative p-5">
              <Image
                src={item.img}
                height={274}
                width={228}
                alt=""
                className="object-contain mx-auto"
              />
              <div className="py-1 font-bold text-sm bg-[#277e78] text-white pl-3">
                {item.title}
              </div>
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full border-b border-r border-[#ddd]" />
              </div>
            </div>
          ))}
        </DynmamicPagination>
      );
    } else if (product === "kerosene-stove") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
          {pageData.map((item: any, index: number) => (
            <div
              key={index}
              className="border-b border-b-[#ddd] border-r-[#ddd] border-r py-6 flex flex-col gap-4 "
            >
              <Image
                src={item.img}
                height={218}
                width={172}
                alt=""
                className="px-4 self-center"
              />
              <div className="text-xs font-bold text-white text-center w-full bg-[#277e78] py-1">
                {item.title}
              </div>
              <div className="pl-2 flex flex-col gap-1">
                <p className="text-xs font-bold">Secification.: {item.spec}</p>
                <p className="text-xs font-bold">Packing.: {item.packing}</p>
                <p className="text-xs font-bold">Meas.: {item.meas}</p>
                <p className="text-xs font-bold">G.W.: {item.gw}</p>
                <p className="text-xs font-bold">{item.qty}</p>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (product === "lantern") {
      return (
        <DynmamicPagination
          pageData={pageData}
          itemsPerPage={5}
          className="grid grid-cols-1 md:grid-cols-2 mt-3"
        >
          {pageData.map((item: any, index: number) => (
            <div
              key={index}
              className="border-b border-b-[#ddd] border-r-[#ddd] border-r py-6 flex flex-col gap-4 "
            >
              <Image
                src={item}
                height={218}
                width={172}
                alt=""
                className="px-4 self-center"
              />
              <div className="text-xs font-bold text-white text-center w-full bg-[#277e78] py-4"></div>
            </div>
          ))}
        </DynmamicPagination>
      );
    } else if (product === "vacuum-flask") {
      return (
        <DynmamicPagination
          className="flex-flex-col"
          pageData={pageData}
          itemsPerPage={5}
        >
          {pageData.map(
            (
              item: {
                img: string;
                item_no: string;
                desc: string;
                spec: string;
                indvl_package: string;
              },
              index: number,
            ) => (
              <div
                className="flex md:border-y md:flex-row gap-3 md:gap-0 flex-col border-y-[#ddd]"
                key={index}
              >
                <div className="py-2 px-10 md:border-r border-r-[#ddd] self-center md:self-start">
                  <Image src={item.img} height={227} width={101} alt="" />
                </div>
                <div className="flex flex-col self-center pl-3 w-full pr-8 py-5">
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-bold min-w-[110px] text-white py-2 pl-2 border-b border-b-white bg-[#277e78]">
                      Item No.
                    </div>
                    <div className="border-b border-b-[#ddd] -ml-2 py-[7px] w-full pl-2 text-xs font-bold">
                      {item.item_no}
                    </div>
                  </div>
                  <div className="flex items-start md:items-center md:gap-2 flex-col md:flex-row">
                    <div className="text-xs font-bold min-w-[110px] w-full md:w-auto text-white py-2 md:min-h-[70px] pl-2 border-b border-b-white bg-[#277e78]">
                      Desc.
                    </div>
                    <div className="md:border-b border-b-[#ddd] -ml-2 py-[7px] w-full pl-2 text-xs font-bold">
                      {item.desc}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-bold min-w-[110px] text-white py-2 pl-2 border-b border-b-white bg-[#277e78]">
                      Item No.
                    </div>
                    <div className="border-b border-b-[#ddd] -ml-2 py-[7px] w-full pl-2 text-xs font-bold">
                      {item.item_no}
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </DynmamicPagination>
      );
    }
  };

  const renderGeneralProducts = () => {
    if (product === "tv-stands" || product === "balloon") {
      return (
        <div
          className={cn(
            "grid grid-cols-1 gap-x-2 gap-y-4 mt-4",
            product === "balloon" && "md:grid-cols-2",
          )}
        >
          {pageData.map((item: string, index: number) => (
            <Image
              src={item}
              height={681}
              width={292}
              className="w-full"
              key={index}
              alt=""
            />
          ))}
        </div>
      );
    } else if (product === "bags") {
      return (
        <DynmamicPagination
          pageData={pageData}
          itemsPerPage={10}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3"
        >
          {pageData.map((item: CardImageTitle, index: number) => (
            <div
              key={index}
              className="border-b-[#ddd] border-r-[#ddd] border-r py-6 flex flex-col gap-4 "
            >
              <Image
                src={item.img}
                height={73}
                width={74}
                alt=""
                className="px-4 self-center"
              />
              <div className="text-xs font-bold text-white text-center w-full bg-[#277e78] py-1">
                {item.title}
              </div>
            </div>
          ))}
        </DynmamicPagination>
      );
    } else if (product === "suitcases") {
      return (
        <DynmamicPagination
          pageData={pageData}
          itemsPerPage={10}
          className="grid grid-cols-1 md:grid-cols-2 mt-3"
        >
          {pageData.map((item: string, index: number) => (
            <div
              key={index}
              className="border-b border-b-[#ddd] border-r-[#ddd] border-r py-6 flex flex-col gap-4 "
            >
              <Image
                src={item}
                height={253}
                width={319}
                alt=""
                className="px-4 self-center"
              />
            </div>
          ))}
        </DynmamicPagination>
      );
    } else if (product === "weighing-scales") {
      console.log(pageData[0].single, "YOOO");
      return (
        <div className="mt-4 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3">
            {pageData[0].single.map((item: CardImageTitle, index: number) => (
              <div
                key={index}
                className="border-b-[#ddd] border-r-[#ddd] border-r py-6 flex flex-col gap-4 "
              >
                <Image
                  src={item.img}
                  height={179}
                  width={121}
                  alt=""
                  className="px-4 self-center"
                />
                <div className="text-xs font-bold text-white text-center w-full bg-[#277e78] py-1">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-center">
              <p className="font-bold mb-1">(1kg--4kg)</p>
              <span className="font-light text-xs">
                SP/SPR/NSR : Color-Grey, Blue, Green, White, Packing volume:47.5
                x 41.5 x 47.5cm 8Pcs /CTN N.W.:12.8kg / G.W.:15.2kg, 20 feet
                container can hold 2520 PCS, 40 feet container can hold 5280 PCS
              </span>
            </div>
            <WeighTable />
            <span className="font-light text-xs px-12 text-center">
              <strong className="font-semibold">SP/SPR/NSR</strong> :
              Color-Grey, Blue, Green, White,{" "}
              <strong className="font-semibold">Packing volume</strong>:47.5 x
              41.5 x 47.5cm 8Pcs /CTN
              <strong className="font-semibold">N.W.:12.8kg / G.W.</strong>
              :15.2kg, 20 feet container can hold 2520 PCS, 40 feet container
              can hold 5280 PCS
            </span>
          </div>
          {pageData[1].two_dials.map(
            (item: TwoDialsPlatformScaleSchema, index: number) => (
              <TwoDialsPlatformScale data={item} key={index} />
            ),
          )}
        </div>
      );
    }
  };

  const renderUtensils = () => {
    if (product === "jugs-tumblers") {
      const jugsColumns = [
        {
          header: "Code",
          accessor: "code",
          className: "text-center",
          cellClassName: "text-center font-bold",
        },
        {
          header: "Height",
          accessor: "height",
          className: "text-center",
          cellClassName: "text-center font-bold border-x border-x-[#ddd]",
        },
        {
          header: "Capacity",
          accessor: "capacity",
          className: "text-center",
          cellClassName: "text-center font-bold border-x border-x-[#ddd]",
        },
      ];

      const tumblersColumns = [
        {
          header: "Code",
          accessor: "code",
          className: "text-center",
          cellClassName: "text-center font-bold",
        },
        {
          header: "Size",
          accessor: "size",
          className: "text-center",
          cellClassName: "text-center font-bold border-x border-x-[#ddd]",
        },
        {
          header: "Capacity",
          accessor: "capacity",
          className: "text-center",
          cellClassName: "text-center font-bold border-x border-x-[#ddd]",
        },
      ];

      return (
        <div className="flex flex-col gap-3 mt-4">
          <div>
            <Image
              src={"/jug-tumbles1.jpg"}
              height={567}
              width={600}
              alt=""
              className="md:px-8"
            />
            <div className="flex flex-col gap-3">
              {pageData[0].map((item: any, index: number) => (
                <div key={index}>
                  <div className="-mb-4 border-b border-b-white bg-[#277e78] text-sm font-bold text-white py-2 pl-2">
                    {item.type}
                  </div>
                  <DynamicTable data={item.items} columns={jugsColumns} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <Image
              src={"/jug-tumbles2.jpg"}
              height={567}
              width={600}
              alt=""
              className=""
            />
            <div className="flex flex-col gap-3">
              {pageData[1].map((item: any, index: number) => (
                <div key={index}>
                  <div className="-mb-4 border-b border-b-white bg-[#277e78] text-sm font-bold text-white py-2 pl-2 text-center">
                    Tumblers
                  </div>
                  <DynamicTable data={item.items} columns={tumblersColumns} />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (product === "tea-coffee-pots") {
      return (
        <div className="flex flex-col gap-4 mt-4">
          <div>
            <Image
              src={"/tea1.jpg"}
              className=""
              height={408}
              width={637}
              alt=""
            />
            <TeaSetTable data={pageData[0]} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {pageData[1].map((item: any, index: number) => {
                const columns = generateColumns(item.columns);
                return (
                  <div key={index} className="flex flex-col py-5">
                    <Image
                      className="self-center"
                      src={item.img}
                      height={213}
                      width={212}
                      alt=""
                    />
                    <div className="text-center text-sm font-bold text-white py-2 w-full bg-[#277e78] -mb-4 border-b border-b-white">
                      {item.type}
                    </div>
                    <DynamicTable data={item.items} columns={columns} />
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-1 gap-4">
              {pageData[2].map((item: any, index: number) => {
                const columns = generateColumns(item.columns);
                return (
                  <div key={index} className="flex flex-col py-5">
                    <Image
                      className="self-center w-full px-12 max-h-[272px] object-contain"
                      src={item.img}
                      height={213}
                      width={212}
                      alt=""
                    />
                    <div className="text-center text-sm font-bold text-white py-2 w-full bg-[#277e78] -mb-4 border-b border-b-white">
                      {item.type}
                    </div>
                    <DynamicTable data={item.items} columns={columns} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else if (product === "kitchen-tools-cutlery") {
      const items = [
        { code: "RCI-0101", size: "1.60 mm" },
        { code: "RCI-0101", size: "1.60 mm" },
        { code: "RCI-0101", size: "1.60 mm" },
        { code: "RCI-0101", size: "1.60 mm" },
      ];
      const items2 = [
        {
          code: "RCX-0201",
          string: `A) Solid Spoon<br>
B) Skimmer<br>
C) Ladle<br>
D) Slotted Turner<br>
E) Solid Turner`,
        },
      ];
      const columns2 = generateColumns(["Code", "String"], true);
      const columns = generateColumns(["Code", "Size"]);
      return (
        <div className="mt-4 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col">
              <Image
                src={"/kitchen-tools1.jpg"}
                height={327}
                width={252}
                alt=""
                className="self-center px-5 h-[309px]"
              />
              <div className="mr-2">
                <div className="text-center text-sm py-1 bg-[#277e78] text-white font-bold">
                  Cutlery Set 24 Pcs.
                </div>
                <div className="flex w-full border-t border-t-white border-collapse">
                  <div className="text-center text-sm flex-1 py-1 bg-[#277e78] text-white font-bold">
                    Code
                  </div>
                  <div className="font-bold text-xs text-center flex items-center justify-center flex-1 border-b border-b-[#ddd]">
                    RDA-0101
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="md:border-l border-l-[#ddd]">
                <Image
                  src={"/kitchen-tools2.jpg"}
                  height={327}
                  width={252}
                  alt=""
                  className="self-center px-5  h-[309px]"
                />
              </div>
              <div className="ml-2">
                <div className="text-center text-sm py-1 bg-[#277e78] text-white font-bold">
                  Cutlery
                </div>
                <div className="flex w-full border-t border-t-white border-collapse">
                  <div className="text-center text-sm flex-1 py-1 bg-[#277e78] text-white font-bold">
                    Code
                  </div>
                  <div className="font-bold text-xs text-center flex items-center justify-center flex-1 border-b border-b-[#ddd]">
                    RDA-0101
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="">
              <Image
                src={"/kitchen-tools3.jpg"}
                height={324}
                width={611}
                alt=""
                className="self-center px-5 w-full object-contain"
              />
            </div>
            <div className="ml-2">
              <div className="text-center text-sm py-1 bg-[#277e78] text-white font-bold">
                6PC Serving Spoon Set.
              </div>
              <div className="flex w-full border-t border-t-white border-collapse">
                <div className="text-center text-sm flex-1 py-1 bg-[#277e78] text-white font-bold">
                  Code
                </div>
                <div className="font-bold text-xs text-center flex items-center justify-center flex-1 border-b border-b-[#ddd]">
                  RDA-0101
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
            <div className="flex flex-col">
              <div
                className={cn(
                  "w-full self-center flex items-center justify-center",
                )}
              >
                <Image
                  src={"/kitchen-tools4.jpg"}
                  height={318}
                  width={233}
                  alt=""
                  className="h-[318px] object-contain"
                />
              </div>
              <div className="mr-2">
                <div className="text-sm py-1 bg-[#277e78] flex items-center justify-center flex-col text-center font-bold text-white -mb-4 border-b border-b-white">
                  Cutlery & Kitchen tools
                  <span className="font-semibold text-xs">
                    26 Pcs. Gift Pack Wooden Box
                  </span>
                </div>
                <DynamicTable data={items} columns={columns} />
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className={cn(
                  "w-full self-center flex items-center justify-center",
                  "md:border-l border-l-[#ddd]",
                )}
              >
                <Image
                  src={"/kitchen-tools5.jpg"}
                  height={318}
                  width={233}
                  alt=""
                  className="h-[318px] object-contain"
                />
              </div>
              <div className="ml-2">
                <div className="text-sm py-1 bg-[#277e78] flex items-center justify-center flex-col text-center font-bold text-white -mb-4 border-b border-b-white">
                  Kitchen tools
                </div>
                <DynamicTable data={items2} columns={columns2} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {pageData.map((item: any, index: number) => {
              const columns = generateColumns(item.columns, true);
              return (
                <div className="flex flex-col" key={index}>
                  <div
                    className={cn(
                      "w-full self-center flex items-center justify-center",
                    )}
                  >
                    <Image
                      src={item.img}
                      height={318}
                      width={233}
                      alt=""
                      className="h-[318px] w-full object-contain"
                    />
                  </div>
                  <div className="ml-2">
                    <div className="text-sm py-1 bg-[#277e78] flex items-center justify-center flex-col text-center font-bold text-white -mb-4 border-b border-b-white">
                      Kitchen tools
                    </div>
                    <DynamicTable data={item.items} columns={columns} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else if (product === "bar-accessories") {
      return (
        <div className="mt-4 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <Image
                src={"/bar1.jpg"}
                height={327}
                width={252}
                alt=""
                className="self-center px-5"
              />
              <div className="text-center text-sm py-1 bg-[#277e78] text-white font-bold">
                Bar Tools
              </div>
              <div className="flex w-full border-t border-t-white border-collapse">
                <div className="text-center text-sm flex-1 py-1 bg-[#277e78] text-white font-bold">
                  Code
                </div>
                <div className="font-bold text-xs text-center flex items-center justify-center flex-1 border-b border-b-[#ddd]">
                  RDA-0101
                </div>
              </div>
            </div>
            <Image
              className="px-6 place-self-center md:border-l border-l-[#ddd]"
              src={"/bar2.jpg"}
              height={272}
              width={360}
              alt=""
            />
          </div>
          <div className="mt-7">
            <div className="grid grid-cols-2">
              <Image
                src={"/bar3.jpg"}
                className="px-5"
                height={438}
                width={295}
                alt=""
              />
              <Image
                src={"/bar4.jpg"}
                className="border-l border-l-[#ddd] px-5"
                height={438}
                width={295}
                alt=""
              />
            </div>
            <div>
              <div className="text-center text-sm font-bold text-white bg-[#277e78] py-1 border-b border-b-white w-full">
                Measuring Bowl
              </div>
              <div className="flex gap-[2px] border-collapse">
                <div className="flex-1 flex flex-col">
                  <div className="text-center text-xs font-bold text-white bg-[#277e78] py-1  w-full">
                    Code
                  </div>
                  <div className="flex items-center justify-center text-center text-xs font-bold py-2 border-b border-b-[#ddd]">
                    RAS-0101
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="text-center text-xs font-bold text-white bg-[#277e78] py-1  w-full">
                    Size
                  </div>
                  <div className="flex items-center justify-center text-center text-xs font-bold py-2 border-b border-b-[#ddd] border-l border-l-[#ddd]">
                    12.5cm
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
            {pageData.map((item: any, index: number) => {
              const columns = generateColumns(item.columns);
              return (
                <div key={index} className="flex flex-col">
                  <div
                    className={cn(
                      "w-full self-center flex items-center justify-center",
                      index === 1 && "md:border-l border-l-[#ddd]",
                    )}
                  >
                    <Image
                      src={item.img}
                      height={318}
                      width={233}
                      alt=""
                      className="min-w-[233px] min-h-[318px] object-contain"
                    />
                  </div>
                  <div className={cn(index === 0 ? "mr-2" : "ml-2")}>
                    <div className="text-sm py-1 bg-[#277e78] text-center font-bold text-white -mb-4 border-b border-b-white">
                      {item.type}
                    </div>
                    <DynamicTable data={item.items} columns={columns} />
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <Image
              src={"/bar7.jpg"}
              className=""
              height={405}
              width={669}
              alt=""
            />
            <div className="text-sm py-1 bg-[#277e78] text-center font-bold text-white border-b border-b-white">
              Tongs
            </div>
            <div className="text-sm py-1 bg-[#277e78] text-center font-bold text-white">
              Code
            </div>
            <div className="lex items-center justify-center text-center font-bold text-xs border-b border-b-[#ddd] py-2">
              RCH-0101
            </div>
          </div>
        </div>
      );
    } else if (product === "table-accessories") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
          {pageData.map((item: any, index: number) => {
            const columns = generateColumns(item.columns);
            return (
              <div key={index} className="flex flex-col py-5 px-1">
                <Image
                  className="self-center w-full px-12 max-h-[272px] object-contain mb-6"
                  src={item.img}
                  height={272}
                  width={272}
                  alt=""
                />
                <div className="text-center text-sm font-bold text-white py-2 w-full bg-[#277e78] -mb-4 border-b border-b-white">
                  {item.type}
                </div>
                <DynamicTable data={item.items} columns={columns} />
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-y-4">
          {pageData.map((item: any, index: number) => (
            <div
              key={index}
              className={cn(
                "flex flex-col gap-0",
                item.span ? "md:col-span-2" : "",
              )}
            >
              <div
                className={cn(index % 2 !== 0 && "md:border-l border-l-[#ddd]")}
              >
                <Image
                  src={item.img}
                  alt=""
                  height={214}
                  width={item.span ? 656 : 320}
                  className={cn("self-center h-[214px] px-5")}
                />
              </div>
              <div className={cn(index % 2 !== 0 ? "ml-2" : "mr-2")}>
                <div className="py-2 w-full -mb-4 font-bold text-white border-b border-b-white bg-[#277e78] text-center text-sm">
                  {item.type}
                </div>
                <UtensilsTable data={item.items} />
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  const currBanner = getBannerInfo(params.category, selectedItem);

  return (
    <main className="mt-3 md:mt-[8rem]">
      <Container className="grid grid-cols-1 main-grid gap-5">
        <Aside defaultValue={params.category} />
        <Wrapper
          image={selectedItem?.banner?.slice(1) || currBanner.banner}
          title={`${currBanner?.title} / ${selectedItem?.label || product?.replaceAll("-", " ")}`}
        >
          {params.category === "garden-tools" && (
            <div>{renderContentGarden()}</div>
          )}
          {params.category === "hand-tools" && (
            <div>{renderContentHandTools()}</div>
          )}
          {params.category === "electricals-products" && (
            <div>{renderFan()}</div>
          )}
          {params.category === "electricals-hardware" && (
            <div>{renderElectricalsHardware()}</div>
          )}
          {params.category === "household-products" && (
            <div>{renderHouseHoldProducts()}</div>
          )}
          {params.category === "general-products" && (
            <div>{renderGeneralProducts()}</div>
          )}
          {params.category === "hardware" && <div>{renderHardWare()}</div>}
          {params.category === "utensils" && <div>{renderUtensils()}</div>}
        </Wrapper>
      </Container>
    </main>
  );
};
export default Page;
