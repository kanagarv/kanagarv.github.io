import { useState } from 'react';
import { WikipediaHeader } from './components/WikipediaHeader';
import { WikipediaSidebar } from './components/WikipediaSidebar';
import { WikipediaContent } from './components/WikipediaContent';

export default function App() {
  const [activeSection, setActiveSection] = useState('early-life');

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <WikipediaHeader />
      <div className="flex">
        <WikipediaSidebar activeSection={activeSection} onSectionClick={handleSectionClick} />
        <WikipediaContent activeSection={activeSection} />
      </div>
    </div>
  );
}
