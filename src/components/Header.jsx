import { useApp } from '../context/AppContext';

const langs = [
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'हि' },
    { code: 'bn', label: 'বা' },
    { code: 'ta', label: 'த' },
];

export default function Header() {
    const { language, setLanguage, t } = useApp();

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
            <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                    <div className="bg-primary text-white w-9 h-9 rounded-xl flex items-center justify-center text-base font-bold shadow-sm">
                        ⚗️
                    </div>
                    <h1 className="text-lg font-black text-text tracking-tight">{t('app_title')}</h1>
                </div>

                <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-0.5">
                    {langs.map(l => (
                        <button
                            key={l.code}
                            onClick={() => setLanguage(l.code)}
                            className={`px-2.5 py-1.5 text-xs font-bold rounded-md transition-all ${language === l.code
                                    ? 'bg-white text-primary shadow-sm'
                                    : 'text-text-muted hover:text-text'
                                }`}
                        >
                            {l.label}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}
