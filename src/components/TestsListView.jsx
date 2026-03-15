import { useApp } from '../context/AppContext';
import { categories } from '../data/categories';
import { foodTests } from '../data/foodTests';
import { testIcons } from '../data/icons';
import { motion } from 'framer-motion';

export default function TestsListView() {
    const { t, getField, navigateTo, selectedCategoryId } = useApp();
    const cat = categories.find(c => c.id === selectedCategoryId);
    const tests = foodTests.filter(te => te.categoryId === selectedCategoryId);

    if (!cat) return <div className="text-center py-12 text-text-muted">{t('not_found')}</div>;

    return (
        <div className="space-y-5">
            <button onClick={() => navigateTo('tests')} className="text-sm text-primary font-bold flex items-center gap-1">
                ← {t('what_to_test')}
            </button>

            <div>
                <h2 className="text-2xl font-black text-text tracking-tight">{getField(cat, 'name')}</h2>
                <p className="text-xs text-text-muted font-medium mt-1">{tests.length} {t('tests')}</p>
            </div>

            <div className="space-y-3">
                {tests.map((test, i) => (
                    <motion.button
                        key={test.id}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => navigateTo('test', { testId: test.id })}
                        className="w-full bg-card p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 text-left group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform overflow-hidden">
                            <img src={testIcons[test.id]} alt={getField(test, 'foodItem')} className="w-10 h-10 object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-text text-sm">{getField(test, 'foodItem')}</h4>
                            <p className="text-xs text-danger font-bold mt-0.5">vs {getField(test, 'adulterant')}</p>
                            <div className="flex gap-2 mt-1.5">
                                <span className="text-[10px] bg-gray-100 text-text-muted px-2 py-0.5 rounded-full font-medium">⏱ {test.estimatedTime.replace('min', t('min'))}</span>
                                <span className="text-[10px] bg-gray-100 text-text-muted px-2 py-0.5 rounded-full font-medium capitalize">{t(test.difficulty)}</span>
                                {!test.needsChemicals && <span className="text-[10px] bg-success-light text-success px-2 py-0.5 rounded-full font-bold">💧</span>}
                            </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0 font-bold">
                            ›
                        </div>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
