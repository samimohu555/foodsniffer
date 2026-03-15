import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { foodTests } from '../data/foodTests';
import { testIcons, stepIcon } from '../data/icons';
import { motion, AnimatePresence } from 'framer-motion';

export default function WizardView() {
    const { t, getField, navigateTo, selectedTestId } = useApp();
    const test = foodTests.find(te => te.id === selectedTestId);
    const [phase, setPhase] = useState('prep'); // prep | steps | observe
    const [stepIdx, setStepIdx] = useState(0);

    if (!test) return <div className="text-center py-12 text-text-muted">{t('not_found')}</div>;

    const totalSteps = test.steps.length;

    // PHASE: Preparation
    if (phase === 'prep') {
        return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <button onClick={() => navigateTo('tests')} className="text-sm text-primary font-bold flex items-center gap-1">
                    ← {t('what_to_test')}
                </button>

                <div className="text-center space-y-2 py-4">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gray-50 flex items-center justify-center overflow-hidden">
                        <img src={testIcons[test.id]} alt={getField(test, 'foodItem')} className="w-16 h-16 object-contain" />
                    </div>
                    <h2 className="text-2xl font-black text-text">{getField(test, 'foodItem')}</h2>
                    <p className="text-sm text-danger font-bold">vs {getField(test, 'adulterant')}</p>
                </div>

                {test.safetyWarning && (
                    <div className="bg-amber-50 border border-amber-200 text-amber-900 px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2">
                        ⚠️ {getField(test, 'safetyWarning')}
                    </div>
                )}

                <div className="bg-card rounded-2xl shadow-sm border border-gray-100 p-5 space-y-4">
                    <h3 className="font-black text-base text-text">{t('gather_items')}</h3>
                    <ul className="space-y-3">
                        {test.requiredItems.map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <span className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl">{item.icon}</span>
                                <span className="text-sm font-medium text-text">{getField(item, 'name')}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-xs text-text-muted font-medium border-t border-gray-50 pt-3">
                        ⏱ {t('test_takes')} {test.estimatedTime.replace('min', t('min'))}
                    </p>
                </div>

                <button
                    onClick={() => setPhase('steps')}
                    className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl active:scale-[0.97] transition-all"
                >
                    {t('im_ready')}
                </button>
            </motion.div>
        );
    }

    // PHASE: Step-by-Step
    if (phase === 'steps') {
        const step = test.steps[stepIdx];
        const progress = ((stepIdx + 1) / totalSteps) * 100;

        return (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                {/* Progress Bar */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-text-muted">
                        <button onClick={() => {
                            if (stepIdx === 0) setPhase('prep');
                            else setStepIdx(stepIdx - 1);
                        }} className="text-primary">{t('previous')}</button>
                        <span>{t('step')} {stepIdx + 1} {t('of')} {totalSteps}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>

                {/* Step Illustration */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={stepIdx}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.2 }}
                        className="bg-gray-50 rounded-2xl p-12 text-center"
                    >
                        <span className="text-7xl block mb-4">
                            {stepIcon(step.instruction)}
                        </span>
                    </motion.div>
                </AnimatePresence>

                {/* Step Instruction */}
                <div className="text-center px-2">
                    <p className="text-lg font-bold text-text leading-snug">{getField(step, 'instruction')}</p>
                </div>

                {/* Next */}
                <button
                    onClick={() => {
                        if (stepIdx < totalSteps - 1) setStepIdx(stepIdx + 1);
                        else setPhase('observe');
                    }}
                    className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-base shadow-lg active:scale-[0.97] transition-all"
                >
                    {stepIdx < totalSteps - 1 ? t('next_step') : t('what_observed') + ' →'}
                </button>
            </motion.div>
        );
    }

    // PHASE: Observation Selection
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h2 className="text-2xl font-black text-text text-center">{t('what_observed')}</h2>
            <p className="text-center text-sm text-text-muted font-medium">
                {getField(test, 'foodItem')} — {getField(test, 'adulterant')}
            </p>

            <div className="space-y-4">
                {/* PASS Observation */}
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigateTo('result', { testId: test.id, result: 'pass' })}
                    className="w-full bg-card p-5 rounded-2xl border-2 border-success text-left shadow-sm"
                >
                    <div className="flex items-start gap-3">
                        <span className="text-2xl shrink-0">✅</span>
                        <div>
                            <h4 className="font-bold text-success text-sm mb-1">{t('safe')}</h4>
                            <p className="text-sm text-text font-medium">{getField(test.results.pass, 'observation')}</p>
                        </div>
                    </div>
                </motion.button>

                {/* FAIL Observation */}
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigateTo('result', { testId: test.id, result: 'fail' })}
                    className="w-full bg-card p-5 rounded-2xl border-2 border-danger text-left shadow-sm"
                >
                    <div className="flex items-start gap-3">
                        <span className="text-2xl shrink-0">🚨</span>
                        <div>
                            <h4 className="font-bold text-danger text-sm mb-1">{t('alert')}</h4>
                            <p className="text-sm text-text font-medium">{getField(test.results.fail, 'observation')}</p>
                        </div>
                    </div>
                </motion.button>
            </div>

            <button
                onClick={() => { setPhase('prep'); setStepIdx(0); }}
                className="w-full text-center text-sm text-primary font-bold py-3"
            >
                {t('restart_test')}
            </button>
        </motion.div>
    );
}
