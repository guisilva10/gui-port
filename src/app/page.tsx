import CtaHome from "@/components/cta-home.component";
import FaqHome from "@/components/faq-home.component";
import FeaturesHome from "@/components/features-home.component";
import FeedbacksHome from "@/components/feedbacks-home.component";
import FooterHome from "@/components/footer-home.component";

import HeroHome from "@/components/hero-home.component";
import PrivacyPolicy from "@/components/privacy-home.component";
import ProjectsHome from "@/components/projects-home.component";
import Support from "@/components/suport-home.component";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />

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
