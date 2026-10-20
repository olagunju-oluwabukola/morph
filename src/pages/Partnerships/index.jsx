import PartnershipsHero from './PartnershipsHero';
import PartnerTypes from './PartnerTypes';
import CtaBanner from '../../components/CtaBanner';

export default function PartnershipsPage() {
  return (
    <>
      <PartnershipsHero />
      <PartnerTypes />
      <CtaBanner
        title="Let's talk about working together."
        text="Tell us who you are and what you're building. We'll take it from there."
        to="/contact"
        label="Partner with Morph →"
        flush
      />
    </>
  );
}
