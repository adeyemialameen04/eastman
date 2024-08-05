import { Aside } from "@/components/aside";
import Container from "@/components/container";
import Wrapper from "@/components/wrapper";

const About = () => {
  return (
    <main className="mt-3 md:mt-[8rem]">
      <Container className="grid grid-cols-1 main-grid gap-5">
        <Aside />
        <Wrapper image="about_banner.jpg" title="About us">
          <div className="flex flex-col gap-4 text-xs text-[#333] mt-4">
            <p>
              A mind boggling compounded annual growth of 45% in the last four
              years, winners of the coveted “Niryat Shree” certificate of
              excellence, bestowed with Trading House staus nby the govt of
              India, yet we feel the journey has begun.
            </p>
            <p>
              We are adept of handling an array of products from two wheelers
              and their components to four wheeler components, tyres and tubes,
              fastners, handtools, agricultural implements, customized forgings,
              general and builder’s hardware, electrical products and electrical
              hardware’s, household products, chemicals to just anything being
              sourced from China, Thailand, Singapore, Malaysia, Turkey, and
              various other countries across the globe. Backed by a hardcore
              sourcing team and led by a marketing work force that ensures you
              do not have to look elsewhere.
            </p>
            <p className="font-bold">
              At Eastman International we believe laurels already won are for
              the history books – It’s the future we want to write.
            </p>
          </div>
        </Wrapper>
      </Container>
    </main>
  );
};
export default About;
