import { Aside } from "@/components/aside";
import Container from "@/components/container";
import Wrapper from "@/components/wrapper";
import Image from "next/image";

const Contact = () => {
  return (
    <main className="mt-3 md:mt-[8rem]">
      <Container className="grid grid-cols-1 main-grid gap-5">
        <Aside />
        <Wrapper image="contact-header.jpg" title="Contact us">
          <div className="text-xs text-[#333] mt-4 flex flex-col gap-3">
            <p className="flex items-center gap-3">
              <Image src={"/icon1.jpg"} alt="Location" height={30} width={21} />{" "}
              B-XXX-2185, C-203/1, Phase-VII Focal Point Ludhiana-141010
            </p>
            <p className="flex items-center gap-3">
              <Image src={"/icon2.jpg"} alt="Location" height={30} width={21} />{" "}
              +91 161 -3026901/05/06 , 5026901
            </p>
            <p className="flex items-center gap-3">
              <Image src={"/icon3.jpg"} alt="Location" height={30} width={21} />{" "}
              mcell2@eastman-intl.com
            </p>
          </div>
        </Wrapper>
      </Container>
    </main>
  );
};
export default Contact;
