import { Aside } from "@/components/aside";
import Container from "@/components/container";
import Content from "@/components/content";

export default function Home() {
  return (
    <main className="mt-3 md:mt-[8rem]">
      <Container className="grid grid-cols-1 main-grid gap-5">
        <Aside />
        <Content />
      </Container>
    </main>
  );
}
