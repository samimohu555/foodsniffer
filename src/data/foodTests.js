export const foodTests = [
    {
        id: 'milk_water_001', categoryId: 'dairy',
        foodItem: 'Milk', foodItem_hi: 'दूध', foodItem_bn: 'দুধ', foodItem_ta: 'பால்',
        adulterant: 'Water', adulterant_hi: 'पानी', adulterant_bn: 'জল', adulterant_ta: 'தண்ணீர்',
        needsChemicals: false, estimatedTime: '1 min', difficulty: 'easy',
        requiredItems: [
            { name: 'A drop of milk', name_hi: 'एक बूंद दूध', name_bn: 'এক ফোঁটা দুধ', name_ta: 'ஒரு சொட்டு பால்', icon: '🥛' },
            { name: 'Smooth slanting surface', name_hi: 'चिकनी तिरछी सतह', name_bn: 'মসৃণ ঢালু পৃষ্ঠ', name_ta: 'மெருகூட்டிய சாய்வான மேற்பரப்பு', icon: '📐' }
        ],
        steps: [
            { instruction: 'Put a drop of milk on a polished slanting surface.', instruction_hi: 'चिकनी तिरछी सतह पर दूध की एक बूंद रखें।', instruction_bn: 'মসৃণ ঢালু পৃষ্ঠে এক ফোঁটা দুধ রাখুন।', instruction_ta: 'மெருகூட்டிய சாய்வான மேற்பரப்பில் ஒரு சொட்டு பால் வைக்கவும்.' },
            { instruction: 'Observe how it flows down.', instruction_hi: 'देखें कि यह कैसे बहता है।', instruction_bn: 'এটি কীভাবে নিচে গড়িয়ে যায় দেখুন।', instruction_ta: 'அது எப்படி கீழே பாய்கிறது பாருங்கள்.' }
        ],
        results: {
            pass: { observation: 'Flows slowly, leaves a white trail.', observation_hi: 'धीरे बहता है, सफेद निशान छोड़ता है।', observation_bn: 'ধীরে বহে, সাদা দাগ ফেলে।', observation_ta: 'மெதுவாக பாய்கிறது, வெள்ளை தடம் விடுகிறது.', verdict: 'SAFE', explanation: 'No water adulteration detected.', explanation_hi: 'पानी की मिलावट नहीं पाई गई।', explanation_bn: 'জলের ভেজাল পাওয়া যায়নি।', explanation_ta: 'நீர் கலப்படம் கண்டறியப்படவில்லை.', shareText: '✅ My milk passed the purity test! Is yours safe? Check → {link} #FoodSniffer' },
            fail: { observation: 'Flows quickly without leaving a mark.', observation_hi: 'बिना निशान छोड़े तेज़ी से बहता है।', observation_bn: 'দাগ না রেখে দ্রুত বহে।', observation_ta: 'தடம் விடாமல் வேகமாக பாய்கிறது.', verdict: 'ALERT', explanation: 'Water likely added to the milk.', explanation_hi: 'दूध में पानी मिलाया गया हो सकता है।', explanation_bn: 'দুধে জল মেশানো হতে পারে।', explanation_ta: 'பாலில் நீர் கலக்கப்பட்டிருக்கலாம்.', healthRisk: 'Contaminated water may carry bacteria.', healthRisk_hi: 'दूषित पानी में बैक्टीरिया हो सकता है।', healthRisk_bn: 'দূষিত জলে ব্যাকটেরিয়া থাকতে পারে।', healthRisk_ta: 'மாசுபட்ட நீரில் கிருமிகள் இருக்கலாம்.', shareText: '⚠️ Alert! Water found in my milk. Test yours → {link} #FoodSniffer' }
        }, source: 'FSSAI DART Manual'
    },
    {
        id: 'milk_starch_002', categoryId: 'dairy',
        foodItem: 'Milk', foodItem_hi: 'दूध', foodItem_bn: 'দুধ', foodItem_ta: 'பால்',
        adulterant: 'Starch', adulterant_hi: 'स्टार्च', adulterant_bn: 'স্টার্চ', adulterant_ta: 'மாவுச்சத்து',
        needsChemicals: true, estimatedTime: '2 min', difficulty: 'easy',
        requiredItems: [
            { name: '5ml milk', name_hi: '5 मिली दूध', name_bn: '৫ মিলি দুধ', name_ta: '5 மிலி பால்', icon: '🥛' },
            { name: 'Iodine solution', name_hi: 'आयोडीन घोल', name_bn: 'আয়োডিন দ্রবণ', name_ta: 'அயோடின் கரைசல்', icon: '🧪' },
            { name: 'White plate', name_hi: 'सफेद प्लेट', name_bn: 'সাদা প্লেট', name_ta: 'வெள்ளை தட்டு', icon: '🍽️' }
        ],
        steps: [
            { instruction: 'Take 5ml milk in a white plate.', instruction_hi: 'सफेद प्लेट में 5 मिली दूध लें।', instruction_bn: 'সাদা প্লেটে ৫ মিলি দুধ নিন।', instruction_ta: 'வெள்ளை தட்டில் 5 மிலி பால் எடுக்கவும்.' },
            { instruction: 'Add 2-3 drops of iodine solution.', instruction_hi: '2-3 बूंद आयोडीन डालें।', instruction_bn: '২-৩ ফোঁটা আয়োডিন দ্রবণ যোগ করুন।', instruction_ta: '2-3 சொட்டு அயோடின் கரைசல் சேர்க்கவும்.' },
            { instruction: 'Observe the color change.', instruction_hi: 'रंग परिवर्तन देखें।', instruction_bn: 'রঙের পরিবর্তন লক্ষ্য করুন।', instruction_ta: 'நிற மாற்றத்தை கவனியுங்கள்.' }
        ],
        results: {
            pass: { observation: 'No color change or slight yellow.', observation_hi: 'कोई रंग परिवर्तन नहीं या हल्का पीला।', observation_bn: 'রঙের পরিবর্তন নেই বা হালকা হলুদ।', observation_ta: 'நிற மாற்றம் இல்லை அல்லது இளம் மஞ்சள்.', verdict: 'SAFE', explanation: 'No starch detected.', explanation_hi: 'स्टार्च नहीं पाया गया।', explanation_bn: 'স্টার্চ পাওয়া যায়নি।', explanation_ta: 'மாவுச்சத்து கண்டறியப்படவில்லை.', shareText: '✅ My milk is starch-free! Test yours → {link}' },
            fail: { observation: 'Turns blue or dark blue.', observation_hi: 'नीला या गहरा नीला हो जाता है।', observation_bn: 'নীল বা গাঢ় নীল হয়।', observation_ta: 'நீலமாக அல்லது கரு நீலமாக மாறுகிறது.', verdict: 'ALERT', explanation: 'Starch added to thicken milk.', explanation_hi: 'दूध गाढ़ा करने के लिए स्टार्च मिलाया गया।', explanation_bn: 'দুধ ঘন করতে স্টার্চ মেশানো হয়েছে।', explanation_ta: 'பாலை கெட்டியாக்க மாவு சேர்க்கப்பட்டது.', healthRisk: 'Digestive issues, false nutrition.', healthRisk_hi: 'पाचन संबंधी समस्याएं, झूठी पोषण क्षमता।', healthRisk_bn: 'হজমের সমস্যা, ভুয়ো পুষ্টি।', healthRisk_ta: 'செரிமான பிரச்சனைகள், பொய்யான உணவுச்சத்து.', shareText: '⚠️ Starch found in my milk! Test yours → {link}' }
        }, source: 'FSSAI DART Manual'
    },
    {
        id: 'paneer_starch_003', categoryId: 'ghee',
        foodItem: 'Paneer', foodItem_hi: 'पनीर', foodItem_bn: 'পনির', foodItem_ta: 'பன்னீர்',
        adulterant: 'Starch', adulterant_hi: 'स्टार्च/मैदा', adulterant_bn: 'স্টার্চ/ময়দা', adulterant_ta: 'மாவு',
        needsChemicals: true, estimatedTime: '2 min', difficulty: 'easy',
        requiredItems: [{ name: 'Small piece of paneer', name_hi: 'पनीर का छोटा टुकड़ा', name_bn: 'ছোট পনির টুকরো', name_ta: 'சிறிய பன்னீர் துண்டு', icon: '🧀' }, { name: 'Iodine solution', name_hi: 'आयोडीन घोल', name_bn: 'আয়োডিন দ্রবণ', name_ta: 'அயோடின் கரைசல்', icon: '🧪' }],
        steps: [
            { instruction: 'Take a small piece of paneer.', instruction_hi: 'पनीर का एक छोटा टुकड़ा लें।', instruction_bn: 'একটি ছোট পনির টুকরো নিন।', instruction_ta: 'சிறிய பன்னீர் துண்டு எடுங்கள்.' },
            { instruction: 'Add 2-3 drops of iodine solution.', instruction_hi: '2-3 बूंद आयोडीन डालें।', instruction_bn: '২-৩ ফোঁটা আয়োডিন দিন।', instruction_ta: '2-3 சொட்டு அயோடின் சேர்க்கவும்.' },
            { instruction: 'Observe color change.', instruction_hi: 'रंग बदलाव देखें।', instruction_bn: 'রঙ পরিবর্তন দেখুন।', instruction_ta: 'நிற மாற்றம் பாருங்கள்.' }
        ],
        results: {
            pass: { observation: 'No blue color.', observation_hi: 'नीला रंग नहीं।', observation_bn: 'নীল রঙ নেই।', observation_ta: 'நீல நிறம் இல்லை.', verdict: 'SAFE', explanation: 'No starch detected in paneer.', explanation_hi: 'पनीर में स्टार्च नहीं।', explanation_bn: 'পনিরে স্টার্চ নেই।', explanation_ta: 'பன்னீரில் மாவு இல்லை.', shareText: '✅ My paneer is pure! → {link}' },
            fail: { observation: 'Turns blue.', observation_hi: 'नीला हो जाता है।', observation_bn: 'নীল হয়।', observation_ta: 'நீலமாக மாறுகிறது.', verdict: 'ALERT', explanation: 'Starch/maida mixed in paneer.', explanation_hi: 'पनीर में स्टार्च/मैदा मिलाया गया।', explanation_bn: 'পনিরে স্টার্চ/ময়দা মেশানো।', explanation_ta: 'பன்னீரில் மாவு கலக்கப்பட்டது.', healthRisk: 'Digestive problems.', healthRisk_hi: 'पाचन संबंधी समस्याएं।', healthRisk_bn: 'হজমের সমস্যা।', healthRisk_ta: 'செரிமான பிரச்சனைகள்.', shareText: '⚠️ Starch in my paneer! → {link}' }
        }, source: 'FSSAI DART Manual'
    },
    {
        id: 'ghee_vanaspati_004', categoryId: 'ghee',
        foodItem: 'Ghee', foodItem_hi: 'घी', foodItem_bn: 'ঘি', foodItem_ta: 'நெய்',
        adulterant: 'Vanaspati', adulterant_hi: 'वनस्पति', adulterant_bn: 'বনস্পতি', adulterant_ta: 'வனஸ்பதி',
        needsChemicals: false, estimatedTime: '3 min', difficulty: 'easy',
        requiredItems: [{ name: '1 tsp ghee', name_hi: '1 चम्मच घी', name_bn: '১ চামচ ঘি', name_ta: '1 தேக்கரண்டி நெய்', icon: '🧈' }, { name: 'Glass jar with lid', name_hi: 'ढक्कन वाला कांच का जार', name_bn: 'ঢাকনা সহ কাচের জার', name_ta: 'மூடியுடன் கண்ணாடி ஜாடி', icon: '🫙' }, { name: 'Warm water', name_hi: 'गर्म पानी', name_bn: 'গরম জল', name_ta: 'சூடான நீர்', icon: '💧' }],
        steps: [
            { instruction: 'Melt a teaspoon of ghee in a jar.', instruction_hi: 'एक चम्मच घी को जार में पिघलाएं।', instruction_bn: 'এক চামচ ঘি জারে গলান।', instruction_ta: 'ஒரு தேக்கரண்டி நெய்யை ஜாடியில் உருக்கவும்.' },
            { instruction: 'Add a pinch of sugar. Close and shake.', instruction_hi: 'चुटकी भर चीनी डालें। बंद करके हिलाएं।', instruction_bn: 'এক চিমটি চিনি দিন। বন্ধ করে ঝাঁকান।', instruction_ta: 'சர்க்கரை சேர்க்கவும். மூடி குலுக்கவும்.' },
            { instruction: 'Let it stand for 5 minutes.', instruction_hi: '5 मिनट रखें।', instruction_bn: '৫ মিনিট রাখুন।', instruction_ta: '5 நிமிடம் வைக்கவும்.' },
            { instruction: 'Open and observe.', instruction_hi: 'खोलें और देखें।', instruction_bn: 'খুলুন এবং দেখুন।', instruction_ta: 'திறந்து கவனியுங்கள்.' }
        ],
        results: {
            pass: { observation: 'No red color at bottom.', observation_hi: 'तले में लाल रंग नहीं।', observation_bn: 'নিচে লাল রঙ নেই।', observation_ta: 'அடியில் சிவப்பு நிறம் இல்லை.', verdict: 'SAFE', explanation: 'No vanaspati detected.', explanation_hi: 'वनस्पति नहीं पाई गई।', explanation_bn: 'বনস্পতি পাওয়া যায়নি।', explanation_ta: 'வனஸ்பதி கண்டறியப்படவில்லை.', shareText: '✅ My ghee is pure! → {link}' },
            fail: { observation: 'Red color appears at bottom.', observation_hi: 'तले में लाल रंग दिखता है।', observation_bn: 'নিচে লাল রঙ দেখা যায়।', observation_ta: 'அடியில் சிவப்பு நிறம் தோன்றுகிறது.', verdict: 'ALERT', explanation: 'Vanaspati (hydrogenated fat) mixed.', explanation_hi: 'वनस्पति (हाइड्रोजनीकृत वसा) मिलाई गई।', explanation_bn: 'বনস্পতি (হাইড্রোজেনেটেড চর্বি) মেশানো।', explanation_ta: 'வனஸ்பதி (ஹைட்ரோஜனேட்டட் கொழுப்பு) கலக்கப்பட்டது.', healthRisk: 'Heart disease, high cholesterol.', healthRisk_hi: 'हृदय रोग, उच्च कोलेस्ट्रॉल।', healthRisk_bn: 'হৃদরোগ, উচ্চ কোলেস্টেরল।', healthRisk_ta: 'இதய நோய், உயர் கொழுப்பு.', shareText: '⚠️ Vanaspati in my ghee! → {link}' }
        }, source: 'FSSAI DART Manual'
    },
    {
        id: 'turmeric_metanil_005', categoryId: 'spices',
        foodItem: 'Turmeric', foodItem_hi: 'हल्दी', foodItem_bn: 'হলুদ', foodItem_ta: 'மஞ்சள்',
        adulterant: 'Metanil Yellow', adulterant_hi: 'मेटानिल येलो', adulterant_bn: 'মেটানিল ইয়েলো', adulterant_ta: 'மெட்டானில் மஞ்சள்',
        needsChemicals: false, estimatedTime: '2 min', difficulty: 'easy',
        requiredItems: [{ name: '1 tsp turmeric powder', name_hi: '1 चम्मच हल्दी पाउडर', name_bn: '১ চামচ হলুদ গুঁড়ো', name_ta: '1 தேக்கரண்டி மஞ்சள் தூள்', icon: '🟡' }, { name: 'A glass of warm water', name_hi: 'एक गिलास गर्म पानी', name_bn: 'এক গ্লাস গরম জল', name_ta: 'ஒரு கிளாஸ் சூடான நீர்', icon: '💧' }],
        steps: [
            { instruction: 'Add a teaspoon of turmeric to warm water.', instruction_hi: 'गर्म पानी में एक चम्मच हल्दी डालें।', instruction_bn: 'গরম জলে এক চামচ হলুদ দিন।', instruction_ta: 'சூடான நீரில் ஒரு தேக்கரண்டி மஞ்சள் சேர்க்கவும்.' },
            { instruction: 'Stir and let it settle for 2 minutes.', instruction_hi: 'हिलाएं और 2 मिनट बैठने दें।', instruction_bn: '২ মিনিট নাড়ুন এবং বসতে দিন।', instruction_ta: 'கலக்கி 2 நிமிடம் தங்க வைக்கவும்.' },
            { instruction: 'Observe the water color.', instruction_hi: 'पानी का रंग देखें।', instruction_bn: 'জলের রঙ দেখুন।', instruction_ta: 'நீரின் நிறத்தை கவனியுங்கள்.' }
        ],
        results: {
            pass: { observation: 'Water turns light earthy yellow.', observation_hi: 'पानी हल्का मिट्टी जैसा पीला होता है।', observation_bn: 'জল হালকা মাটির মতো হলুদ হয়।', observation_ta: 'நீர் இளம் மண்ணின் மஞ்சளாக மாறுகிறது.', verdict: 'SAFE', explanation: 'Pure turmeric.', explanation_hi: 'शुद्ध हल्दी।', explanation_bn: 'বিশুদ্ধ হলুদ।', explanation_ta: 'தூய்மையான மஞ்சள்.', shareText: '✅ My turmeric is pure! → {link}' },
            fail: { observation: 'Water turns bright lemon yellow.', observation_hi: 'पानी चमकीला नींबू पीला हो जाता है।', observation_bn: 'জল উজ্জ্বল লেবু হলুদ হয়।', observation_ta: 'நீர் பளப்பான எலுமிச்சை மஞ்சளாக மாறுகிறது.', verdict: 'ALERT', explanation: 'Metanil Yellow dye detected — a banned industrial dye.', explanation_hi: 'मेटानिल येलो डाई — प्रतिबंधित औद्योगिक रंग।', explanation_bn: 'মেটানিল ইয়েলো রঙ — নিষিদ্ধ শিল্প রঙ।', explanation_ta: 'மெட்டானில் மஞ்சள் சாயம் — தடை செய்யப்பட்ட தொழில் சாயம்.', healthRisk: 'Carcinogenic, liver and kidney damage.', healthRisk_hi: 'कैंसरकारी, लिवर और किडनी को नुकसान।', healthRisk_bn: 'ক্যান্সার সৃষ্টিকারী, লিভার ও কিডনি ক্ষতি।', healthRisk_ta: 'புற்றுநோய் காரணி, கல்லீரல் மற்றும் சிறுநீரக பாதிப்பு.', shareText: '⚠️ Industrial dye found in my turmeric! → {link}' }
        }, source: 'FSSAI DART Manual'
    },
    {
        id: 'chili_brick_006', categoryId: 'spices',
        foodItem: 'Chili Powder', foodItem_hi: 'लाल मिर्च', foodItem_bn: 'লঙ্কা গুঁড়ো', foodItem_ta: 'மிளகாய் தூள்',
        adulterant: 'Brick Powder', adulterant_hi: 'ईंट का चूरा', adulterant_bn: 'ইটের গুঁড়ো', adulterant_ta: 'செங்கல் தூள்',
        needsChemicals: false, estimatedTime: '2 min', difficulty: 'easy',
        requiredItems: [{ name: '1 tsp chili powder', name_hi: '1 चम्मच मिर्च पाउडर', name_bn: '১ চামচ লঙ্কা গুঁড়ো', name_ta: '1 தேக்கரண்டி மிளகாய் தூள்', icon: '🌶️' }, { name: 'Glass of water', name_hi: 'एक गिलास पानी', name_bn: 'এক গ্লাস জল', name_ta: 'ஒரு கிளாஸ் நீர்', icon: '💧' }],
        steps: [
            { instruction: 'Sprinkle chili powder on a glass of water.', instruction_hi: 'एक गिलास पानी पर मिर्च पाउडर छिड़कें।', instruction_bn: 'এক গ্লাস জলে মরিচ গুঁড়ো ছড়িয়ে দিন।', instruction_ta: 'ஒரு கிளாஸ் நீரில் மிளகாய் தூள் தூவுங்கள்.' },
            { instruction: 'Observe what settles at the bottom.', instruction_hi: 'देखें कि तले में क्या बैठता है।', instruction_bn: 'নিচে কী জমে দেখুন।', instruction_ta: 'அடியில் என்ன படிகிறது பாருங்கள்.' }
        ],
        results: {
            pass: { observation: 'Powder stays on top, colors water red.', observation_hi: 'पाउडर ऊपर रहता है, पानी लाल करता है।', observation_bn: 'গুঁড়ো ওপরে থাকে, জল লাল করে।', observation_ta: 'தூள் மேலே தங்குகிறது, நீரை சிவப்பாக்குகிறது.', verdict: 'SAFE', explanation: 'No brick/sand detected.', explanation_hi: 'ईंट/रेत नहीं पाई गई।', explanation_bn: 'ইট/বালি পাওয়া যায়নি।', explanation_ta: 'செங்கல்/மணல் கண்டறியப்படவில்லை.', shareText: '✅ My chili powder is pure! → {link}' },
            fail: { observation: 'Gritty residue settles at the bottom.', observation_hi: 'किरकिरा अवशेष तले में जमता है।', observation_bn: 'করকরে অবশেষ নিচে জমে।', observation_ta: 'கரடுகரட்டான எச்சம் அடியில் படிகிறது.', verdict: 'ALERT', explanation: 'Brick powder or sand detected.', explanation_hi: 'ईंट का चूरा या रेत मिलाई गई।', explanation_bn: 'ইটের গুঁড়ো বা বালি মেশানো।', explanation_ta: 'செங்கல் தூள் அல்லது மணல் கண்டறியப்பட்டது.', healthRisk: 'Abdominal pain, stomach lining damage.', healthRisk_hi: 'पेट दर्द, पेट की परत को नुकसान।', healthRisk_bn: 'পেটে ব্যথা, পাকস্থলীর ক্ষতি।', healthRisk_ta: 'வயிற்று வலி, வயிற்று சுவர் பாதிப்பு.', shareText: '⚠️ Brick powder in my chili! → {link}' }
        }, source: 'FSSAI DART Manual'
    },
    {
        id: 'pepper_papaya_007', categoryId: 'spices',
        foodItem: 'Black Pepper', foodItem_hi: 'काली मिर्च', foodItem_bn: 'গোলমরিচ', foodItem_ta: 'மிளகு',
        adulterant: 'Papaya Seeds', adulterant_hi: 'पपीता के बीज', adulterant_bn: 'পেঁপের বীজ', adulterant_ta: 'பப்பாளி விதை',
        needsChemicals: false, estimatedTime: '1 min', difficulty: 'easy',
        requiredItems: [{ name: 'Black pepper seeds', name_hi: 'काली मिर्च के दाने', name_bn: 'গোলমরিচ দানা', name_ta: 'மிளகு விதைகள்', icon: '⚫' }, { name: 'Glass of water', name_hi: 'एक गिलास पानी', name_bn: 'এক গ্লাস জল', name_ta: 'ஒரு கிளாஸ் நீர்', icon: '💧' }],
        steps: [
            { instruction: 'Drop pepper seeds into a glass of water.', instruction_hi: 'एक गिलास पानी में काली मिर्च डालें।', instruction_bn: 'এক গ্লাস জলে গোলমরিচ ফেলুন।', instruction_ta: 'ஒரு கிளாஸ் நீரில் மிளகு போடுங்கள்.' },
            { instruction: 'Observe which ones float.', instruction_hi: 'देखें कौन से तैरते हैं।', instruction_bn: 'কোনটা ভাসে দেখুন।', instruction_ta: 'எவை மிதக்கின்றன பாருங்கள்.' }
        ],
        results: {
            pass: { observation: 'All seeds sink to the bottom.', observation_hi: 'सभी बीज तले में डूब जाते हैं।', observation_bn: 'সব বীজ তলায় ডোবে।', observation_ta: 'எல்லா விதைகளும் அடியில் மூழ்குகின்றன.', verdict: 'SAFE', explanation: 'Genuine black pepper.', explanation_hi: 'असली काली मिर्च।', explanation_bn: 'আসল গোলমরিচ।', explanation_ta: 'உண்மையான மிளகு.', shareText: '✅ My black pepper is genuine! → {link}' },
            fail: { observation: 'Some seeds float on top.', observation_hi: 'कुछ बीज ऊपर तैरते हैं।', observation_bn: 'কিছু বীজ ওপরে ভাসে।', observation_ta: 'சில விதைகள் மேலே மிதக்கின்றன.', verdict: 'ALERT', explanation: 'Floating seeds are likely papaya seeds.', explanation_hi: 'तैरने वाले बीज पपीते के हो सकते हैं।', explanation_bn: 'ভাসমান বীজ সম্ভবত পেঁপের বীজ।', explanation_ta: 'மிதக்கும் விதைகள் பப்பாளி விதைகளாக இருக்கலாம்.', healthRisk: 'Indigestion, stomach issues.', healthRisk_hi: 'अपच, पेट की समस्याएं।', healthRisk_bn: 'বদহজম, পেটের সমস্যা।', healthRisk_ta: 'அஜீரணமின்மை, வயிற்று பிரச்சனைகள்.', shareText: '⚠️ Papaya seeds in my pepper! → {link}' }
        }, source: 'FSSAI DART Manual'
    },
    {
        id: 'coriander_saw_008', categoryId: 'spices',
        foodItem: 'Coriander Powder', foodItem_hi: 'धनिया पाउडर', foodItem_bn: 'ধনে গুঁড়ো', foodItem_ta: 'கொத்தமல்லி தூள்',
        adulterant: 'Sawdust/Husk', adulterant_hi: 'बुरादा/भूसी', adulterant_bn: 'কাঠের গুঁড়ো', adulterant_ta: 'மரத்தூள்',
        needsChemicals: false, estimatedTime: '2 min', difficulty: 'easy',
        requiredItems: [{ name: '1 tsp coriander powder', name_hi: '1 चम्मच धनिया पाउडर', name_bn: '১ চামচ ধনে গুঁড়ো', name_ta: '1 தேக்கரண்டி கொத்தமல்லி தூள்', icon: '🟤' }, { name: 'Glass of water', name_hi: 'एक गिलास पानी', name_bn: 'এক গ্লাস জল', name_ta: 'ஒரு கிளாஸ் நீர்', icon: '💧' }],
        steps: [
            { instruction: 'Add coriander powder to a glass of water.', instruction_hi: 'एक गिलास पानी में धनिया पाउडर डालें।', instruction_bn: 'এক গ্লাস জলে ধনে গুঁড়ো দিন।', instruction_ta: 'ஒரு கிளாஸ் நீரில் கொத்தமல்லி தூள் சேர்க்கவும்.' },
            { instruction: 'Stir and let it settle.', instruction_hi: 'हिलाएं और बैठने दें।', instruction_bn: 'নাড়ুন এবং বসতে দিন।', instruction_ta: 'கலக்கி படிய வைக்கவும்.' }
        ],
        results: {
            pass: { observation: 'Powder sinks uniformly.', observation_hi: 'पाउडर एक समान डूबता है।', observation_bn: 'গুঁড়ো সমানভাবে ডোবে।', observation_ta: 'தூள் சீராக மூழ்குகிறது.', verdict: 'SAFE', explanation: 'Pure coriander.', explanation_hi: 'शुद्ध धनिया।', explanation_bn: 'বিশুদ্ধ ধনে।', explanation_ta: 'தூய்மையான கொத்தமல்லி.', shareText: '✅ My coriander is pure! → {link}' },
            fail: { observation: 'Light particles float on surface.', observation_hi: 'हल्के कण सतह पर तैरते हैं।', observation_bn: 'হালকা কণা ওপরে ভাসে।', observation_ta: 'இலகுவான துகள்கள் மேற்பரப்பில் மிதக்கின்றன.', verdict: 'ALERT', explanation: 'Sawdust or husk mixed in.', explanation_hi: 'बुरादा या भूसी मिलाई गई।', explanation_bn: 'কাঠের গুঁড়ো বা তুষ মেশানো।', explanation_ta: 'மரத்தூள் அல்லது உமி கலக்கப்பட்டது.', healthRisk: 'Digestive issues.', healthRisk_hi: 'पाचन संबंधी समस्याएं।', healthRisk_bn: 'হজমের সমস্যা।', healthRisk_ta: 'செரிமான பிரச்சனைகள்.', shareText: '⚠️ Sawdust in my coriander! → {link}' }
        }, source: 'FSSAI DART Manual'
    },
    {
        id: 'saffron_dye_009', categoryId: 'spices',
        foodItem: 'Saffron', foodItem_hi: 'केसर', foodItem_bn: 'জাফরান', foodItem_ta: 'குங்குமப்பூ',
        adulterant: 'Artificial Color', adulterant_hi: 'कृत्रिम रंग', adulterant_bn: 'কৃত্রিম রঙ', adulterant_ta: 'செயற்கை நிறம்',
        needsChemicals: false, estimatedTime: '3 min', difficulty: 'easy',
        requiredItems: [{ name: 'Saffron strands', name_hi: 'केसर के रेशे', name_bn: 'জাফরান সুতো', name_ta: 'குங்குமப்பூ இழைகள்', icon: '🧡' }, { name: 'Warm water', name_hi: 'गर्म पानी', name_bn: 'গরম জল', name_ta: 'சூடான நீர்', icon: '💧' }],
        steps: [
            { instruction: 'Put saffron strands in warm water.', instruction_hi: 'गर्म पानी में केसर के रेशे डालें।', instruction_bn: 'গরম জলে জাফরান দিন।', instruction_ta: 'சூடான நீரில் குங்குமப்பூ போடுங்கள்.' },
            { instruction: 'Wait 5 minutes and observe.', instruction_hi: '5 मिनट प्रतीक्षा करें।', instruction_bn: '৫ মিনিট অপেক্ষা করুন।', instruction_ta: '5 நிமிடம் காத்திருங்கள்.' }
        ],
        results: {
            pass: { observation: 'Strands retain color, water turns golden slowly.', observation_hi: 'रेशे रंग बनाए रखते हैं, पानी धीरे-धीरे सुनहरा होता है।', observation_bn: 'সুতো রঙ ধরে রাখে, জল ধীরে সোনালি হয়।', observation_ta: 'இழைகள் நிறத்தை தக்க வைக்கின்றன, நீர் மெதுவாக தங்கநிறமாகும்.', verdict: 'SAFE', explanation: 'Genuine saffron.', explanation_hi: 'असली केसर।', explanation_bn: 'আসল জাফরান।', explanation_ta: 'உண்மையான குங்குமப்பூ.', shareText: '✅ My saffron is genuine! → {link}' },
            fail: { observation: 'Strands lose color immediately, water turns deep red.', observation_hi: 'रेशे तुरंत रंग खो देते हैं, पानी गहरा लाल।', observation_bn: 'সুতো সঙ্গে সঙ্গে রঙ হারায়, জল গাঢ় লাল।', observation_ta: 'இழைகள் உடனே நிறம் இழக்கும், நீர் கரு சிவப்பாகும்.', verdict: 'ALERT', explanation: 'Artificially dyed corn silk or maize threads.', explanation_hi: 'कृत्रिम रंगे मक्के के रेशे।', explanation_bn: 'কৃত্রিম রঙের ভুট্টার সুতো।', explanation_ta: 'செயற்கையாக சாயமிட்ட சோள பட்டு நூல்கள்.', healthRisk: 'Industrial dyes cause cancer.', healthRisk_hi: 'औद्योगिक रंग कैंसर का कारण।', healthRisk_bn: 'শিল্পিক রঙ ক্যান্সার সৃষ্টি করে।', healthRisk_ta: 'தொழில்துறை சாயங்கள் புற்றுநோயை உண்டாக்கும்.', shareText: '⚠️ Fake saffron! Dyed threads! → {link}' }
        }, source: 'FSSAI DART Manual'
    },
    {
        id: 'honey_water_010', categoryId: 'honey',
        foodItem: 'Honey', foodItem_hi: 'शहद', foodItem_bn: 'মধু', foodItem_ta: 'தேன்',
        adulterant: 'Sugar Syrup', adulterant_hi: 'चीनी की चाशनी', adulterant_bn: 'চিনির সিরাপ', adulterant_ta: 'சர்க்கரை பாகு',
        needsChemicals: false, estimatedTime: '1 min', difficulty: 'easy',
        requiredItems: [{ name: '1 tsp honey', name_hi: '1 चम्मच शहद', name_bn: '১ চামচ মধু', name_ta: '1 தேக்கரண்டி தேன்', icon: '🍯' }, { name: 'Glass of water', name_hi: 'एक गिलास पानी', name_bn: 'এক গ্লাস জল', name_ta: 'ஒரு கிளாஸ் நீர்', icon: '💧' }],
        steps: [
            { instruction: 'Fill a glass with water.', instruction_hi: 'एक गिलास पानी भरें।', instruction_bn: 'এক গ্লাস জল ভর্তি করুন।', instruction_ta: 'ஒரு கிளாஸ் நீர் நிரப்புங்கள்.' },
            { instruction: 'Drop a spoonful of honey into it.', instruction_hi: 'एक चम्मच शहद डालें।', instruction_bn: 'এক চামচ মধু ফেলুন।', instruction_ta: 'ஒரு கரண்டி தேன் போடுங்கள்.' },
            { instruction: 'Observe — do NOT stir.', instruction_hi: 'देखें — हिलाएं नहीं।', instruction_bn: 'দেখুন — নাড়বেন না।', instruction_ta: 'கவனியுங்கள் — கலக்காதீர்கள்.' }
        ],
        results: {
            pass: { observation: 'Honey sinks to the bottom as a lump.', observation_hi: 'शहद गांठ बनकर तले में बैठता है।', observation_bn: 'মধু দলা হয়ে তলায় বসে।', observation_ta: 'தேன் கட்டியாக அடியில் மூழ்குகிறது.', verdict: 'SAFE', explanation: 'Pure honey.', explanation_hi: 'शुद्ध शहद।', explanation_bn: 'বিশুদ্ধ মধু।', explanation_ta: 'தூய்மையான தேன்.', shareText: '✅ My honey is pure! → {link}' },
            fail: { observation: 'Honey dissolves quickly in water.', observation_hi: 'शहद पानी में तुरंत घुल जाता है।', observation_bn: 'মধু জলে দ্রুত গলে যায়।', observation_ta: 'தேன் நீரில் வேகமாக கரைகிறது.', verdict: 'ALERT', explanation: 'Sugar syrup or jaggery mixed.', explanation_hi: 'चीनी की चाशनी या गुड़ मिलाया गया।', explanation_bn: 'চিনির সিরাপ বা গুড় মেশানো।', explanation_ta: 'சர்க்கரை பாகு அல்லது வெல்லம் கலக்கப்பட்டது.', healthRisk: 'Hidden sugar, diabetes risk.', healthRisk_hi: 'छुपी चीनी, मधुमेह का खतरा।', healthRisk_bn: 'লুকানো চিনি, ডায়াবেটিসের রিস্ক।', healthRisk_ta: 'மறைமுக சர்க்கரை, நீரிழிவு நோய் ஆபத்து.', shareText: '⚠️ My honey is fake — sugar syrup! → {link}' }
        }, source: 'FSSAI DART Manual'
    },
    {
        id: 'oil_argemone_011', categoryId: 'oil',
        foodItem: 'Mustard Oil', foodItem_hi: 'सरसों का तेल', foodItem_bn: 'সরষের তেল', foodItem_ta: 'கடுகு எண்ணெய்',
        adulterant: 'Argemone Oil', adulterant_hi: 'अर्जिमोन तेल', adulterant_bn: 'আরজিমোন তেল', adulterant_ta: 'ஆர்ஜிமோன் எண்ணெய்',
        needsChemicals: true, estimatedTime: '5 min', difficulty: 'medium',
        requiredItems: [{ name: 'Oil sample', name_hi: 'तेल का नमूना', name_bn: 'তেলের নমুনা', name_ta: 'எண்ணெய் மாதிரி', icon: '🛢️' }, { name: 'Nitric acid (conc.)', name_hi: 'सांद्र नाइट्रिक एसिड', name_bn: 'ঘনীভূত নাইট্রিক অ্যাসিড', name_ta: 'அடர் நைட்ரிக் அமிலம்', icon: '🧪' }],
        safetyWarning: 'Handle nitric acid carefully. Use gloves.', safetyWarning_hi: 'नाइट्रिक एसिड सावधानी से संभालें। दस्ताने का उपयोग करें।', safetyWarning_bn: 'নাইট্রিক অ্যাসিড সাবধানে ব্যবহার করুন। গ্লাভস পরুন।', safetyWarning_ta: 'நைட்ரிக் அமிலத்தை சாவதானமாக கையாளுங்கள். கைஉறை பயன்படுத்தவும்.',
        steps: [
            { instruction: 'Take 2ml of oil in a test tube or small glass.', instruction_hi: 'एक छोटे गिलास में 2 मिली तेल लें।', instruction_bn: '২ মিলি তেল নিন।', instruction_ta: '2 மிலி எண்ணெய் எடுங்கள்.' },
            { instruction: 'Add 2ml concentrated nitric acid. Shake gently.', instruction_hi: '2 मिली सांद्र नाइट्रिक एसिड डालें। धीरे हिलाएं।', instruction_bn: '২ মিলি নাইট্রিক অ্যাসিড দিন।', instruction_ta: '2 மிலி நைட்ரிக் அமிலம் சேர்க்கவும்.' },
            { instruction: 'Observe the color.', instruction_hi: 'रंग देखें।', instruction_bn: 'রঙ দেখুন।', instruction_ta: 'நிறம் பாருங்கள்.' }
        ],
        results: {
            pass: { observation: 'Yellow color — no reddish brown.', observation_hi: 'पीला रंग — लालिमा नहीं।', observation_bn: 'হলুদ রঙ — লালচে বাদামী নেই।', observation_ta: 'மஞ்சள் நிறம் — சிவப்பு-பழுப்பு இல்லை.', verdict: 'SAFE', explanation: 'No argemone contamination.', explanation_hi: 'अर्जिमोन की मिलावट नहीं।', explanation_bn: 'আর্জিমোন দূষণ নেই।', explanation_ta: 'ஆர்ஜிமோன் கலப்படம் இல்லை.', shareText: '✅ My mustard oil is safe! → {link}' },
            fail: { observation: 'Turns reddish brown.', observation_hi: 'लाल-भूरा हो जाता है।', observation_bn: 'লালচে বাদামী হয়।', observation_ta: 'சிவப்பு-பழுப்பாக மாறுகிறது.', verdict: 'ALERT', explanation: 'Argemone oil detected — highly toxic.', explanation_hi: 'अर्जिमोन तेल — अत्यंत विषैला।', explanation_bn: 'আর্জিমোন তেল — অত্যন্ত বিষাক্ত।', explanation_ta: 'ஆர்ஜிமோன் எண்ணெய் — மிகவும் நச்சு.', healthRisk: 'Epidemic dropsy, glaucoma, blindness.', healthRisk_hi: 'महामारी ड्रॉप्सी, ग्लूकोमा, अंधापन।', healthRisk_bn: 'মহামারী ড্রপসি, গ্লুকোমা, অন্ধত্ব।', healthRisk_ta: 'தொற்றுநோய், க்ளூக்கோமா, கண் பார்வை இழப்பு.', shareText: '⚠️ Toxic argemone oil in mustard oil! → {link}' }
        }, source: 'FSSAI DART Manual'
    },
    {
        id: 'salt_chalk_012', categoryId: 'condiments',
        foodItem: 'Salt', foodItem_hi: 'नमक', foodItem_bn: 'নুন', foodItem_ta: 'உப்பு',
        adulterant: 'Chalk Powder', adulterant_hi: 'चॉक पाउडर', adulterant_bn: 'চক পাউডার', adulterant_ta: 'சுண்ணாம்பு தூள்',
        needsChemicals: false, estimatedTime: '2 min', difficulty: 'easy',
        requiredItems: [{ name: '1 tsp salt', name_hi: '1 चम्मच नमक', name_bn: '১ চামচ নুন', name_ta: '1 தேக்கரண்டி உப்பு', icon: '🧂' }, { name: 'Glass of water', name_hi: 'एक गिलास पानी', name_bn: 'এক গ্লাস জল', name_ta: 'ஒரு கிளாஸ் நீர்', icon: '💧' }],
        steps: [
            { instruction: 'Dissolve a teaspoon of salt in a glass of water.', instruction_hi: 'एक गिलास पानी में नमक घोलें।', instruction_bn: 'এক গ্লাস জলে নুন গোলান।', instruction_ta: 'ஒரு கிளாஸ் நீரில் உப்பு கரைக்கவும்.' },
            { instruction: 'Check if anything remains undissolved.', instruction_hi: 'देखें कि कुछ अघुलनशील बचता है।', instruction_bn: 'কিছু অদ্রবণীয় আছে কিনা দেখুন।', instruction_ta: 'கரையாமல் எதாவது இருக்கிறதா பாருங்கள்.' }
        ],
        results: {
            pass: { observation: 'Salt dissolves completely. Water is clear.', observation_hi: 'नमक पूरी तरह घुल जाता है।', observation_bn: 'নুন সম্পূর্ণ গলে যায়। জল পরিষ্কার।', observation_ta: 'உப்பு முழுவதுமாக கரைகிறது. நீர் தெளிவாக உள்ளது.', verdict: 'SAFE', explanation: 'Pure salt.', explanation_hi: 'शुद्ध नमक।', explanation_bn: 'বিশুদ্ধ নুন।', explanation_ta: 'தூய்மையான உப்பு.', shareText: '✅ My salt is pure! → {link}' },
            fail: { observation: 'White residue remains at bottom.', observation_hi: 'तले में सफेद अवशेष बचता है।', observation_bn: 'নিচে সাদা অবশেষ থাকে।', observation_ta: 'அடியில் வெள்ளை எச்சம் தங்குகிறது.', verdict: 'ALERT', explanation: 'Chalk or white stone powder mixed.', explanation_hi: 'चॉक या सफेद पत्थर का पाउडर।', explanation_bn: 'চক বা সাদা পাথরের গুঁড়ো মেশানো।', explanation_ta: 'சுண்ணாம்பு அல்லது வெள்ளை கல் தூள் கலக்கப்பட்டது.', healthRisk: 'Kidney stones, stomach issues.', healthRisk_hi: 'गुर्दे की पथरी, पेट की समस्याएं।', healthRisk_bn: 'কিডনি পাথর, পেটের সমস্যা।', healthRisk_ta: 'சிறுநீரக கற்கள், வயிற்று பிரச்சனைகள்.', shareText: '⚠️ Chalk in my salt! → {link}' }
        }, source: 'FSSAI DART Manual'
    },
    {
        id: 'sugar_chalk_013', categoryId: 'condiments',
        foodItem: 'Sugar', foodItem_hi: 'चीनी', foodItem_bn: 'চিনি', foodItem_ta: 'சர்க்கரை',
        adulterant: 'Chalk Powder', adulterant_hi: 'चॉक पाउडर', adulterant_bn: 'চক পাউডার', adulterant_ta: 'சுண்ணாம்பு',
        needsChemicals: false, estimatedTime: '2 min', difficulty: 'easy',
        requiredItems: [{ name: '1 tsp sugar', name_hi: '1 चम्मच चीनी', name_bn: '১ চামচ চিনি', name_ta: '1 தேக்கரண்டி சர்க்கரை', icon: '🍬' }, { name: 'Glass of water', name_hi: 'एक गिलास पानी', name_bn: 'এক গ্লাস জল', name_ta: 'ஒரு கிளாஸ் நீர்', icon: '💧' }],
        steps: [
            { instruction: 'Dissolve sugar in a glass of water.', instruction_hi: 'पानी में चीनी घोलें।', instruction_bn: 'জলে চিনি গোলান।', instruction_ta: 'நீரில் சர்க்கரை கரைக்கவும்.' },
            { instruction: 'Check for residue.', instruction_hi: 'अवशेष की जांच करें।', instruction_bn: 'অবশিষ্ট আছে কিনা দেখুন।', instruction_ta: 'எச்சம் உள்ளதா பாருங்கள்.' }
        ],
        results: {
            pass: { observation: 'Dissolves completely.', observation_hi: 'पूरी तरह घुल जाती है।', observation_bn: 'সম্পূর্ণ গলে যায়।', observation_ta: 'முழுவதுமாக கரைகிறது.', verdict: 'SAFE', explanation: 'Pure sugar.', explanation_hi: 'शुद्ध चीनी।', explanation_bn: 'বিশুদ্ধ চিনি।', explanation_ta: 'தூய்மையான சர்க்கரை.', shareText: '✅ My sugar is pure! → {link}' },
            fail: { observation: 'White powder settles at bottom.', observation_hi: 'सफेद पाउडर तले में बैठता है।', observation_bn: 'সাদা গুঁড়ো নিচে বসে।', observation_ta: 'வெள்ளை தூள் அடியில் படிகிறது.', verdict: 'ALERT', explanation: 'Chalk or washing soda mixed.', explanation_hi: 'चॉक या धोने का सोडा।', explanation_bn: 'চক বা ধোয়ার সোডা মেশানো।', explanation_ta: 'சுண்ணாம்பு அல்லது சலவை சோடா கலக்கப்பட்டது.', healthRisk: 'Stomach irritation.', healthRisk_hi: 'पेट में जलन।', healthRisk_bn: 'পেটে জ্বালা।', healthRisk_ta: 'வயிற்று எரிச்சல்.', shareText: '⚠️ Chalk in my sugar! → {link}' }
        }, source: 'FSSAI DART Manual'
    },
    {
        id: 'tea_iron_014', categoryId: 'beverage',
        foodItem: 'Tea Leaves', foodItem_hi: 'चाय पत्ती', foodItem_bn: 'চা পাতা', foodItem_ta: 'தேயிலை',
        adulterant: 'Iron Filings', adulterant_hi: 'लोहे का बुरादा', adulterant_bn: 'লোহার গুঁড়ো', adulterant_ta: 'இரும்பு தூள்',
        needsChemicals: false, estimatedTime: '1 min', difficulty: 'easy',
        requiredItems: [{ name: 'Tea leaves', name_hi: 'चाय पत्ती', name_bn: 'চা পাতা', name_ta: 'தேயிலை', icon: '🍵' }, { name: 'Magnet or phone with magnet case', name_hi: 'चुंबक या मैग्नेट केस वाला फोन', name_bn: 'চুম্বক বা ম্যাগনেট কেসওয়ালা ফোন', name_ta: 'காந்தம் அல்லது காந்த கவசமுள்ள போன்', icon: '🧲' }],
        steps: [
            { instruction: 'Spread tea leaves on a flat surface.', instruction_hi: 'चाय पत्ती को समतल सतह पर फैलाएं।', instruction_bn: 'চা পাতা সমতলে ছড়িয়ে দিন।', instruction_ta: 'தேயிலையை தட்டையான மேற்பரப்பில் பரப்புங்கள்.' },
            { instruction: 'Move a magnet slowly over the leaves.', instruction_hi: 'पत्तियों पर धीरे-धीरे चुंबक घुमाएं।', instruction_bn: 'পাতার ওপর ধীরে চুম্বক ঘোরান।', instruction_ta: 'இலைகள் மேல் காந்தத்தை மெதுவாக நகர்த்துங்கள்.' }
        ],
        results: {
            pass: { observation: 'Nothing sticks to the magnet.', observation_hi: 'चुंबक पर कुछ नहीं चिपकता।', observation_bn: 'চুম্বকে কিছু লাগে না।', observation_ta: 'காந்தத்தில் எதுவும் ஒட்டவில்லை.', verdict: 'SAFE', explanation: 'No iron filings.', explanation_hi: 'लोहे का बुरादा नहीं।', explanation_bn: 'লোহার গুঁড়ো নেই।', explanation_ta: 'இரும்பு தூள் இல்லை.', shareText: '✅ My tea is pure! → {link}' },
            fail: { observation: 'Tiny metallic particles stick to the magnet.', observation_hi: 'छोटे धात्विक कण चुंबक पर चिपकते हैं।', observation_bn: 'ছোট ধাতব কণা চুম্বকে লাগে।', observation_ta: 'சிறிய உலோகத் துகள்கள் காந்தத்தில் ஒட்டுகின்றன.', verdict: 'ALERT', explanation: 'Iron filings mixed for extra weight.', explanation_hi: 'वज़न बढ़ाने के लिए लोहे का बुरादा मिलाया गया।', explanation_bn: 'ওজন বাড়াতে লোহার গুঁড়ো মেশানো।', explanation_ta: 'எடையை அதிகரிக்க இரும்பு தூள் கலக்கப்பட்டது.', healthRisk: 'Iron toxicity, liver damage.', healthRisk_hi: 'लौह विषाक्तता, लिवर को नुकसान।', healthRisk_bn: 'লোহার বিষাক্ততা, লিভারের ক্ষতি।', healthRisk_ta: 'இரும்பு நச்சுத்தன்மை, கல்லீரல் பாதிப்பு.', shareText: '⚠️ Iron filings in my tea! → {link}' }
        }, source: 'FSSAI DART Manual'
    },
    {
        id: 'dal_dye_015', categoryId: 'pulses',
        foodItem: 'Dal / Pulses', foodItem_hi: 'दाल', foodItem_bn: 'ডাল', foodItem_ta: 'பருப்பு',
        adulterant: 'Artificial Dye', adulterant_hi: 'कृत्रिम रंग', adulterant_bn: 'কৃত্রিম রঙ', adulterant_ta: 'செயற்கை சாயம்',
        needsChemicals: false, estimatedTime: '2 min', difficulty: 'easy',
        requiredItems: [{ name: 'Handful of dal', name_hi: 'मुट्ठी भर दाल', name_bn: 'এক মুঠো ডাল', name_ta: 'ஒரு கைப்பிடி பருப்பு', icon: '🥣' }, { name: 'Glass of water', name_hi: 'एक गिलास पानी', name_bn: 'এক গ্লাস জল', name_ta: 'ஒரு கிளாஸ் நீர்', icon: '💧' }],
        steps: [
            { instruction: 'Soak dal in water for 30 minutes.', instruction_hi: '30 मिनट पानी में दाल भिगोएं।', instruction_bn: '৩০ মিনিট জলে ডাল ভিজিয়ে রাখুন।', instruction_ta: '30 நிமிடம் நீரில் பருப்பு ஊற வைக்கவும்.' },
            { instruction: 'Check water color after soaking.', instruction_hi: 'भिगोने के बाद पानी का रंग देखें।', instruction_bn: 'ভেজানোর পর জলের রঙ দেখুন।', instruction_ta: 'ஊறிய பின் நீரின் நிறம் பாருங்கள்.' }
        ],
        results: {
            pass: { observation: 'Water remains clear or slightly cloudy.', observation_hi: 'पानी साफ या थोड़ा मटमैला रहता है।', observation_bn: 'জল পরিষ্কার বা সামান্য ঘোলাটে।', observation_ta: 'நீர் தெளிவாக அல்லது சற்றே கலங்கலாக இருக்கிறது.', verdict: 'SAFE', explanation: 'No artificial coloring.', explanation_hi: 'कृत्रिम रंग नहीं।', explanation_bn: 'কৃত্রিম রঙ নেই।', explanation_ta: 'செயற்கை நிறம் இல்லை.', shareText: '✅ My dal is pure! → {link}' },
            fail: { observation: 'Water turns yellow or has a colored tint.', observation_hi: 'पानी पीला या रंगीन हो जाता है।', observation_bn: 'জল হলুদ হয় বা রঙিন আভা থাকে।', observation_ta: 'நீர் மஞ்சளாக அல்லது நிற கலந்ததாக இருக்கிறது.', verdict: 'ALERT', explanation: 'Artificial dye used to enhance color.', explanation_hi: 'रंग बढ़ाने के लिए कृत्रिम रंग मिलाया गया।', explanation_bn: 'রঙ বাড়াতে কৃত্রিম রঙ মেশানো।', explanation_ta: 'நிறத்தை மேம்படுத்த செயற்கை சாயம் பயன்படுத்தப்பட்டது.', healthRisk: 'Toxic dyes cause liver, kidney damage.', healthRisk_hi: 'विषैले रंग लिवर, किडनी को नुकसान पहुंचाते हैं।', healthRisk_bn: 'বিষাক্ত রঙ লিভার, কিডনির ক্ষতি করে।', healthRisk_ta: 'நச்சுச் சாயங்கள் கல்லீரல், சிறுநீரகத்தை பாதிக்கும்.', shareText: '⚠️ Dye in my dal! → {link}' }
        }, source: 'FSSAI DART Manual'
    }
];
