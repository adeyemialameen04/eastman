import { Aside } from "@/components/aside";
import Container from "@/components/container";
import Wrapper from "@/components/wrapper";

const QualityControl = () => {
  return (
    <main className="mt-3 md:mt-[8rem]">
      <Container className="grid grid-cols-1 main-grid gap-5">
        <Aside />
        <Wrapper image="quality_banner.jpg" title="Quality Control">
          <div className="text-xs text-[#333] mt-4">
            <p>
              Adequate and strict pre shipment inspections are conducted by the
              qualified Inspectors at the place of production and before
              shipment as well. All goods are subject to be checked thoroughly
              for all specifications. The goods are photographed while being
              packed and before stuffing and while stuffing to make sure the
              proper shipments.
            </p>
          </div>
        </Wrapper>
      </Container>
    </main>
  );
};
export default QualityControl;
