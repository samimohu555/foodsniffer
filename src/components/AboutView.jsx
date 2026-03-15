import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = ['faq1', 'faq2', 'faq3'];

export default function AboutView() {
    const { t } = useApp();
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-black text-text tracking-tight">{t('about_title')}</h2>
            <p className="text-sm font-medium text-text-muted leading-relaxed">{t('about_desc')}</p>

            {/* FSSAI Attribution */}
            <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10">
                <div className="flex items-center gap-3">
                    <span className="text-3xl">🏛️</span>
                    <div>
                        <h4 className="font-bold text-primary text-sm">{t('fssai_attribution')}</h4>
                        <p className="text-xs text-text-muted font-medium mt-0.5">
                            {t('fssai_authority')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
                <h4 className="font-bold text-amber-900 text-sm mb-1">⚠️ {t('disclaimer_title')}</h4>
                <p className="text-xs text-amber-800 font-medium leading-relaxed">{t('disclaimer')}</p>
            </div>

            {/* Content Disclaimer */}
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
                <h4 className="font-bold text-text text-sm mb-1">📋 {t('content_disclaimer_title')}</h4>
                <p className="text-xs text-text-muted font-medium leading-relaxed">{t('content_disclaimer')}</p>
            </div>

            {/* FAQ */}
            <div className="space-y-3">
                <h3 className="text-lg font-black text-text">{t('faq_title')}</h3>
                {faqs.map(faq => (
                    <button
                        key={faq}
                        onClick={() => setOpenFaq(openFaq === faq ? null : faq)}
                        className="w-full bg-card p-4 rounded-2xl shadow-sm border border-gray-100 text-left"
                    >
                        <div className="flex justify-between items-center">
                            <h4 className="font-bold text-text text-sm flex-1 pr-2">{t(`${faq}_q`)}</h4>
                            <motion.span
                                animate={{ rotate: openFaq === faq ? 180 : 0 }}
                                className="text-text-muted shrink-0"
                            >
                                ▾
                            </motion.span>
                        </div>
                        <AnimatePresence>
                            {openFaq === faq && (
                                <motion.p
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="text-xs text-text-muted font-medium mt-3 leading-relaxed overflow-hidden"
                                >
                                    {t(`${faq}_a`)}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </button>
                ))}
            </div>

            {/* Contact */}
            <div className="text-center pt-2">
                <a
                    href={`tel:${t('fssai_number')}`}
                    className="inline-flex items-center gap-2 text-primary text-sm font-bold"
                >
                    📞 {t('fssai_helpline_label')}: {t('fssai_number')}
                </a>
            </div>

            <p className="text-center text-[10px] text-text-muted font-medium pb-4">
                FoodSniffer v1.0.0 • {t('made_with_love')}
            </p>
        </div>
    );
}
