import { useApp } from '../context/AppContext';

const tabs = [
    { id: 'home', icon: '🏠', views: ['home'] },
    { id: 'tests', icon: '🧪', views: ['tests', 'testlist', 'test', 'result'] },
    { id: 'info', icon: 'ℹ️', views: ['info'] },
];

export default function BottomNav() {
    const { currentView, navigateTo, t } = useApp();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-t border-gray-100">
            <div className="max-w-md mx-auto flex">
                {tabs.map(tab => {
                    const isActive = tab.views.includes(currentView);
                    return (
                        <button
                            key={tab.id}
                            onClick={() => navigateTo(tab.id === 'tests' ? 'tests' : tab.id === 'info' ? 'info' : 'home')}
                            className={`flex-1 py-3 flex flex-col items-center gap-1 transition-all ${isActive
                                    ? 'text-primary'
                                    : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            <span className={`text-xl transition-transform ${isActive ? 'scale-110' : ''}`}>{tab.icon}</span>
                            <span className={`text-[10px] uppercase tracking-wider ${isActive ? 'font-extrabold' : 'font-bold'}`}>
                                {t(`nav_${tab.id === 'info' ? 'about' : tab.id}`)}
                            </span>
                            {isActive && <div className="w-5 h-0.5 bg-primary rounded-full mt-0.5" />}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
