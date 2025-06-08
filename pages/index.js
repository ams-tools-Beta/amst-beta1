
import { useState } from 'react';

const tabs = [
  'ShopBot AI',
  'Alarms',
  'Manuals',
  'Parts & Wiring',
  'Program Viewer',
  'MC Data & Setup Sheets',
  'Training',
  'Cincom ▼',
];

const TabContent = ({ tab }) => {
  return (
    <div className="p-4 bg-white rounded shadow mt-4">
      <h2 className="text-xl font-semibold">{tab}</h2>
      <p className="text-gray-600 mt-2">Placeholder content for {tab}.</p>
    </div>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">AMST UI</h1>
      <div className="grid grid-cols-4 gap-2 mb-2">
        {tabs.slice(0, 4).map(tab => (
          <button
            key={tab}
            className={\`p-3 rounded-xl font-medium \${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-white text-black border'}\`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {tabs.slice(4).map(tab => (
          <button
            key={tab}
            className={\`p-3 rounded-xl font-medium \${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-white text-black border'}\`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <TabContent tab={activeTab} />
    </div>
  );
}
