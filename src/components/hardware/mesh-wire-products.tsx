import Image from "next/image";
import React from "react";
import {
  BarbedTapeTable,
  BarbedWireTable,
  ChainLinkFenceTable,
} from "./chain-link-table";

const MeshWireProducts = () => {
  return (
    <div className="mt-5">
      <div className="py-1 font-semibold text-sm text-white bg-[#277e78] pl-2">
        Common Wire Nail
      </div>
      <div className="md:px-4 mt-3">
        <Image src={"/welded-wire-mesh.jpg"} alt="" height={242} width={666} />
      </div>
      <div className="font-light text-xs mt-1">
        <span className="font-bold text-sm block mb-1">Material:</span>
        Stainless Steel Wire, Galvanized Steel wire, Plain Steel wire, PVC
        Coated galvanized steel wire
      </div>
      <div className="mt-3">
        <h3 className="font-semibold text-sm">Assortments Available : </h3>
        <ul className="pl-4">
          <li className="list-disc text-xs font-light">
            Electro Galvanized before or after welding
          </li>
          <li className="list-disc text-xs font-light">
            Hot dipped galvanized before or after welding
          </li>{" "}
          <li className="list-disc text-xs font-light">
            PVC Coated after Welding
          </li>
        </ul>
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex">
          <div className="flex-1">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="border-b border-[#ddd] py-1 text-xs font-bold"
              >
                <h3>Wire Diameter : BWG12-BWG24</h3>
              </div>
            ))}
          </div>
          <div className="flex-1 border-l border-[#ddd]">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="border-b border-[#ddd] py-1 pl-2 text-xs font-bold"
              >
                <p>Opening : 1/4&quot; to 4&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <div className="py-1 font-semibold text-sm text-white bg-[#277e78] pl-2">
          Chain Link FEnce
        </div>
        <Image
          height={183}
          width={689}
          src={"/hexagonal-wire-mesh.jpg"}
          alt=""
          className="w-full"
        />
        <p className="text-xs font-light my-3">
          Electro Chain Link Fence with 7-15G per Square Meter Zinc Coating; Hot
          Dipped Galvanized Chain Link Fence with 35-400G per Square Meter Zinc
          Coating; PVC Coated Chain Link Fence (Green, Black, etc.)
        </p>
        <div className="overflow-x-auto">
          <ChainLinkFenceTable />
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <div className="py-1 font-semibold text-sm text-white bg-[#277e78] pl-2">
          Barbed Wire
        </div>
        <Image
          height={183}
          width={689}
          src={"/new-barded-wire1.jpg"}
          alt=""
          className="w-full"
        />
        <div className="grid-cols-1 grid md:grid-cols-2">
          <div className="flex flex-col justify-between gap-3 my-4">
            <p className="text-xs font-light">
              <span className="font-bold block">Material</span>
              Plain steel wire, galvanized steel wire, PVC coated wire, Pe
              Coated wire
            </p>
            <div>
              <p className="text-xs font-light">
                <span className="font-bold pr-1">Wire Diameter:</span>
                SWG10-18
              </p>
              <p className="text-xs font-light">
                <span className="font-bold pr-1">Barb Distance:</span>
                75-150mm
              </p>
              <p className="text-xs font-light">
                <span className="font-bold pr-1">Barb Length:</span>
                75-150mm
              </p>
              <p className="text-xs font-light">
                Thickness of PVC or PE coating : 0.4-0.6mm
              </p>
            </div>
          </div>
          <Image
            height={188}
            width={278}
            src={"/new-barded-wire2.jpg"}
            alt=""
            className="w-full"
          />
        </div>
        <div className="overflow-x-scroll my-4">
          <BarbedWireTable />
        </div>
      </div>
      <div className="mt-5">
        <div className="py-1 font-semibold text-sm text-white bg-[#277e78] pl-2 mb-4">
          Hot Dip Galvanized Wire / Electro Galvanized Wire
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pb-2 gap-3 md:gap-0 md:border-b border-b-[#ddd]">
          <Image
            src={"/hot-dia1.jpg"}
            height={197}
            className="md:px-5 md:border-r border-r[#ddd] w-full"
            width={284}
            alt=""
          />
          <Image
            src={"/hot-dia1.jpg"}
            height={197}
            className="md:px-5 w-full"
            width={284}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-semibold text-sm">
              Electro Galvanized Iron Wire Sizes:
            </h3>
            <p className="text-xs font-light mt-2">
              Electro galvanized iron wire ranging from BWG8# to BWG16# is the
              mostly used for customers. We also offer thinner galvanized wire
              down to BWG5# or up to BWG28# upon customers specific order.
              Single coil package for electro galvanized iron wire can be as
              small as 10 kg and up to maximum 1000 kg per coil.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-sm">
              Electro Galvanized Iron Wire Processing & Features:
            </h3>
            <p className="text-xs font-light mt-2">
              This kind of galvanized wire is made with choice mild steel,
              through wire drawing, wire galvanizing and other processes.
              Electro galvanized iron wire has the characteristics of thick zinc
              coating, good corrosion resistance, firm zinc coating, etc.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-sm">Forms of Supply:</h3>
            <p className="text-xs font-light mt-2">
              Electro galvanized iron wire can be supplied in the form of coil
              wire, spool wire or further processed into straightened cut wire
              or U type wire.
            </p>
          </div>
          <div>
            <p className="text-xs font-light mt-1">
              Electro galvanized iron wire applications:{" "}
            </p>
            <p className="text-xs font-light mt-1">
              Electro galvanized iron wire is mainly used in construction,
              express way fencing, binding of flowers and wire mesh weaving.
            </p>
            <p className="text-xs font-light mt-1">
              Electro galvanized iron wire, electro galvanized steel wire,
              electro galvanized wire.
            </p>
          </div>
          <div>
            <p className="text-xs font-light mt-1">BWG6-22 5.0MM-0.8MM.</p>
            <p className="text-xs font-light mt-1">Zinc coat: 10-25g/m2.</p>
            <p className="text-xs font-light mt-1">
              Tensile strength: 40-85kg/mm2.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="py-1 font-semibold text-sm text-white bg-[#277e78] pl-2 mb-4">
          Black Iron Wire
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pb-2 gap-3 md:gap-0 md:border-b border-b-[#ddd]">
          <Image
            src={"/black-iron1.jpg"}
            height={197}
            className="md:px-5 md:border-r border-r[#ddd] w-full"
            width={284}
            alt=""
          />
          <Image
            src={"/black-iron2.jpg"}
            height={197}
            className="md:px-5 w-full"
            width={284}
            alt=""
          />
        </div>
        <p className="text-xs font-light mt-1">
          We produce good quality black iron wire for customers.
          <br />
          Black iron wire, also called black wire, comes in the form of coil
          wire or cut wire. Mostly used in construction or daily use as binding
          material.
        </p>
      </div>
      <div className="mt-5">
        <div className="py-1 font-semibold text-sm text-white bg-[#277e78] pl-2 mb-4">
          Baling Wire
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-2">
          <Image
            src={"/baling-wire.jpg"}
            alt=""
            height={217}
            width={291}
            className=""
          />
          <div className="md:self-center">
            <h3 className="text-sm font-semibold">Single Loop Bale Ties</h3>
            <p className="text-xs font-light flex items-center gap-1">
              <span className="font-semibold">Wire Gauge:</span>
              11G to 15 G.
            </p>
            <p className="text-xs font-light flex items-center gap-1">
              <span className="font-semibold">European Gauge:</span>
              3.0mm or 3.2mm
            </p>{" "}
            <p className="text-xs font-light flex items-center gap-1">
              <span className="font-semibold">Standard Length:</span>
              7ft to 24ft (custom lengths available).
            </p>
            <p className="text-xs font-light flex items-center gap-1">
              <span className="font-semibold">Standard Bundle</span>
              125 count or 250 count (custom counts available).
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <div className="py-1 font-semibold text-sm text-white bg-[#277e78] pl-2">
          Razor Wire
        </div>
        <Image
          height={194}
          width={690}
          src={"/razor-wire.jpg"}
          alt=""
          className="w-full md:px-1"
        />
      </div>
      <div className="overflow-x-auto mt-4">
        <BarbedTapeTable />
      </div>
      <div className="mt-4 flex flex-col">
        <div className="py-1 font-semibold text-sm text-white bg-[#277e78] pl-2">
          Window Screen
        </div>
        <div className="mt-1">
          <Image
            src={"/window-screen.jpg"}
            width={694}
            height={138}
            alt=""
            className="w-full"
          />
          <Image
            src={"/window-screen2.jpg"}
            width={694}
            height={138}
            alt=""
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xs font-light">
            <span className="block font-semibold text-base mb-1">
              Material :
            </span>
            Galvanized steel wire, stainless steel wire, enamelled iron wire,
            aluminum wire, fiber glass wire, plastic wire, PVC wire etc.
          </p>
          <p className="text-xs font-light">
            <span className="block font-semibold text-base mb-1">Mesh : </span>
            14 x 14, 16x14, 16x16, 18x16, 18x18, 18x14
          </p>
          <p className="text-xs font-light">
            <span className="block font-semibold text-base mb-1">
              Wire Diameter
            </span>
            BWG31 or BWG 32
          </p>
          <p className="text-xs font-light">
            <span className="block font-semibold text-base mb-1">Width :</span>
            3&apos;,4&quot;, 1.2m, 1.5m
          </p>
          <p className="text-xs font-light">
            <span className="block font-semibold text-base mb-1">Length :</span>
            25m, 30m, 30.5m
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeshWireProducts;
