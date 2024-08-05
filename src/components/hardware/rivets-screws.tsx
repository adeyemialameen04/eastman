import Image from "next/image";

export const RivetsAndScrews = () => {
  return (
    <div className="text-xs mx-auto list-decimal mt-5">
      <h2 className="text-white text-base bg-[#277E78] p-[5px]">
        Open End Blind Rivets:
      </h2>
      <p className="pt-4">
        Material: Aluminum Rivet / Steel Mandrel, Steel Rivet / Steel Mandrel
        Stainless Steel Rivet/ Steel Mandrel, Stainless Steel Rivet/ Stainless
        Steel Mandrel
      </p>
      <div>
        <p className="text-xl pt-5 pb-1">Product List</p>
        <div className="flex justify-around gap-4 pb-4 flex-wrap">
          <Image src={"/rivet-series1.jpg"} alt="" width={180} height={180} />
          <Image src={"/rivet-series1.jpg"} alt="" width={180} height={180} />
          <Image src={"/rivet-series1.jpg"} alt="" width={180} height={180} />
        </div>
        <p className="text-center font-bold">
          D = Rivet Diameter, L = Rivet Length, H = Head Diameter, E = Head
          Thickness, W= Mandrel Diameter, P = Mandrel Protrusion.
        </p>
      </div>
      <div className="overflow-x-auto pt-5">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#277E78] text-white">
              <th className="border border-gray-300 px-2 py-1" colSpan={2}>
                Rivet Dia
              </th>
              <th className="border border-gray-300 px-2 py-1" colSpan={2}>
                Rivet Length
              </th>
              <th className="border border-gray-300 px-2 py-1" colSpan={2}>
                Hole Size
              </th>
              <th className="border border-gray-300 px-2 py-1">W</th>
              <th className="border border-gray-300 px-2 py-1">P</th>
              <th className="border border-gray-300 px-2 py-1" colSpan={2}>
                Dome Head
              </th>
              <th className="border border-gray-300 px-2 py-1" colSpan={2}>
                Large Head
              </th>
              <th className="border border-gray-300 px-2 py-1" colSpan={2}>
                CSK Head
              </th>
            </tr>
            <tr className="">
              <th className="border border-gray-300 px-2 py-1" colSpan={2}>
                D
              </th>
              <th className="border border-gray-300 px-2 py-1">min</th>
              <th className="border border-gray-300 px-2 py-1">max</th>
              <th className="border border-gray-300 px-2 py-1">min</th>
              <th className="border border-gray-300 px-2 py-1">max</th>
              <th className="border border-gray-300 px-2 py-1"></th>
              <th className="border border-gray-300 px-2 py-1"></th>
              <th className="border border-gray-300 px-2 py-1">H</th>
              <th className="border border-gray-300 px-2 py-1">E</th>
              <th className="border border-gray-300 px-2 py-1">H</th>
              <th className="border border-gray-300 px-2 py-1">E</th>
              <th className="border border-gray-300 px-2 py-1">H</th>
              <th className="border border-gray-300 px-2 py-1">E</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-2 py-1">2.4</td>
              <td className="border border-gray-300 px-2 py-1">4.8</td>
              <td className="border border-gray-300 px-2 py-1">10.0</td>
              <td className="border border-gray-300 px-2 py-1">2.46</td>
              <td className="border border-gray-300 px-2 py-1">2.54</td>
              <td className="border border-gray-300 px-2 py-1">1.45</td>
              <td className="border border-gray-300 px-2 py-1">26.00</td>
              <td className="border border-gray-300 px-2 py-1">4.77</td>
              <td className="border border-gray-300 px-2 py-1">0.81</td>
              <td className="border border-gray-300 px-2 py-1">7.14</td>
              <td className="border border-gray-300 px-2 py-1">1.02</td>
              <td className="border border-gray-300 px-2 py-1">4.42</td>
              <td className="border border-gray-300 px-2 py-1">0.69</td>
              <td className="border border-gray-300 px-2 py-1">0.69</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">2.4</td>
              <td className="border border-gray-300 px-2 py-1">4.8</td>
              <td className="border border-gray-300 px-2 py-1">10.0</td>
              <td className="border border-gray-300 px-2 py-1">2.46</td>
              <td className="border border-gray-300 px-2 py-1">2.54</td>
              <td className="border border-gray-300 px-2 py-1">1.45</td>
              <td className="border border-gray-300 px-2 py-1">26.00</td>
              <td className="border border-gray-300 px-2 py-1">4.77</td>
              <td className="border border-gray-300 px-2 py-1">0.81</td>
              <td className="border border-gray-300 px-2 py-1">7.14</td>
              <td className="border border-gray-300 px-2 py-1">1.02</td>
              <td className="border border-gray-300 px-2 py-1">4.42</td>
              <td className="border border-gray-300 px-2 py-1">0.69</td>
              <td className="border border-gray-300 px-2 py-1">0.69</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">2.4</td>
              <td className="border border-gray-300 px-2 py-1">4.8</td>
              <td className="border border-gray-300 px-2 py-1">10.0</td>
              <td className="border border-gray-300 px-2 py-1">2.46</td>
              <td className="border border-gray-300 px-2 py-1">2.54</td>
              <td className="border border-gray-300 px-2 py-1">1.45</td>
              <td className="border border-gray-300 px-2 py-1">26.00</td>
              <td className="border border-gray-300 px-2 py-1">4.77</td>
              <td className="border border-gray-300 px-2 py-1">0.81</td>
              <td className="border border-gray-300 px-2 py-1">7.14</td>
              <td className="border border-gray-300 px-2 py-1">1.02</td>
              <td className="border border-gray-300 px-2 py-1">4.42</td>
              <td className="border border-gray-300 px-2 py-1">0.69</td>
              <td className="border border-gray-300 px-2 py-1">0.69</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">2.4</td>
              <td className="border border-gray-300 px-2 py-1">4.8</td>
              <td className="border border-gray-300 px-2 py-1">10.0</td>
              <td className="border border-gray-300 px-2 py-1">2.46</td>
              <td className="border border-gray-300 px-2 py-1">2.54</td>
              <td className="border border-gray-300 px-2 py-1">1.45</td>
              <td className="border border-gray-300 px-2 py-1">26.00</td>
              <td className="border border-gray-300 px-2 py-1">4.77</td>
              <td className="border border-gray-300 px-2 py-1">0.81</td>
              <td className="border border-gray-300 px-2 py-1">7.14</td>
              <td className="border border-gray-300 px-2 py-1">1.02</td>
              <td className="border border-gray-300 px-2 py-1">4.42</td>
              <td className="border border-gray-300 px-2 py-1">0.69</td>
              <td className="border border-gray-300 px-2 py-1">0.69</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">2.4</td>
              <td className="border border-gray-300 px-2 py-1">4.8</td>
              <td className="border border-gray-300 px-2 py-1">10.0</td>
              <td className="border border-gray-300 px-2 py-1">2.46</td>
              <td className="border border-gray-300 px-2 py-1">2.54</td>
              <td className="border border-gray-300 px-2 py-1">1.45</td>
              <td className="border border-gray-300 px-2 py-1">26.00</td>
              <td className="border border-gray-300 px-2 py-1">4.77</td>
              <td className="border border-gray-300 px-2 py-1">0.81</td>
              <td className="border border-gray-300 px-2 py-1">7.14</td>
              <td className="border border-gray-300 px-2 py-1">1.02</td>
              <td className="border border-gray-300 px-2 py-1">4.42</td>
              <td className="border border-gray-300 px-2 py-1"></td>
              <td className="border border-gray-300 px-2 py-1"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="py-5">
        <h3 className="text-xl pb-1">Screws Series</h3>
        <p className="pb-3">Self-tapping & Self-drilling Screws</p>
        <ol className="list-decimal pl-4 pb-5 flex flex-col gap-1">
          <li>
            <span className="font-bold">Material: </span>C1022 (Carbon steel)
          </li>
          <li>
            <span className="font-bold">Head Type: </span>Countersunk Head, Pan
            Head, Wafer Head, Hex Head
          </li>
          <li>
            <span className="font-bold">Diameter: </span>3.5mm (#6), 3.9 mm
            (#7), 4.2 mm (#8), 5.5mm (#12), 6.3 mm (#14)
          </li>
          <li>
            <span className="font-bold">Length: </span> 16mm (5/8’’) to 125mm
            (5’’)
          </li>
          <li>
            <span className="font-bold">Finish: </span> Zinc plated (white,
            yellow, blue)
          </li>
        </ol>
        <div className="flex gap-4 justify-around flex-wrap">
          <Image src={"/rivet-series1.jpg"} alt="" width={200} height={200} />
          <Image src={"/rivet-series1.jpg"} alt="" width={200} height={200} />
        </div>
      </div>
      <hr />
      <div className="py-5">
        <h3 className="text-xl pb-1">Drywall Screws</h3>
        <ol className="list-decimal pl-4 pb-5 flex flex-col gap-1">
          <li>
            <span className="font-bold">Material: </span>C1022, Thread: Fine/
            coarse,
          </li>
          <li>
            <span className="font-bold">Diameter: </span>33.5 mm (6#), 3.9 mm
            (7#), 4.2 mm(8#), 4.8 mm (10#)
          </li>
          <li>
            <span className="font-bold">Length: </span>16mm to 152mm, (5/8 – 6
            inches)
          </li>
          <li>
            <span className="font-bold">Finish: </span>Black/ grey phosphate,
            zinc plated,
          </li>
          <li>
            <span className="font-bold">Harden: </span>center 289-449 HV,
            surface 560-653 HV
          </li>
        </ol>
        <div className="flex gap-4 justify-around">
          <Image src={"/rivet-series1.jpg"} alt="" width={250} height={180} />
          <Image src={"/rivet-series1.jpg"} alt="" width={250} height={180} />
        </div>
      </div>
      <hr />
      <div className="py-5">
        <h3 className="text-xl pb-1">Concrete Screws s</h3>
        <ol className="list-decimal pl-4 pb-5 flex flex-col gap-1">
          <li>
            <span className="font-bold">Material: </span>45# steel
          </li>
          <li>
            <span className="font-bold">Head Type: </span>Countersunk Head, Torx
            3 Head
          </li>
          <li>
            <span className="font-bold">Diameter: </span>7.5 mm
          </li>
          <li>
            <span className="font-bold">Length: </span>75 mm to 202mm
          </li>
          <li>
            <span className="font-bold">Finish: </span>Zinc plated (white,
            yellow, blue)
          </li>
        </ol>
        <div className="flex gap-4 justify-around flex-wrap">
          <Image src={"/rivet-series1.jpg"} alt="" width={250} height={180} />
          <Image src={"/rivet-series1.jpg"} alt="" width={250} height={180} />
        </div>
      </div>
    </div>
  );
};
