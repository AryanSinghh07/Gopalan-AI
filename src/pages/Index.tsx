import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimalTypeClassification from "@/components/AnimalTypeClassification";
import ProblemStatement from "@/components/ProblemStatement";
import Solution from "@/components/Solution";
import TechnologySpecs from "@/components/TechnologySpecs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <Hero />
      <AnimalTypeClassification />
      <ProblemStatement />
      <Solution />
      <TechnologySpecs />
      <Footer />
    </div>
  );
};

export default Index;
