export const ElectricMotorsTable = ({ data }: { data: any }) => {
  return (
    <table className="w-full border-collapse text-[11px]">
      <tbody>
        <tr>
          {data.headers.map((header: string, index: number) => (
            <td
              key={index}
              className="bg-[#277e78] text-white font-bold border-r border-white p-1 text-center"
            >
              {header}
            </td>
          ))}
        </tr>
        {data.rows.map((row: any, rowIndex: number) => (
          <tr key={rowIndex}>
            {row.map((cell: any, cellIndex: number) => (
              <td
                key={cellIndex}
                className="text-black font-bold border-b border-r border-[#ddd] p-1 text-center"
                rowSpan={cell.rowSpan ? cell.rowSpan : undefined}
                colSpan={cell.colSpan ? cell.colSpan : undefined}
              >
                {cell.content}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
