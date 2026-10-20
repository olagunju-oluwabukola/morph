import HubHero from './HubHero';
import Vision from './Vision';
import Components from './Components';
import HubPillars from './HubPillars';
import CtaBanner from '../../components/CtaBanner';

export default function HubPage() {
  return (
    <>
      <HubHero />
      <Vision />
      <Components />
      <HubPillars />
      <CtaBanner
        title="Help us build the next generation of energy infrastructure."
        text="We're working with developers, technology providers and investors."
        to="/partnerships"
        label="Partner on the Hub →"
        maxWidth={680}
      />
    </>
  );
}
