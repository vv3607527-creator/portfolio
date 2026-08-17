import { Suspense, lazy } from 'react';
import { Header } from './ui/Header';
import { Hero } from './ui/Hero';
import { About } from './ui/About';
import { Experience } from './ui/Experience';
import { Education } from './ui/Education';
import { Skills } from './ui/Skills';
import { Certifications } from './ui/Certifications';
import { Projects } from './ui/Projects';
import { Interests } from './ui/Interests';
import { Footer } from './ui/Footer';
import { ScrollProgress } from './ui/ScrollProgress';

const Scene = lazy(() => import('./three/Scene').then((m) => ({ default: m.Scene })));

function SceneSkeleton() {
  return <div id="three-canvas" style={{ width: '100%', height: '100%' }} />;
}

export function Layout() {
  return (
    <>
      <Suspense fallback={<SceneSkeleton />}>
        <Scene />
      </Suspense>
      <ScrollProgress />
      <Header />
      <main className="content-layer">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Interests />
      </main>
      <Footer />
    </>
  );
}