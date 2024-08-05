const WeighTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-[#ddd] bg-[#277e78] text-white p-2 text-xs">
              Model
            </th>
            <th
              className="border border-[#ddd] bg-[#277e78] text-white p-2 text-xs text-center"
              colSpan={8}
            >
              SP / SPT/NS/NS/SPS
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#ddd] bg-[#277e78] text-white p-2 text-xs font-bold text-center">
              CAPACITY
            </td>
            <td className="border border-[#ddd] p-2 text-center  text-xs font-bold">
              1kg
            </td>
            <td className="border border-[#ddd] p-2 text-center  text-xs font-bold">
              2kg
            </td>
            <td className="border border-[#ddd] p-2 text-center  text-xs font-bold">
              3kg
            </td>
            <td className="border border-[#ddd] p-2 text-center  text-xs font-bold">
              4kg
            </td>
            <td className="border border-[#ddd] p-2 text-center  text-xs font-bold">
              1kg / 2lb
            </td>
            <td className="border border-[#ddd] p-2 text-center  text-xs font-bold">
              2kg / 4lb
            </td>
            <td className="border border-[#ddd] p-2 text-center  text-xs font-bold">
              3kg / 6lb
            </td>
            <td className="border border-[#ddd] p-2 text-center  text-xs font-bold">
              4kg / 8lb
            </td>
          </tr>
          <tr>
            <td className="border border-[#ddd] bg-[#277e78] text-white p-2 text-xs font-bold text-center">
              GRADUATION
            </td>
            <td className="border border-[#ddd] p-2 text-center  text-xs font-bold">
              5kg
            </td>
            <td className="border border-[#ddd] p-2 text-center  text-xs font-bold">
              10g
            </td>
            <td className="border border-[#ddd] p-2 text-center  text-xs font-bold">
              10g
            </td>
            <td className="border border-[#ddd] p-2 text-center  text-xs font-bold">
              20g
            </td>
            <td className="border border-[#ddd] p-2 text-center  text-xs font-bold">
              5g/¼ oz
            </td>
            <td className="border border-[#ddd] p-2 text-center  text-xs font-bold">
              10g/½ oz
            </td>
            <td className="border border-[#ddd] p-2 text-center  text-xs font-bold">
              10g/½oz
            </td>
            <td className="border border-[#ddd] p-2 text-center  text-xs font-bold">
              20g/1oz
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeighTable;
