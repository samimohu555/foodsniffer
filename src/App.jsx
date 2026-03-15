import { AppProvider, useApp } from './context/AppContext';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomeView from './components/HomeView';
import CategoriesView from './components/CategoriesView';
import TestsListView from './components/TestsListView';
import WizardView from './components/WizardView';
import ResultView from './components/ResultView';
import AboutView from './components/AboutView';
import { AnimatePresence, motion } from 'framer-motion';

function AppContent() {
    const { currentView } = useApp();

    const pageVariants = {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
        exit: { opacity: 0, y: -8, transition: { duration: 0.15 } }
    };

    return (
        <div className="flex flex-col min-h-screen bg-surface text-text">
            <Header />
            <main className="flex-1 w-full max-w-md mx-auto px-4 py-5 pb-24">
                <AnimatePresence mode="wait">
                    <motion.div key={currentView} variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        {currentView === 'home' && <HomeView />}
                        {currentView === 'tests' && <CategoriesView />}
                        {currentView === 'testlist' && <TestsListView />}
                        {currentView === 'test' && <WizardView />}
                        {currentView === 'result' && <ResultView />}
                        {currentView === 'info' && <AboutView />}
                    </motion.div>
                </AnimatePresence>
            </main>
            <BottomNav />
        </div>
    );
}

export default function App() {
    return (
        <AppProvider>
            <AppContent />
        </AppProvider>
    );
}
