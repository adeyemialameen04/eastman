import PvcTrunkingDisplay from "@/components/tables/hardware-pagination";
import Image from "next/image";
import { ElectricMotorsTable } from "./electric-motors-table";
import PaginatedDisplay from "@/components/tables/hardware-pagination";

const tablesData = [
  {
    headers: [
      "Model",
      "Specification",
      "Cert.",
      "Packing",
      "N.W.",
      "G.W.",
      "Meas",
      "ctns qty",
      "Remark",
    ],
    rows: [
      [
        { content: "Y112M-4", rowSpan: 9 },
        { content: "Y series single phase motor" },
        { content: "Rohs / C E", rowSpan: 9 },
        { content: "Standard Export Wooden Cases", rowSpan: 9 },
        { content: "40 KGS", rowSpan: 9 },
        { content: "46 KGS", rowSpan: 9 },
        { content: "47* 37* 29 (CM)", rowSpan: 9 },
        { content: "550 PCS", rowSpan: 9 },
        {
          content: "100% copper wire, silver grey colour, 2 year guarantee,",
          rowSpan: 9,
        },
      ],
      [{ content: "Poles:4" }],
      [{ content: "Rated Output Power: 5.5HP" }],
      [{ content: "Volt./Frequency: 380 V/ 50Hz" }],
      [{ content: "No-loaf Speed: 1440rpm" }],
      [{ content: "S6 Class" }],
      [{ content: "Installation: B3" }],
      [{ content: "Protection Class:IP44" }],
      [{ content: "Insulation Class: Class B" }],
    ],
  },
  {
    headers: [
      "Model",
      "Specification",
      "Cert.",
      "Packing",
      "N.W.",
      "G.W.",
      "Meas",
      "ctns qty",
      "Remark",
    ],
    rows: [
      [
        { content: "Y112M-4", rowSpan: 9 },
        { content: "Y series single phase motor" },
        { content: "Rohs / C E", rowSpan: 9 },
        { content: "Standard Export Wooden Cases", rowSpan: 9 },
        { content: "40 KGS", rowSpan: 9 },
        { content: "46 KGS", rowSpan: 9 },
        { content: "47* 37* 29 (CM)", rowSpan: 9 },
        { content: "550 PCS", rowSpan: 9 },
        {
          content: "100% copper wire, silver grey colour, 2 year guarantee,",
          rowSpan: 9,
        },
      ],
      [{ content: "Poles:4" }],
      [{ content: "Rated Output Power: 5.5HP" }],
      [{ content: "Volt./Frequency: 380 V/ 50Hz" }],
      [{ content: "No-loaf Speed: 1440rpm" }],
      [{ content: "S6 Class" }],
      [{ content: "Installation: B3" }],
      [{ content: "Protection Class:IP44" }],
      [{ content: "Insulation Class: Class B" }],
    ],
  },
  {
    headers: [
      "Model",
      "Specification",
      "Cert.",
      "Packing",
      "N.W.",
      "G.W.",
      "Meas",
      "ctns qty",
      "Remark",
    ],
    rows: [
      [
        { content: "Y112M-4", rowSpan: 9 },
        { content: "Y series single phase motor" },
        { content: "Rohs / C E", rowSpan: 9 },
        { content: "Standard Export Wooden Cases", rowSpan: 9 },
        { content: "40 KGS", rowSpan: 9 },
        { content: "46 KGS", rowSpan: 9 },
        { content: "47* 37* 29 (CM)", rowSpan: 9 },
        { content: "550 PCS", rowSpan: 9 },
        {
          content: "100% copper wire, silver grey colour, 2 year guarantee,",
          rowSpan: 9,
        },
      ],
      [{ content: "Poles:4" }],
      [{ content: "Rated Output Power: 5.5HP" }],
      [{ content: "Volt./Frequency: 380 V/ 50Hz" }],
      [{ content: "No-loaf Speed: 1440rpm" }],
      [{ content: "S6 Class" }],
      [{ content: "Installation: B3" }],
      [{ content: "Protection Class:IP44" }],
      [{ content: "Insulation Class: Class B" }],
    ],
  },
];

export const TreadleWaterPump = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-semibold pl-2 py-1 bg-[#277e78] text-white">
            Introduction
          </h3>
          <p className="text-xs font-light mt-1">
            Treadle water pump can do most of the work of a motorized pump, but
            costs considerably less to purchase. Because it needs no fossil
            fuel, it also costs less to operate. All the pond, lake and
            groundwater can be the water source. It can increase the area of
            water supplying by lengthening the intake pipe and discharge pipe.
            Properly adjusted and maintained, it can be operated several hours a
            day without tiring the users.
          </p>
          <h3 className="text-sm font-semibold pl-2 mt-5 py-1 bg-[#277e78] text-white">
            Features
          </h3>
          <p className="text-xs font-light mt-1">
            <span className="font-semibold text-xs block">Pump Cylinders</span>{" "}
            Each treadle pump has two cylinders which are made of engineering
            plastic. The diameter of a cylinder is 100.5mm and the height is
            280mm. Treadle water pump can do most of the work of a motorized
            pump, but costs considerably less to purchase. Because it needs no
            fossil fuel, it also costs less to operate. All the pond, lake and
            groundwater can be the water source. It can increase the area of
            water supplying by lengthening the intake pipe and discharge pipe.
            Properly adjusted and maintained, it can be operated several hours a
            day without tiring the users.
          </p>
        </div>
        <Image
          src={"/pump-1.jpg"}
          height={290}
          width={291}
          alt=""
          className="self-center md:self-start h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <p className="text-xs font-light">
          <span className="font-semibold mb-1 block text-sm">
            Non-Return Valves
          </span>
          The pump has two pairs of non-return valves, one pairof them are
          inside of the pump and the other pair of them are outside of the pump
          . The valve type is flapper type. It is made of circular rubber with
          the diameter of 90mm and the thickness of 2.5mm.
        </p>
        <p className="text-xs font-light">
          <span className="font-semibold mb-1 block text-sm">Pistons</span>
          The piston assembly constitutes the piston rod (25mm x 6mm) and rubber
          cups with the thickness of 5.5mm.
        </p>
        <p className="text-xs font-light">
          <span className="font-semibold mb-1 block text-sm">Treadles</span>
          The treadles are made of channel steel materials with the lengh of
          1000mm. The hinge is at the end.
        </p>
        <p className="text-xs font-light">
          <span className="font-semibold mb-1 block text-sm">
            Treadles Support
          </span>
          The treadle support ensures that the pump is portable and supports all
          other components of the pump. It is made of 50mm x 30mm square steel
          tube.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-semibold pl-2 py-1 bg-[#277e78] text-white">
          Advantages
        </h3>
        <ul className="pl-6 mt-4">
          <li className="text-xs font-light list-disc">
            It frees the farmer from the limitations of rain fed farming and
            raises his capacity to grow crops in both dry and rainy season.
          </li>
          <li className="text-xs font-light list-disc">
            Land augmenting: With the use of Treadle Pump, the Farmers can
            cultivate all the year round thus increasing their cropping
            intensity, and never leave their land fallow.
          </li>
          <li className="text-xs font-light list-disc">
            <span className="font-semibold">Productive : </span>he Treadle Pump
            is capable of delivering 7000 liters of water per hour from surface
            water while being operated by a single person without tiring the
            user. As with any other suction pump, the pump is capable of working
            up to a maximum depth of 8 meters. However, operation beyond 7
            meters is not recommended to preserve the integrity of the rubber
            components.
          </li>
          <li className="text-xs font-light list-disc">
            Change in cropping pattern : Treadle Pump technology enables the
            farmers to grow crops they were not able to grow earlier.
          </li>
        </ul>
        <div className="grid-cols-1 grid md:grid-cols-2 mt-5 gap-5">
          <div className="flex flex-col justify-between">
            <p className="text-xs font-light">
              A series of new advantages is brought with the using of plastic
              pump body:
            </p>
            <ul className="pl-7 text-xs font-light list-disc">
              <li>Light weight</li>
              <li>Small friction, low wear and tear</li>
              <li>High efficient</li>
              <li>Good seal</li>
              <li>Rustless</li>
              <li>Corrosion-resistantcint</li>
              <li>Low price</li>
              <li>New engineering plastics, rugged</li>
            </ul>
            <div className="mt-7">
              <h3 className="text-sm font-semibold pl-2 py-1 bg-[#277e78] text-white">
                Fitting instruction and Maintenance
              </h3>
              <h3 className="text-sm font-semibold pl-2 py-1 mb-5">
                Cylinder Assembly
              </h3>

              <ol className="pl-7 text-xs font-light list-decimal">
                <li>Light weight</li>
                <li>Small friction, low wear and tear</li>
                <li>High efficient</li>
                <li>Good seal</li>
                <li>Rustless</li>
                <li>Corrosion-resistantcint</li>
                <li>Low price</li>
                <li>New engineering plastics, rugged</li>
              </ol>
            </div>
          </div>
          <Image
            src={"/pump-2.jpg"}
            height={393}
            width={286}
            alt=""
            className="self-center md:self-start h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <p className="text-xs font-light">
            Each piston has two rubber cups, one faces to the bottom of the
            cylinder and the other to the top. The pistons can be removed from
            the pump without detaching the rope which connects them together.
            When replacing the pistons, it is important to take care that the
            rubber cups not be damaged. And it is important to keep sealed.
          </p>

          <p className="text-xs font-light">
            <span className="font-semibold mb-1 block text-sm">
              Assembly of Treadles
            </span>
            Connect the end which has hooks with the piston rod, and the other
            end with the treadles’ support. Put the dowel into the shaft, when
            you fixed the treadle.
          </p>
          <p className="text-xs font-light">
            <span className="font-semibold mb-1 block text-sm">
              Pump storage and care of Hoses
            </span>
            After irrigation is finished, roll up the hose properly in the field
            taking care not to drag it over sharp objects, and then carry it to
            the homestead. On no account should the hose be loosely folded and
            dragged over the ground from the field to the homestead, as this
            will decrease its endurance.
            <br />
            <br />
            Store the pump and its fittings in a safe location. Pay particular
            attention to prevent damage to the hoses and rubber components. Seal
            the pump intake and discharge pipes to stop rodents gaining access
            to the flap valves in the valve vox. When carrying or storing the
            pump, take care not to dent the cylinders. If this happens the
            piston will not move easily within the cylinders and water will leak
            between the rubber piston seals and the cylinder wall, making the
            pump less effective, also, try not to bend the piston rods.
          </p>
          <p className="text-xs font-light">
            <span className="font-semibold mb-1 block text-sm">
              Replacement of Worn Piston Seals
            </span>
            After a long period of use, the Rubber Seals on the pistons will
            wear down and water leaks past the piston, which reduces the
            performance of the pump.
            <br />
            <br />
            An obvious sign is that the piston is loose in the Cylinder. Untie
            the connecting Rope and remove the piston from the Cylinder. It may
            be possible to increase the diameter of the Rubber Seals by
            tightening the Clamping Nut on the bottom of the piston. If this
            does not expand them sufficiently, replace them. Two spare rubber
            seals are supplied with the pump. If proper replacement Seals cannot
            be obtained, rings of rubber can be cut from old gumboots or the
            side walls of an old tyre and clamped between the three metal piston
            disks.
          </p>
          <p className="text-xs font-light">
            <span className="font-semibold mb-1 block text-sm">
              Debris in the Valve Box
            </span>
            Mud or vegetation may be accidentally drawn into the Valve Box of
            the Pump through the Suction Pipe if no mesh strainer is used. To
            remove such debris, lay the Pump and remove the ten nuts that fix
            the baseboard to the bottom of the Pump.
            <br />
            <br />
            Take great care not to lose any of the nuts or washers. With the
            nuts and washers off, remove the Baseboard and Rubber Gasket so give
            access to the Valve Box. Remove any debris and at the same time
            check the condition of the Rubber Flap Valves, which can be easily
            seen. When the Valve Box is clean replace the Rubber Gasket, Wooden
            Baseboard and Washers, and retighten the ten nuts.
          </p>
        </div>
      </div>
    </div>
  );
};

export const ElectricMotorsWatePumps = ({ pageData }: { pageData: any }) => {
  const renderItem = (item: any, index: number) => (
    <div>
      {index === 0 ? (
        <TreadleWaterPump />
      ) : (
        <div className="flex flex-col gap-3">
          <Image
            src={item.img}
            className="self-center"
            alt=""
            height={274}
            width={294}
          />
          {item.tablesData.map((table: any, tableIndex: number) => (
            <div className="overflow-x-auto" key={tableIndex}>
              <ElectricMotorsTable data={table} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
  return (
    <div>
      <PaginatedDisplay items={pageData} renderItem={renderItem} />
    </div>
  );
};
