import { Navigation } from "@/components/Navigation";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { Contact, Experience, Footer, Hero, OtherWork, Projects, Stack } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Stack />
        <Experience />
        <Projects />
        <OtherWork />
        <Contact />
      </main>
      <Footer />
      {/* Lives in the page (not layout) so GSAP only runs after this tree hydrates */}
      <ScrollAnimations />
    </>
  );
}
