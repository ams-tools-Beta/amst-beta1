
import Link from 'next/link';
import { useRouter } from 'next/router';

const tabsTop = [
  { label: 'ShopBot AI', path: '/shopbot-ai' },
  { label: 'Alarms', path: '/alarms' },
  { label: 'Manuals', path: '/manuals' },
  { label: 'Parts & Wiring', path: '/parts-wiring' },
];
const tabsBottom = [
  { label: 'Program Viewer', path: '/program-viewer' },
  { label: 'MC Data & Setup Sheets', path: '/mc-data' },
  { label: 'Training', path: '/training' },
  { label: 'Cincom', path: '/cincom' },
];

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow mb-6">
        <div className="max-w-7xl mx-auto py-4 px-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-blue-700">AMS TOOLS</h1>
          <p className="text-sm text-gray-600 -mt-1">Automated Machine Service Tools</p>
        </div>
      </header>
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-4 mb-2">
          {tabsTop.map(tab => (
            <Link href={tab.path} key={tab.label}>
              <div className={\`text-center p-3 font-medium rounded-2xl shadow hover:bg-blue-100 cursor-pointer \${router.pathname === tab.path ? 'bg-blue-600 text-white' : 'bg-white'}\`}>
                {tab.label}
              </div>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 mb-6">
          {tabsBottom.map(tab => (
            <Link href={tab.path} key={tab.label}>
              <div className={\`text-center p-3 font-medium rounded-2xl shadow hover:bg-blue-100 cursor-pointer \${router.pathname === tab.path ? 'bg-blue-600 text-white' : 'bg-white'}\`}>
                {tab.label}
              </div>
            </Link>
          ))}
        </div>
        <main className="bg-white p-6 rounded-xl shadow">{children}</main>
      </div>
    </div>
  );
}
