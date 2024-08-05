import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="h-[300px] bg-white p-1 w-full">
        <div className="bg-[#eeeeee] h-full w-full"></div>
      </div>
      <div className="pt-3 pb-8 px-4 text-[#333] border flex flex-col border-[#ddd] bg-[#ffffff]">
        <h4>Eastman International</h4>
        <p className="mt-4 text-xs">
          It is our pleasure to welcome you to our organization{" "}
          <span className="font-bold">&quot;Eastman International.&quot;</span>
          We at Eastman strive towards extending value for money to our clients
          & business associates through the collective involvement and team work
          of all the members of the organization at all levels. read more..!
        </p>
        <Link
          href={"/about"}
          className="text-xs text-white bg-[#333] py-1 px-3 rounded-[100vh] self-end mt-2"
        >
          read more..!
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-4 flex flex-col gap-4 bg-white border border-[#ddd]">
          <h3 className="ts text-[#09C] text-xl uppercase">Quality Control</h3>
          <div className="flex gap-3">
            <Image
              src={"/qualitypic.jpg"}
              alt="Image"
              height={104}
              width={82}
              className="rounded-md object-cover"
            />
            <p className="text-xs">
              The fully equipped in house Laboratory is designed to control the
              Quality Process and give on line test results as production goes
              on for Material testing / Hardness testing / Torque Testing /
              Crack detector...
            </p>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4 bg-white border border-[#ddd]">
          <h3 className="ts text-[#F00] text-xl uppercase">
            Group of companies
          </h3>
          <ol className="flex flex-col gap-2" type="1">
            <li className="ts text-xs">
              <a
                href="https://eastman-intl.com/"
                target="_blank"
                className="hover:underline hover:text-[#930]"
              >
                eastman-intl.com
              </a>
            </li>
            <li className="ts text-xs">
              <a
                href="http://diamaxauto.com/"
                target="_blank"
                className="hover:underline hover:text-[#930]"
              >
                diamaxauto.com
              </a>
            </li>
            <li className="ts text-xs">
              <a
                href="https://eastmanceramic.com/"
                target="_blank"
                className="hover:underline hover:text-[#930]"
              >
                eastmanceramic.com
              </a>
            </li>
            <li className="ts text-xs">
              <a
                href="http://www.eastmanfoods.com/"
                target="_blank"
                className="hover:underline hover:text-[#930]"
              >
                eastmanfoods.com
              </a>
            </li>
            <li className="ts text-xs">
              <a
                href="http://www.eastmancycles.com/"
                target="_blank"
                className="hover:underline hover:text-[#930]"
              >
                eastmancycles.com
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Content;
