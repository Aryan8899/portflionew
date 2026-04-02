import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import SecondAbout from "./components/secondabout";
import ProjectsSection from "./components/ProjectsSection";
import WorkflowSection from "./components/WorkflowSection";
import Fotter from "./components/Fotter";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <HeroSection />
      <ServicesSection />
      <SecondAbout />
      <ProjectsSection />
      <WorkflowSection />
      <Fotter />
    </>
  );
}
