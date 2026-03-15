// Centralized icon mappings using AI-generated food images
// Culturally appropriate for Indian kitchen context

import iconMilk from '../assets/icons/icon_milk.png';
import iconHoney from '../assets/icons/icon_honey.png';
import iconSpices from '../assets/icons/icon_spices.png';
import iconGhee from '../assets/icons/icon_ghee.png';
import iconOil from '../assets/icons/icon_oil.png';
import iconSalt from '../assets/icons/icon_salt.png';
import iconTea from '../assets/icons/icon_tea.png';
import iconDal from '../assets/icons/icon_dal.png';
import iconTurmeric from '../assets/icons/icon_turmeric.png';
import iconChili from '../assets/icons/icon_chili.png';
import iconPepper from '../assets/icons/icon_pepper.png';
import iconCoriander from '../assets/icons/icon_coriander.png';
import iconSaffron from '../assets/icons/icon_saffron.png';
import iconPaneer from '../assets/icons/icon_paneer.png';
import iconSugar from '../assets/icons/icon_sugar.png';

export const categoryIcons = {
    dairy: iconMilk,
    honey: iconHoney,
    spices: iconSpices,
    ghee: iconGhee,
    oil: iconOil,
    condiments: iconSalt,
    beverage: iconTea,
    pulses: iconDal,
};

// Per-test icons — each test gets a specific, contextual image
export const testIcons = {
    milk_water_001: iconMilk,
    milk_starch_002: iconMilk,
    paneer_starch_003: iconPaneer,
    ghee_vanaspati_004: iconGhee,
    turmeric_metanil_005: iconTurmeric,
    chili_brick_006: iconChili,
    pepper_papaya_007: iconPepper,
    coriander_saw_008: iconCoriander,
    saffron_dye_009: iconSaffron,
    honey_water_010: iconHoney,
    oil_argemone_011: iconOil,
    salt_chalk_012: iconSalt,
    sugar_chalk_013: iconSugar,
    tea_iron_014: iconTea,
    dal_dye_015: iconDal,
};

// Step instruction icon hints (keep as emoji — these are action icons, not food)
export const stepIcon = (instruction) => {
    const lower = (instruction || '').toLowerCase();
    if (lower.includes('iodine') || lower.includes('nitric') || lower.includes('acid')) return '🧪';
    if (lower.includes('magnet')) return '🧲';
    if (lower.includes('observe') || lower.includes('check') || lower.includes('color')) return '👁️';
    if (lower.includes('water') || lower.includes('drop')) return '💧';
    if (lower.includes('stir') || lower.includes('shake') || lower.includes('mix')) return '🥄';
    if (lower.includes('soak') || lower.includes('wait') || lower.includes('settle') || lower.includes('stand') || lower.includes('minute')) return '⏳';
    if (lower.includes('spread') || lower.includes('surface') || lower.includes('plate')) return '🍽️';
    if (lower.includes('melt') || lower.includes('sugar') || lower.includes('jar')) return '🫙';
    return '🔬';
};
