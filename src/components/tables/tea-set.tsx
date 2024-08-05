import React from "react";

const TeaSetTable = ({ data }: { data: any }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-teal-600 text-white grid grid-cols-[1fr,2fr] text-sm text-center text-xs font-bold">
        <div className="p-2 border-r border-teal-500">Code</div>
        <div className="p-2">Size / Capacity</div>
      </div>
      {data.map((item: any, index: number) => (
        <div
          key={index}
          className="grid grid-cols-[1fr,2fr] border-b border-[#ddd] text-sm text-center"
        >
          <div className="p-2 border-r border-[#ddd] text-xs font-semibold">
            {item.code}
          </div>
          <div className="p-2">
            {item.capacity.map((cap: string, capIndex: number) => (
              <div key={capIndex} className="text-xs font-bold">
                {cap}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeaSetTable;
