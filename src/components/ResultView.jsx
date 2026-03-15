import { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { foodTests } from '../data/foodTests';
import { motion } from 'framer-motion';

export default function ResultView() {
    const { t, getField, navigateTo, selectedTestId, testResult, incrementTestCount } = useApp();
    const test = foodTests.find(te => te.id === selectedTestId);

    useEffect(() => {
        incrementTestCount();
    }, [incrementTestCount]);

    if (!test || !testResult) return <div className="text-center py-12 text-text-muted">{t('no_result')}</div>;

    const isPassed = testResult === 'pass';
    const result = isPassed ? test.results.pass : test.results.fail;

    const handleShare = () => {
        const text = (getField(result, 'shareText') || '').replace('{link}', window.location.origin);
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
        >
            {/* Big Result Card */}
            <div className={`rounded-3xl p-8 text-center space-y-4 ${isPassed
                ? 'bg-gradient-to-b from-green-50 to-green-100 border-2 border-green-200'
                : 'bg-gradient-to-b from-red-50 to-red-100 border-2 border-red-200'
                }`}>
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="text-7xl block"
                >
                    {isPassed ? '✅' : '🚨'}
                </motion.span>

                <h2 className={`text-4xl font-black tracking-tight ${isPassed ? 'text-success' : 'text-danger'}`}>
                    {t(isPassed ? 'safe' : 'alert')}
                </h2>

                <p className="text-sm font-bold text-text-muted">
                    {getField(test, 'foodItem')} — {getField(test, 'adulterant')}
                </p>

                <p className={`text-base font-semibold ${isPassed ? 'text-green-700' : 'text-red-700'}`}>
                    {getField(result, 'explanation')}
                </p>

                {!isPassed && result.healthRisk && (
                    <div className="bg-amber-50 border border-amber-200 text-amber-900 px-4 py-3 rounded-xl text-xs font-bold mt-2">
                        ⚠️ {getField(result, 'healthRisk')}
                    </div>
                )}
            </div>

            {/* Action Buttons (Asymmetric) */}
            <div className="space-y-3">
                {!isPassed && (
                    <>
                        <a
                            href="https://nabl-india.org/nabl/index.php?c=publicview&m=searchlabs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-danger text-white py-4 rounded-2xl font-bold text-base shadow-lg flex items-center justify-center gap-2"
                        >
                            🔬 {t('find_nabl_lab')}
                        </a>
                        <a
                            href={`tel:${t('fssai_number')}`}
                            className="w-full bg-white text-danger border-2 border-danger py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2"
                        >
                            📞 {t('call_fssai')}
                        </a>
                    </>
                )}

                <button
                    onClick={handleShare}
                    className="w-full py-4 rounded-2xl font-bold text-base shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.97] bg-[#25D366] text-white"
                >
                    💬 {t(isPassed ? 'share_result' : 'share_warning')}
                </button>

                <button
                    onClick={() => navigateTo('tests')}
                    className="w-full text-center text-sm text-primary font-bold py-3"
                >
                    {t('test_another')}
                </button>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-50 border border-gray-100 text-text-muted px-4 py-3 rounded-xl text-[10px] font-medium text-center">
                {t('preliminary_note')}
            </div>
        </motion.div>
    );
}
