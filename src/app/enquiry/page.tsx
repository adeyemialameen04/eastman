import { Aside } from "@/components/aside";
import Container from "@/components/container";
import Wrapper from "@/components/wrapper";

const Enquiry = () => {
  return (
    <main className="mt-3 md:mt-[8rem]">
      <Container className="grid grid-cols-1 main-grid gap-5">
        <Aside />
        <Wrapper image="enquiry_banner.jpg" title="Make An Enquiry">
          <p className="text-[#333] text-xs mt-4 font-bold">
            Please fill the form below to make an enquiry...!
          </p>
          <form className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-3">
              <label className="text-xs font-light">
                Your Name <span className="text-[#F00]">*</span>
              </label>
              <input className="border border-[#cccccc]" />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-xs font-light">
                Phone No <span className="text-[#F00]">*</span>
              </label>
              <input className="border border-[#cccccc]" />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-xs font-light">
                Your Email ID <span className="text-[#F00]">*</span>
              </label>
              <input className="border border-[#cccccc]" />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-xs font-light">
                Enquiry Details <span className="text-[#F00]">*</span>
              </label>
              <textarea className="border border-[#cccccc] w-[400px] p-[6px]" />
            </div>
          </form>
        </Wrapper>
      </Container>
    </main>
  );
};
export default Enquiry;
