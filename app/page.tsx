import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import SecondAbout from "./components/secondabout";
import ProjectsSection from "./components/ProjectsSection";
import WorkflowSection from "./components/WorkflowSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <SecondAbout />
      <ProjectsSection />
      <WorkflowSection />
    </>
  );
}
