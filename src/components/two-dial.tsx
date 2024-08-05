import Image from "next/image";
import WeighTable from "./weigh-table";
import { TwoDialsPlatformScaleSchema } from "@/types/products/weigh";

const TwoDialsPlatformScale = ({
  data,
}: {
  data: TwoDialsPlatformScaleSchema;
}) => {
  return (
    <div className="max-w-4xl p-4">
      <div className="bg-[#277e78] text-white p-2 text-center mb-4">
        <h1 className="text-sm font-bold">{data.productName}</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-4 !text-xs">
        <div className="md:w-1/2 px-8">
          <Image
            src={data.img}
            alt={data.productName}
            width={234}
            height={475}
            layout="responsive"
            className="h-fit object-contain"
          />
          <p className="text-center mt-2 font-bold">{data.modelNumber}</p>
        </div>

        <div className="md:w-1/2">
          <h2 className="font-bold mb-2">Each Scale is Made up of 2 Parts:</h2>
          <p>
            Dial-Pole & Platform Packed Separately{" "}
            {data.components[0].capacityRange}
          </p>
          <p>Meas.: {data.components[0].measurements}</p>
          <p>
            N.W.: {data.components[0].weight.netWeight} G.W.:
            {data.components[0].weight.grossWeight}
          </p>

          <h2 className="font-bold mt-4 mb-2">
            Each Platform In Single Packing.
          </h2>
          <p>Meas.: {data.components[1].measurements}</p>
          <p>
            N.W.: {data.components[1].weight.netWeight} G.W.:
            {data.components[1].weight.grossWeight}
          </p>
          <p>
            {Object.entries(data.containerCapacity)
              .map(([key, value]) => `${key} container can hold ${value} Pcs`)
              .join("\n")}
          </p>

          <h2 className="font-bold mt-4 mb-2">
            Each Scale is Made up of 2 Parts:
          </h2>
          <p>Dial-Pole & Platform Packed Separately</p>

          <h2 className="font-bold mt-4 mb-2">FD-150kg:</h2>
          <p>{data.FD150kg.dialPoles.quantity} Dial Poles in One Packing.</p>
          <p>Meas.: {data.FD150kg.dialPoles.measurements}</p>
          <p>
            N.W.:{data.FD150kg.dialPoles.weight.netWeight} G.W.:
            {data.FD150kg.dialPoles.weight.grossWeight}
          </p>

          <h2 className="font-bold mt-4 mb-2">
            Each Platform in Single Packing.
          </h2>
          <p>
            Meas.:{data.FD150kg.platform.measurements} N.W.:{" "}
            {data.FD150kg.platform.weight.netWeight} G.W.:
            {data.FD150kg.platform.weight.grossWeight}
          </p>
          <p>
            {Object.entries(data.FD150kg.containerCapacity)
              .map(([key, value]) => `${key} container can hold ${value} PCS`)
              .join("\n")}
          </p>
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="bg-[#277e78] text-white text-xs">
              <th className="border border-[#ddd] p-2">Model</th>
              {/* {data.specifications[0].maxCapacity.map((_, index) => ( */}
              <th
                // key={index}
                className="border border-[#ddd] p-2"
                colSpan={6}
              >
                {data.specifications[0].model}
              </th>
              {/* ))} */}
            </tr>
          </thead>
          <tbody className="text-xs font-bold">
            <tr>
              <td className="border border-[#ddd] bg-[#277e78] text-white p-2">
                Max Capacity
              </td>
              {data.specifications[0].maxCapacity.map((cap, index) => (
                <td
                  key={index}
                  className="border border-[#ddd] p-2 text-center"
                >
                  {cap}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-[#ddd] bg-[#277e78] text-white p-2">
                Min Capacity
              </td>
              {data.specifications[0].minCapacity.map((cap, index) => (
                <td
                  key={index}
                  className="border border-[#ddd] p-2 text-center"
                >
                  {cap}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-[#ddd] bg-[#277e78] text-white p-2">
                Graduation
              </td>
              {data.specifications[0].graduation.map((grad, index) => (
                <td
                  key={index}
                  className="border border-[#ddd] p-2 text-center"
                >
                  {grad}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TwoDialsPlatformScale;
