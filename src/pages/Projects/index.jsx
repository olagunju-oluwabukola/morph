import ProjectsHero from './ProjectsHero';
import CaseStudies from './CaseStudies';
import CtaBanner from '../../components/CtaBanner';

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <CaseStudies />
      <CtaBanner
        title="Have a project in mind?"
        text="Tell us about your site and we'll show you what's possible."
        to="/contact"
        label="Start a conversation →"
        tone="dark"
        flush
      />
    </>
  );
}
