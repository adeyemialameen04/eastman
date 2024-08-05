import Image from "next/image";
import Container from "./container";
import Wrapper from "./wrapper";
import { Aside } from "./aside";

export const NoData = ({
  product,
  category,
}: {
  product: string;
  category?: string;
}) => {
  const renderContent = () => {
    if (product === "iron-oxide-chemicals") {
      return (
        <Image
          src={"/iron-oxide&-chemicals.jpg"}
          height={324}
          width={324}
          alt=""
        />
      );
    } else {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-5">
          <div className="flex flex-col gap-4">
            <Image
              src={"/1.jpg"}
              height={239}
              width={402}
              className="h-full object-cover"
              alt=""
            />
            <Image src={"/2.jpg"} height={239} width={402} alt="" />
          </div>
          <div className="flex flex-col gap-3">
            <Image src={"/3.jpg"} height={230} width={402} alt="" />
            <div>
              <p className="text-[15px] font-semibold">
                Calcium Carbide (CaC2)
              </p>
              <p className="text-xs font-light">
                <span className="font-semibold">Gas Yield: </span>295-305 l/Kg
              </p>
              <p className="text-xs font-light">
                <span className="font-semibold">PH3: </span> 0.06%Max
              </p>
              <p className="text-xs font-light">
                <span className="font-semibold">H2S: </span> 0.08%Max
              </p>
              <p className="text-xs font-light">
                <span className="font-semibold">Size</span> 50-80MM
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <main className="mt-3 md:mt-[8rem]">
      <Container className="grid grid-cols-1 main-grid gap-5">
        <Aside defaultValue={category} />
        <Wrapper image={"chemicals-head.jpg"} title={`Chemicals / ${product}`}>
          <div>{renderContent()}</div>
        </Wrapper>
      </Container>
    </main>
  );
};

export const GeneralNoData = ({
  product,
  category,
}: {
  product: string;
  category?: string;
}) => {
  if (category === "general-products") {
    if (product === "candles") {
      return (
        <main className="mt-3 md:mt-[8rem]">
          <Container className="grid grid-cols-1 main-grid gap-5">
            <Aside />
            <Wrapper
              image={"candles_header.jpg"}
              title={`General products / ${product}`}
            >
              <div>
                <Image
                  height={570}
                  width={674}
                  src={"/candles.jpg"}
                  className=""
                  alt=""
                />
              </div>
            </Wrapper>
          </Container>
        </main>
      );
    } else if (product === "sewing-machines") {
      return (
        <main className="mt-3 md:mt-[8rem]">
          <Container className="grid grid-cols-1 main-grid gap-5">
            <Aside defaultValue={category} />
            <Wrapper
              image={"headed.jpg"}
              title={`General products / ${product}`}
            >
              <div className="text-xs font-bold mt-2">
                This Page is Under Construction...!
              </div>
            </Wrapper>
          </Container>
        </main>
      );
    }
  }
};
