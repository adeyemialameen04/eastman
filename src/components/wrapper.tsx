import Image from "next/image";

const Wrapper = ({
  image,
  title,
  children,
  className,
}: {
  image: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <main className="p-4 bg-white border border-[#ddd]">
      <Image
        src={`/${image}`}
        alt={title}
        height={122}
        width={698}
        className="w-full"
      />
      <div className="mt-4">
        <h1 className="uppercase text-xl ts text-[#333333] border-b border-b-[#ddd] pb-2">
          {title}
        </h1>
        <div className={className}>{children}</div>
      </div>
    </main>
  );
};
export default Wrapper;
