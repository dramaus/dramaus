
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.ts';
import Hero from './components/Hero.ts';
import FeatureGrid from './components/FeatureGrid.ts';
import WorkShowcase from './components/WorkShowcase.ts';
import Testimonials from './components/Testimonials.ts';
import Footer from './components/Footer.ts';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Hero,
    FeatureGrid,
    WorkShowcase,
    Testimonials,
    Footer
  },
  template: `
    <div class="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main class="flex-grow">
        <Hero />
        <FeatureGrid />
        <WorkShowcase />
        <Testimonials />
      </main>
      <Footer />
    </div>
  `
});
