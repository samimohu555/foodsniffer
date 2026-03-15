import { useApp } from '../context/AppContext';
import { categories } from '../data/categories';
import { foodTests } from '../data/foodTests';
import { categoryIcons } from '../data/icons';
import { motion } from 'framer-motion';

export default function CategoriesView() {
    const { t, getField, navigateTo } = useApp();

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-black text-text tracking-tight">{t('what_to_test')}</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {categories.sort((a, b) => a.priority - b.priority).map((cat, i) => {
                    const testCount = foodTests.filter(t => {
                        const cId = t.categoryId === 'ghee' ? 'ghee' : t.categoryId;
                        return cId === cat.id;
                    }).length;
                    const noChemicals = !foodTests.some(t => t.categoryId === cat.id && t.needsChemicals);

                    return (
                        <motion.button
                            key={cat.id}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.06 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => navigateTo('testlist', { categoryId: cat.id })}
                            className="bg-card rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden text-left group"
                        >
                            <div className="h-28 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                                <img src={categoryIcons[cat.id]} alt={getField(cat, 'name')} className="w-20 h-20 object-contain" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-2 left-3 right-3 flex justify-between items-end">
                                    <h3 className="text-white font-bold text-sm drop-shadow-md">{getField(cat, 'name')}</h3>
                                    <span className="text-[10px] bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full font-bold">
                                        {testCount} {t('tests')}
                                    </span>
                                </div>
                            </div>
                            <div className="p-3 flex items-center justify-between">
                                <div className="flex gap-1.5 text-base">
                                    {cat.itemsNeeded.map((item, j) => <span key={j}>{item}</span>)}
                                </div>
                                {noChemicals && (
                                    <span className="text-[9px] bg-success-light text-success font-bold px-2 py-0.5 rounded-full">
                                        {t('no_chemicals')} ✨
                                    </span>
                                )}
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
