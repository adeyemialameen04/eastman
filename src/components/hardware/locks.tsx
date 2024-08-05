import Image from "next/image";
import { HardwareTable } from "../tables/hardware";
import { generateHardwareColumns } from "@/lib/products";
import PaginatedDisplay from "../tables/hardware-pagination";

export const Locks = ({
  pageData,
  product,
}: {
  pageData: any;
  product: string;
}) => {
  const renderItem = (item: any) => (
    <div className="flex flex-col gap-3">
      <Image height={197} width={650} alt="" src={item.img} />
      <p className="self-center font-semibold">{item.title}</p>
      <div>
        <p className="text-sm font-semibold -mb-3">Carton Packing</p>
        <HardwareTable
          columns={generateHardwareColumns(item.columns)}
          data={item.items}
        />
      </div>
    </div>
  );

  const renderLockHandles = (item: any) => (
    <div className="border-r-[#ddd] border-r py-6 flex flex-col gap-4 ">
      <Image
        src={item.img}
        height={320}
        width={214}
        alt=""
        className="px-2 self-center"
      />
      <div className="text-xs font-bold text-white text-center w-full bg-[#277e78] py-1">
        {item.title}
      </div>
    </div>
  );

  if (product === "door-closer") {
    return <DoorCloser />;
  }

  return (
    <>
      {product === "lock-handles" ? (
        <PaginatedDisplay
          className="grid grid-cols-1 md:grid-cols-2 mt-3 lg:grid-cols-3"
          itemsPerPage={12}
          items={pageData}
          renderItem={renderLockHandles}
        />
      ) : (
        <PaginatedDisplay
          className="flex flex-col gap-5"
          itemsPerPage={
            product === "pad-locks" ? 4 : product === "door-locks" ? 6 : 5
          }
          items={pageData}
          renderItem={renderItem}
        />
      )}
    </>
  );
};

export const DoorCloser = () => {
  const item1tableData = [
    { model: "B2-1", doorWeight: "0-25KG", length: 135, width: 35, height: 55 },
    { model: "B2", doorWeight: "25-45KG", length: 149, width: 37, height: 57 },
    { model: "B3", doorWeight: "45-65KG", length: 169, width: 41, height: 61 },
    { model: "B4", doorWeight: "65-85KG", length: 185, width: 44, height: 67 },
  ];

  return (
    // ITEM 1
    <div className="mt-4 flex flex-col gap-5">
      <div className="flex flex-col gap-5 pb-4 border-b border-b-[#bbbbbb]">
        <div className="flex gap-5 md:gap-7 flex-col md:flex-row">
          <div className="self-center flex flex-col md:self-start">
            <Image src={"/door-closer1.jpg"} height={153} width={224} alt="" />
            <span className="self-center font-semibold text-sm">B SERIES</span>
          </div>
          <ul className="list-disc pl-4 text-xs font-light md:self-center">
            <li>Adopting top quality Aluminum alloy raw material</li>
            <li>Occident style designed, hydraulic damping</li>
            <li>Elegant shape, security and utility</li>
            <li>Series dimension</li>
            <li>Specially applied for commerce and residence</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Product Description</h3>
          <ul className="list-disc pl-4 md:pl-8 text-xs font-light md:self-center">
            <li>B series door closer have three power level: B2、B3、B4</li>
            <li>
              Each power level have optional (w) and (d) in same dimension
            </li>
            <li>
              Dual valve, closing and latching speed controlled by two separate
              regulating valves.
            </li>
            <li>The model with (d) can keep opening while exceed 90°</li>
            <li>
              Universal application, designed for all standard installation, the
              angle of slam the door is different: Least is 115° while most is
              180°
            </li>

            <li>
              Various colors, such as silver gray, golden and bronze-colored.
              (Customized available)
            </li>
          </ul>
        </div>
        <div className="overflow-x-auto">
          <DynamicTable data={item1tableData} />
        </div>
      </div>

      {/*ITEM 2*/}
      <div className="flex flex-col gap-5 pb-4 border-b border-b-[#bbbbbb]">
        <div className="flex gap-5 md:gap-7 flex-col md:flex-row">
          <div className="self-center flex flex-col md:self-start">
            <Image src={"/door-closer2.jpg"} height={153} width={224} alt="" />
            <span className="self-center font-semibold text-sm">BZ SERIES</span>
          </div>
          <ul className="text-xs md:self-center font-semibold">
            <li>Deluxe shape, fluent line, standard full cover</li>
            <li>Reliable quality, lead trends</li>
            <li>
              Design according to America UL Standard and through the
              Certification of America UL.
            </li>
            <li>It is especially for magnificent gates</li>
          </ul>
        </div>
        <div>
          <ol className="list-decimal pl-4 text-xs font-light md:self-center">
            <li>BZ series door closer have two power levels: BZ(2)，BZ(3)</li>
            <li>
              Dual valve,closing and latching speed controlled by two separate
              regulating valves.
            </li>
            <li>
              Universal application, designed for all standard installation.
            </li>
            <li>
              Various colors, such as silver gray, golden and
              bronze-colored.(customization available)
            </li>
          </ol>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <tbody>
              <tr>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  width="14%"
                  align="center"
                >
                  &nbsp;
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  width="14%"
                  align="center"
                >
                  A
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  width="17%"
                  align="center"
                >
                  B
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  width="11%"
                  align="center"
                >
                  C
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  width="15%"
                  align="center"
                >
                  D
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  width="14%"
                  align="center"
                >
                  E
                </td>
                <td
                  className="text-black font-bold border-b border-[#ddd] p-1.5"
                  width="15%"
                  align="center"
                >
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  BZ(2)
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  220
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  205
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  22
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  50
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  48
                </td>
                <td
                  className="text-black font-bold border-b border-[#ddd] p-1.5"
                  align="center"
                >
                  40-65
                </td>
              </tr>
              <tr>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  BZ(3)
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  220
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  205
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  22
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  50
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  48
                </td>
                <td
                  className="text-black font-bold border-b border-[#ddd] p-1.5"
                  align="center"
                >
                  60-85
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/*ITEM 3 */}
      <div className="flex flex-col gap-5 pb-4 border-b border-b-[#bbbbbb]">
        <div className="flex gap-5 md:gap-7 flex-col md:flex-row">
          <div className="self-center flex flex-col md:self-start">
            <Image src={"/door-closer3.jpg"} height={153} width={224} alt="" />
            <span className="self-center font-semibold text-sm">LT SERIES</span>
          </div>
          <div className=" md:self-center">
            <h3 className="text-sm font-semibold mb-2">Feature:</h3>
            <p className="text-xs font-light">Legerity and refinement</p>
            <p className="text-xs font-light mb-1">
              Occident style designed, hydranlic damping designed according to
              America UL specially applied for lightweight door.
            </p>
            <ol className="list-decimal pl-4 text-xs font-light flex flex-col gap-1">
              <li>T series door closer have 2 power level: T(0), T(1)</li>
              <li>unitary valve ,easy to use</li>
              <li>
                two form of installation; paralled arm installation, standard
                installation
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/*ITEM 4 */}
      <div className="flex flex-col gap-5 pb-4 border-b border-b-[#bbbbbb]">
        <div className="flex gap-5 md:gap-7 flex-col md:flex-row">
          <div className="self-center flex flex-col md:self-start">
            <Image src={"/door-closer4.jpg"} height={153} width={224} alt="" />
            <span className="self-center font-semibold text-sm">BYX-204</span>
          </div>
          <ul className="list-disc pl-4 text-xs font-light flex flex-col gap-1">
            <li>Max. door width: 1100 mm</li>
            <li> Max. door weight: 85kgs</li>
            <li> Max. Opening Angle: 115°</li>
            <li> Spring Strength: Size4</li>
            <li> Adjustable latch action: yes</li>
            <li> Adjustable closing action: yes</li>
            <li> Hold -Open: yes</li>
            <li> Applications: Slide Track mounting</li>
            <li> Handing: reversible</li>
            <li> Finish: silver (other&quot;s upon the request)</li>
            <li>According to standard: UL 228&amp;UL10C, BS EN1154, EN 1634</li>
            <li> Body Size: Length 275 mm, Width 63mm, Depth 32 mm</li>
            <li> Mounting Size: 260X20mm</li>
            <li> Life: Tested above 500,000 cycles</li>
            <li> Warranty: 5 years</li>
          </ul>
        </div>
      </div>

      {/*ITEM 5 */}
      <div className="flex flex-col gap-5 pb-4 border-b border-b-[#bbbbbb]">
        <div className="flex gap-5 md:gap-7 flex-col md:flex-row">
          <div className="self-center flex flex-col md:self-start px-9">
            <Image src={"/door-closer5.jpg"} height={162} width={125} alt="" />
            <span className="self-center font-semibold text-sm">BG SERIES</span>
          </div>

          <p className="text-xs font-light self-center">
            European style designed, Easy to adjust in front side
            <br />
            Size1, Size 2, Size 3, Size 4 are provided
            <br />
            in same dimension. Slider is optional
            <br />
            <br />
            Dual valve
            <br />
            Adjustable closing speed
            <br />
            Adjustable latching speed
            <br />
            Universal application, non-handed
            <br />
            Apply for all standard installation.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <tbody>
              <tr>
                <td
                  className="bg-[#277e78] text-white font-bold border-r border-white p-1.5"
                  width="17%"
                  align="center"
                  valign="bottom"
                >
                  Model
                </td>
                <td
                  className="bg-[#277e78] text-white font-bold border-r border-white p-1.5"
                  width="19%"
                  align="center"
                  valign="bottom"
                >
                  Size Number
                </td>
                <td
                  className="bg-[#277e78] text-white font-bold border-r border-white p-1.5"
                  width="18%"
                  align="center"
                >
                  Door
                </td>
                <td
                  className="bg-[#277e78] text-white font-bold border-r border-white p-1.5"
                  width="46%"
                  align="center"
                >
                  Weight Type of Door
                </td>
              </tr>
              <tr>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  BG-2
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  2
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  25-45kg
                </td>
                <td
                  className="text-black font-bold border-b border-[#ddd] p-1.5"
                  rowSpan={3}
                  align="center"
                >
                  Heavy screen doors or medium weight interior door of wood or
                  metal light exterior doors and interior doors of wood or metal
                  Exterior doors and heavy interior doors of wood or metal
                </td>
              </tr>
              <tr>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  BG-3
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  3
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  40-85kg
                </td>
              </tr>
              <tr>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  BG-4
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  4
                </td>
                <td
                  className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
                  align="center"
                >
                  60-85kg
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="max-w-[527px] self-center">
          <h3 className="text-xs font-bold text-center py-2 text-white bg-[#277e78]">
            Above specification applicable for standard/top installation.
          </h3>
          <Image
            src={"/door-closer5.-2jpg.jpg"}
            height={136}
            width={530}
            className="w-full"
            alt=""
          />
          <div className="grid grid-cols-3 text-xs text-center mt-1 border-b border-b-[#ddd] font-semibold">
            <p className="py-2">Parallel arm</p>
            <p className="border-x border-x-[#ddd] py-2">Top Jamb</p>
            <p className="py-2">Standard</p>
          </div>
        </div>
      </div>
      {/* ITEM 6*/}

      <div className="flex flex-col gap-5 pb-4 border-b border-b-[#bbbbbb]">
        <div className="flex gap-5 md:gap-7 flex-col md:flex-row">
          <div className="self-center flex flex-col md:self-start">
            <Image src={"/door-closer6.jpg"} height={145} width={182} alt="" />
            <span className="self-center font-semibold text-sm">
              MAX SERIES
            </span>
          </div>
          <div className=" md:self-center">
            <h3 className="text-sm font-semibold mb-2">Product Features:</h3>
            <ul className="list-disc pl-4 md:pl-8 text-xs font-light flex flex-col gap-1">
              <li> Motor-driving opening and closing</li>
              <li>
                Perfect smooth-running without hearable noise thanks to the
                encoded technology
              </li>
              <li>
                Reliable permanent use, equipped with built-in backup battery;
              </li>
              <li>
                Versatile functions available at any places, support entrance
                guard system, fire-retardant, helpful to disabilities.{" "}
              </li>
              <li>Deluxe model for all frame -doors</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto text-xs">
            <MaxSeriesTable />
          </div>
          <table width="100%" className="border-none text-xs mt-4">
            <tbody>
              <tr>
                <td
                  align="center"
                  className="bg-[#277e78] text-white p-[5px] border-r border-r-white "
                >
                  Standard ●
                </td>
                <td
                  align="center"
                  className="bg-[#277e78] text-white p-[5px] border-r border-r-white "
                >
                  Optional ⊙
                </td>
                <td
                  align="center"
                  className="bg-[#277e78] text-white p-[5px] border-r border-r-white "
                >
                  Without ○
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs font-semibold text-center max-w-[553px] my-3 self-center">
            Standard doors, 1 leaf and 2 leaves, Door leaf width 1200mm(max),
            Door leaf weight 120kg (max)
          </p>
        </div>
      </div>
      {/* ITEM 7 */}
      <div className="flex flex-col gap-5 pb-5 py-1 border-b border-b-[#bbbbbb]">
        <div className="flex gap-5 md:gap-7 flex-col md:flex-row">
          <div className="self-center flex flex-col md:self-start flex-1">
            <Image src={"/door-closer7.jpg"} height={168} width={221} alt="" />
            <span className="self-center font-semibold text-xs">
              BDM9000 SERIES
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold mb-2">Instruction: </h3>
            <ol className="list-decimal pl-4 text-xs font-light flex flex-col gap-1">
              <li>
                Heavy door-lock ware, for all kinds of heavy doors, it has
                cast-iron jar and cast-steel rocker or smithing rocker.{" "}
              </li>
              <li>
                it gets the attestation of American UL 10C 3Hours Fireproofing
                and ANSI first class 2milion times tests for capability.{" "}
              </li>
              <li>
                it can be adjusted for No.1-6 strength BDM9016 for width of door
                800-1500mm and heaviness 15-180kg
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* ITEM 7 */}
      <div className="flex flex-col gap-5 pb-4 border-b border-b-[#bbbbbb]">
        <div className="flex gap-5 md:gap-7 flex-col md:flex-row">
          <div className="self-center flex flex-col md:self-start">
            <Image src={"/door-closer8.jpg"} height={153} width={224} alt="" />
            <span className="self-center font-semibold text-sm">
              BEF-700 SERIES
            </span>
          </div>
          <ul className="list-disc pl-4 text-xs font-light flex flex-col gap-1">
            <li>Max. door width: 1100 mm</li>
            <li> Max. door weight: 85 kgs</li>
            <li> Max. Opening Angle: 180°</li>
            <li> Spring Strength: EN2, EN3, EN4</li>
            <li> Adjustable latch action: yes</li>
            <li> Adjustable closing action: yes</li>
            <li> Applications: Standard Mounting</li>
            <li> Handing: reversible</li>
            <li> Finish: silver (other&quot;s upon the request)</li>
            <li>According to standard: UL 228&amp;UL10C, BS EN1154, EN 1634</li>
            <li> Body Size: Length 220 mm, Width 50 mm, Depth 44 mm</li>
            <li> Mounting Size: 202x19 mm</li>
            <li> Life: Tested above 500,000 cycles</li>
            <li> Warranty: 5 years</li>
            <li> Cross reference: DORMA TS68, GEZE TS 1000</li>
          </ul>
        </div>
      </div>

      {/* ITEM 8 */}
      <div className="flex flex-col gap-5 pb-4 border-b border-b-[#bbbbbb]">
        <div className="flex gap-5 md:gap-7 flex-col md:flex-row">
          <div className="self-center flex flex-col md:self-start">
            <Image src={"/door-closer9.jpg"} height={153} width={224} alt="" />
            <span className="self-center font-semibold text-xs">C SERIES</span>
          </div>
          <ul className="list-disc pl-4 text-xs font-light md:self-center">
            <li> Aluminum alloy die cast, series size</li>
            <li> Beautiful outlook, exquisite and safe design</li>
            <li> Suit for toilet, office, home, public place</li>
            <li> C series 4 types 202,203,204,205 are available</li>
            <li> Two valves to adjust closing speed and latching speed</li>
            <li> Hold open or non-hold open for each model</li>
            <li> Optional color and cover, OEM service is available</li>
          </ul>
        </div>
        <div className="overflow-x-auto">
          <DynamicTable data={item1tableData} />
        </div>
      </div>

      {/* ITEM 9 */}
      <div className="flex flex-col gap-5 pb-4 border-b border-b-[#bbbbbb]">
        <div className="flex gap-5 md:gap-7 flex-col md:flex-row">
          <div className="self-center flex flex-col md:self-start">
            <Image src={"/door-closer10.jpg"} height={153} width={224} alt="" />
            <span className="self-center font-semibold text-xs">M SERIES</span>
          </div>
          <ol className="list-disc pl-4 text-xs font-light md:self-center">
            <li>Beautiful outlook, exquisite and safe design</li>
            <li>Advanced construction, fine characters</li>
            <li>Fine aluminum alloy with imported o-ring</li>
            <li>Suitable for commercial mall, hotel rooms, etc</li>
            <li>
              Multi function arm, suitable for parallel and vertical
              installation
            </li>
            <li>Have 3 types: M501, M502, M803</li>
            <li>Tow valves adjust the closing and latching speed</li>
            <li>Optional color and cover, OEM service is available</li>
          </ol>
        </div>
        <div className="overflow-x-auto">
          <DynamicTable data={item1tableData} />
        </div>
      </div>
    </div>
  );
};

interface TableData {
  model: string;
  doorWeight: string;
  length: number;
  width: number;
  height: number;
}
const DynamicTable = ({ data }: { data: TableData[] }) => {
  return (
    <table className="w-full border-collapse text-xs">
      <thead>
        <tr>
          <th
            className="bg-[#277e78] text-white font-bold border-r border-white p-1.5 w-[20%] text-center"
            rowSpan={2}
            style={{
              width: "20%",
              textAlign: "center",
              verticalAlign: "bottom",
            }}
          >
            Model
          </th>
          <th
            className="bg-[#277e78] text-white font-bold border-r border-white p-1.5"
            rowSpan={2}
            style={{
              width: "23%",
              textAlign: "center",
              verticalAlign: "bottom",
            }}
          >
            Door weight (KG)
          </th>
          <th
            className="bg-[#277e78] text-white font-bold border-r border-white p-1.5"
            colSpan={3}
            align="center"
          >
            Dimensions
          </th>
        </tr>
        <tr>
          <th
            className="bg-[#277e78] text-white font-bold border-r border-white p-1.5"
            style={{
              width: "17%",
              textAlign: "center",
            }}
          >
            Length
          </th>
          <th
            className="bg-[#277e78] text-white font-bold border-r border-white p-1.5"
            style={{
              width: "20%",
              textAlign: "center",
            }}
          >
            Width
          </th>
          <th
            className="bg-[#277e78] text-white font-bold border-r border-white p-1.5"
            style={{
              width: "20%",
              textAlign: "center",
            }}
          >
            Height
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td
              className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
              align="center"
            >
              {row.model}
            </td>
            <td
              className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
              align="center"
            >
              {row.doorWeight}
            </td>
            <td
              className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
              align="center"
            >
              {row.length}
            </td>
            <td
              className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
              align="center"
            >
              {row.width}
            </td>
            <td
              className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
              align="center"
            >
              {row.height}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const MaxSeriesTable = () => {
  return (
    <table className="w-full border-collapse">
      <tbody>
        <tr>
          <td
            className="bg-[#277e78] text-white font-bold border-r border-white p-1.5"
            width="53%"
            align="left"
          >
            Technical data for the drive unit
          </td>
          <td
            className="bg-[#277e78] text-white font-bold border-r border-white p-1.5"
            width="47%"
            align="center"
          >
            Parameter:
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Opening angle
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            60-120°
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Power comsuption Max:
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            45W
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Power supply data
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            220-240V, 110V±10%,both available 50/60Hz
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Power supply for external accessories
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            12V DC, Max.500mA
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Dimensions (mm)
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            480x102x78
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Net weight (kg)
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            8
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Encoded motor
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ●
          </td>
        </tr>
        <tr>
          <td
            className="bg-[#277e78] text-white font-bold border-r border-white p-1.5"
            colSpan={2}
            align="left"
          >
            Adjustable operating curve parameters
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Opening time adjustable
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            3-6s
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Closing time adjustable
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            3-6s
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Hold-Open time adjustable
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            0-60s
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Latching action adjustable
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ○
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Function programs
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            Off-Automatic Open- Extended Hold- Automatic
            <br />
            Close-Off
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Push&amp; go function
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ⊙
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Inteligent anti-overvoltage Protection
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ●
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Inteligent anti-crush device
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ●
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Inteligent anti-overheat Protection
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ●
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Manual access in the event of Power failure :max 0.5KG
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ●
          </td>
        </tr>
        <tr>
          <td
            className="bg-[#277e78] text-white font-bold border-r border-white p-1.5"
            colSpan={2}
            align="left"
          >
            Available connection for the accessories
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Door locking control module
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ●
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Building intercom access control module
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ●
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Remote Control
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ●
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Fire alarm System
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ⊙
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Theft alarm System
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ⊙
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Microwave detector
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ⊙
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Infrared beam detector
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ⊙
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Safety beam detector
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ⊙
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Electromagnetic lock
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ⊙
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Push botton
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ⊙
          </td>
        </tr>
        <tr>
          <td
            className="bg-[#277e78] text-white font-bold border-r border-white p-1.5"
            colSpan={2}
            align="left"
          >
            Installation accessories
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Sliding arm
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ⊙
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Articulating arm
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ●
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Frame-door accessories
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ⊙
          </td>
        </tr>
        <tr>
          <td
            className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
            align="left"
          >
            Non-frame door clips &amp; pivots
          </td>
          <td
            className="text-black font-bold border-b border-[#ddd] p-1.5"
            align="center"
          >
            ⊙
          </td>
        </tr>
      </tbody>
    </table>
  );
};
