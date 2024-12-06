import CtaHome from "@/components/cta-home.component";
import FaqHome from "@/components/faq-home.component";
import FeaturesHome from "@/components/features-home.component";
import FeedbacksHome from "@/components/feedbacks-home.component";
import FooterHome from "@/components/footer-home.component";

import HeroHome from "@/components/hero-home.component";
import PrivacyPolicy from "@/components/privacy-home.component";
import ProjectsHome from "@/components/projects-home.component";
import Support from "@/components/suport-home.component";

export default function Home() {
  return (
    <>
      <HeroHome />
      <FeaturesHome />
      <ProjectsHome />
      <FeedbacksHome />
      <FaqHome />
      <CtaHome />
      <FooterHome />
      <PrivacyPolicy />
      <Support />
    </>
  );
}
