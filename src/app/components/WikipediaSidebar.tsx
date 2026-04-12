import { Menu, FileText, Pencil, Clock } from 'lucide-react';

interface WikipediaSidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const sections = [
  { id: 'early-life', label: 'Early life' },
  { id: 'education', label: 'Education' },
  { id: 'career', label: 'Career' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills & expertise' },
  { id: 'awards', label: 'Awards & recognition' },
  { id: 'publications', label: 'Publications' },
  { id: 'personal', label: 'Personal life' },
  { id: 'references', label: 'References' },
];

export function WikipediaSidebar({ activeSection, onSectionClick }: WikipediaSidebarProps) {
  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-300 min-h-screen p-4">
      <div className="mb-6">
        <h3 className="text-xs font-bold text-gray-600 uppercase mb-2">Contents</h3>
        <nav>
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => onSectionClick(section.id)}
                  className={`text-sm w-full text-left px-2 py-1 rounded hover:bg-gray-200 ${
                    activeSection === section.id ? 'bg-gray-200 font-semibold' : ''
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="border-t border-gray-300 pt-4">
        <h3 className="text-xs font-bold text-gray-600 uppercase mb-2">Tools</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
            <Menu className="w-4 h-4" />
            <span>Article</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
            <FileText className="w-4 h-4" />
            <span>Talk</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
            <Pencil className="w-4 h-4" />
            <span>Edit</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
            <Clock className="w-4 h-4" />
            <span>History</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
