import React from "react";

const ComplexTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse text-xs text-center font-semibold">
        <thead>
          <tr>
            <th
              className="bg-teal-700 text-white text-left p-2 border"
              colSpan={8}
            >
              Standard (BS4568-1970)
            </th>
          </tr>
          <tr>
            <th
              className="bg-[#277e78] text-white p-2 border border-[#ddd]"
              rowSpan={2}
            >
              Model
            </th>
            <th
              className="bg-[#277e78] text-white p-2 border border-[#ddd]"
              rowSpan={2}
            >
              Size (mm)
            </th>
            <th
              className="bg-[#277e78] text-white p-2 border border-[#ddd] text-center"
              colSpan={2}
            >
              Outside Diameter(mm)
            </th>
            <th
              className="bg-[#277e78] text-white p-2 border border-[#ddd]"
              rowSpan={2}
            >
              Wall Thickness(mm)
            </th>
            <th
              className="bg-[#277e78] text-white p-2 border border-[#ddd] text-center"
              colSpan={2}
            >
              Length of thread (mm)
            </th>
            <th
              className="bg-[#277e78] text-white p-2 border border-[#ddd]"
              rowSpan={2}
            >
              Length
            </th>
          </tr>
          <tr>
            <th className="bg-[#277e78] text-white p-2 border border-[#ddd]">
              Min
            </th>
            <th className="bg-[#277e78] text-white p-2 border border-[#ddd]">
              Max
            </th>
            <th className="bg-[#277e78] text-white p-2 border border-[#ddd]">
              Min
            </th>
            <th className="bg-[#277e78] text-white p-2 border border-[#ddd]">
              Max
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-[#ddd]">SMS20</td>
            <td className="p-2 border border-[#ddd]">20</td>
            <td className="p-2 border border-[#ddd]">19.70</td>
            <td className="p-2 border border-[#ddd]">20</td>
            <td className="p-2 border border-[#ddd]">1.6 ± 0.15</td>
            <td className="p-2 border border-[#ddd]">13</td>
            <td className="p-2 border border-[#ddd]">15</td>
            <td className="p-2 border border-[#ddd]">3.75m</td>
          </tr>
          <tr>
            <td className="p-2 border border-[#ddd]">SMS25</td>
            <td className="p-2 border border-[#ddd]">25</td>
            <td className="p-2 border border-[#ddd]">24.60</td>
            <td className="p-2 border border-[#ddd]">25</td>
            <td className="p-2 border border-[#ddd]">1.6 ± 0.15</td>
            <td className="p-2 border border-[#ddd]">16</td>
            <td className="p-2 border border-[#ddd]">18</td>
            <td className="p-2 border border-[#ddd]">3.75m</td>
          </tr>
          <tr>
            <td className="p-2 border border-[#ddd]">SMS32</td>
            <td className="p-2 border border-[#ddd]">32</td>
            <td className="p-2 border border-[#ddd]">31.60</td>
            <td className="p-2 border border-[#ddd]">32</td>
            <td className="p-2 border border-[#ddd]">1.6 ± 0.15</td>
            <td className="p-2 border border-[#ddd]">18</td>
            <td className="p-2 border border-[#ddd]">20</td>
            <td className="p-2 border border-[#ddd]">3.75m</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComplexTable;
