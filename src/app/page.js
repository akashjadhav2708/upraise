import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import EmailSection from "../components/EmailSection";
import AchievementsSection from "../components/AchievementsSection";
import Services from "../components/Services";
import SucessStories from "../components/SucessStories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100 text-gray-700">
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <Services />
        <SucessStories />
        <ProjectsSection />
        <EmailSection />
      </div>
    </main>
  );
}
