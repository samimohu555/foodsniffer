import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import en from '../locales/en.json';
import hi from '../locales/hi.json';
import bn from '../locales/bn.json';
import ta from '../locales/ta.json';

const translations = { en, hi, bn, ta };
const AppContext = createContext();

function detectDefaultLang() {
    const saved = localStorage.getItem('fs_lang');
    if (saved && translations[saved]) return saved;
    const browserLang = navigator.language?.slice(0, 2) || 'hi';
    if (translations[browserLang]) return browserLang;
    return 'hi'; // Hindi default per market analysis
}

export function AppProvider({ children }) {
    const [language, setLanguageState] = useState(detectDefaultLang);
    const [currentView, setCurrentView] = useState('home');
    const [selectedTestId, setSelectedTestId] = useState(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [testResult, setTestResult] = useState(null);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const setLanguage = useCallback((lang) => {
        setLanguageState(lang);
        localStorage.setItem('fs_lang', lang);
    }, []);

    const t = useCallback((key) => {
        return translations[language]?.[key] || translations.en?.[key] || key;
    }, [language]);

    const getField = useCallback((obj, field) => {
        const localized = obj[`${field}_${language}`];
        return localized || obj[field] || '';
    }, [language]);

    const navigateTo = useCallback((view, opts = {}) => {
        setCurrentView(view);
        if (opts.testId !== undefined) setSelectedTestId(opts.testId);
        if (opts.categoryId !== undefined) setSelectedCategoryId(opts.categoryId);
        if (opts.result !== undefined) setTestResult(opts.result);
    }, []);

    // Increment social proof counter
    const incrementTestCount = useCallback(() => {
        const current = parseInt(localStorage.getItem('fs_test_count') || '500', 10);
        localStorage.setItem('fs_test_count', String(current + 1));
    }, []);

    const getTestCount = useCallback(() => {
        return parseInt(localStorage.getItem('fs_test_count') || '500', 10);
    }, []);

    return (
        <AppContext.Provider value={{
            language, setLanguage, t, getField,
            currentView, navigateTo,
            selectedTestId, selectedCategoryId,
            testResult, setTestResult,
            incrementTestCount, getTestCount
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const ctx = useContext(AppContext);
    if (!ctx) throw new Error('useApp must be inside AppProvider');
    return ctx;
}
