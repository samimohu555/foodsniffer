import { useApp } from '../context/AppContext';
import { categories } from '../data/categories';
import { categoryIcons } from '../data/icons';
import { motion } from 'framer-motion';

const statCards = [
    { icon: '📉', color: 'bg-red-50 border-red-100 text-red-900', key: 'stat1' },
    { icon: '🎯', color: 'bg-amber-50 border-amber-100 text-amber-900', key: 'stat2' },
    { icon: '🏥', color: 'bg-orange-50 border-orange-100 text-orange-900', key: 'stat3' },
];

const quickCategories = ['dairy', 'honey', 'spices', 'ghee'];

export default function HomeView() {
    const { t, getField, navigateTo, getTestCount } = useApp();
    const count = getTestCount();

    return (
        <div className="space-y-8">

            {/* Hero */}
            <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-primary text-white p-7 rounded-[1.75rem] shadow-[0_12px_40px_-8px_rgba(15,118,110,0.5)] relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-56 h-56 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl -ml-8 -mb-8" />
                <div className="relative z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-5 border border-white/10">
                        🛡️ {t('hero_badge')}
                    </span>
                    <h2 className="text-[1.6rem] font-black leading-tight tracking-tight mb-3">
                        {t('hero_headline')}
                    </h2>
                    <p className="text-teal-100 text-sm font-medium leading-relaxed mb-7 max-w-[290px]">
                        {t('hero_sub')}
                    </p>
                    <button
                        onClick={() => navigateTo('tests')}
                        className="w-full bg-white text-primary font-bold text-base py-4 rounded-2xl shadow-lg hover:shadow-xl active:scale-[0.97] transition-all flex items-center justify-center gap-2"
                    >
                        {t('start_testing')} <span className="text-lg">→</span>
                    </button>
                </div>
            </motion.div>

            {/* Trust Strip */}
            <p className="text-center text-xs text-text-muted font-medium tracking-wide flex items-center justify-center gap-1.5">
                🏛️ {t('trust_strip')}
            </p>

            {/* Quick Test — Milk */}
            <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigateTo('test', { testId: 'milk_water_001' })}
                className="w-full bg-card p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 text-left"
            >
                <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center text-3xl shrink-0">🥛</div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-text text-sm">{t('quick_test_title')}</h4>
                    <p className="text-xs text-text-muted font-medium mt-0.5">{t('quick_test_sub')}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">→</div>
            </motion.button>

            {/* Reality of Adulteration */}
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-black text-text tracking-tight">{t('reality_title')}</h3>
                    <p className="text-xs font-medium text-text-muted mt-1">{t('reality_sub')}</p>
                </div>
                <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 -mx-1 px-1 snap-x">
                    {statCards.map((card, i) => (
                        <motion.div
                            key={card.key}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                            className={`flex-shrink-0 w-[160px] p-4 rounded-2xl border ${card.color} snap-start`}
                        >
                            <span className="text-2xl block mb-2">{card.icon}</span>
                            <h4 className="font-bold text-sm mb-1">{t(`${card.key}_title`)}</h4>
                            <p className="text-[11px] font-medium leading-relaxed opacity-80">{t(`${card.key}_desc`)}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Most Tested */}
            <div className="space-y-3">
                <h3 className="text-lg font-black text-text tracking-tight">🔥 {t('most_tested')}</h3>
                <div className="flex gap-4 justify-between">
                    {quickCategories.map(catId => {
                        const cat = categories.find(c => c.id === catId);
                        if (!cat) return null;
                        return (
                            <motion.button
                                key={catId}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => navigateTo('testlist', { categoryId: catId })}
                                className="flex flex-col items-center gap-2 flex-1"
                            >
                                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shadow-sm border-2 border-white overflow-hidden">
                                    <img src={categoryIcons[catId]} alt={getField(cat, 'name')} className="w-12 h-12 object-contain" />
                                </div>
                                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
                                    {getField(cat, 'name')}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            {/* Social Proof */}
            <div className="text-center py-3 bg-primary/5 rounded-2xl">
                <p className="text-sm font-bold text-primary">
                    {count}+ {t('social_proof')}
                </p>
            </div>
        </div>
    );
}
