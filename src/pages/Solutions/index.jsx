import SolutionsHero from './SolutionsHero';
import WhoWeServe from './WhoWeServe';
import WhatWeDo from './WhatWeDo';
import CtaBanner from '../../components/CtaBanner';

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <WhoWeServe />
      <WhatWeDo />
      <CtaBanner
        title="Not sure which solution fits?"
        text="Tell us about your site and load, and we'll recommend the right path."
        to="/contact"
        label="Talk to an energy specialist →"
      />
    </>
  );
}
