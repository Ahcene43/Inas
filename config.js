 // config.js - ملف الإعدادات المشترك
let STORE_CONFIG = {
  PRODUCTS: {
    1: { 
      name: "مودال 1", 
      price: 3300, 
      image: "images/modal1.jpg", 
      description: "تصميم مريح وعصري مع تفاصيل راقية تناسب جميع المناسبات",
      availableSizes: ["S", "M", "L"],
      availableColors: ["كما في الصورة", "أبيض", "أسود", "أزرق"]
    },
    2: { 
      name: "مودال 2", 
      price: 3300, 
      image: "images/modal2.jpg", 
      description: "تصميم عملي وأنيق مع خامات عالية الجودة تدوم طويلا",
      availableSizes: ["S", "M", "L", "XL"],
      availableColors: ["كما في الصورة", "أحمر", "أخضر", "زهري"]
    },
    3: { 
      name: "مودال 3", 
      price: 3300, 
      image: "images/modal3.jpg", 
      description: "مثالي للأنشطة اليومية مع تصميم يسمح بحرية الحركة",
      availableSizes: ["M", "L", "XL"],
      availableColors: ["كما في الصورة", "رمادي", "بنفسجي", "أصفر"]
    },
    4: { 
      name: "مودال 4", 
      price: 3300, 
      image: "images/modal4.jpg", 
      description: "تصميم فاخر مع تفاصيل مميزة للمناسبات الخاصة",
      availableSizes: ["S", "L", "XL"],
      availableColors: ["كما في الصورة", "أسود", "أبيض", "ذهبي"]
    },
    5: { 
      name: "مودال 5", 
      price: 3300, 
      image: "images/modal5.jpg", 
      description: "تصميم عملي مع خامات سهلة التنظيف والارتداء",
      availableSizes: ["S", "M", "XL"],
      availableColors: ["كما في الصورة", "أزرق", "أخضر", "برتقالي"]
    },
    6: { 
      name: "مودال 6", 
      price: 3300, 
      image: "images/modal6.jpg", 
      description: "تصميم راق مع خامات سهلة التنظيف والارتداء",
      availableSizes: ["M", "L"],
      availableColors: ["كما في الصورة", "زهري", "بنفسجي", "أحمر"]
    },
    7: { 
      name: "مودال 7", 
      price: 3300, 
      image: "images/modal7.jpg", 
      description: "تصميم جذاب مع خامات سهلة التنظيف والارتداء",
      availableSizes: ["S", "M", "L", "XL"],
      availableColors: ["كما في الصورة", "أسود", "رمادي", "أبيض"]
    },
    8: { 
      name: "مودال 8", 
      price: 3300, 
      image: "images/modal8.jpg", 
      description: "تصميم فاخر مع خامات سهلة التنظيف والارتداء",
      availableSizes: ["L", "XL"],
      availableColors: ["كما في الصورة", "أزرق", "أخضر", "ذهبي"]
    },
    9: { 
      name: "مودال 9", 
      price: 3300, 
      image: "images/modal9.jpg", 
      description: "تصميم ملكي بامتياز",
      availableSizes: ["S", "XL"],
      availableColors: ["كما في الصورة", "أحمر", "ذهبي", "أسود"]
    },
    10: { 
      name: "مودال 10", 
      price: 3300, 
      image: "images/modal10.jpg", 
      description: "تصميم تركي فاخر",
      availableSizes: ["M", "L", "XL"],
      availableColors: ["كما في الصورة", "أبيض", "زهري", "بنفسجي"]
    },
    11: { 
      name: "مودال 11", 
      price: 3300, 
      image: "images/modal11.jpg", 
      description: "تصميم ملكي بامتياز",
      availableSizes: ["S", "M", "L"],
      availableColors: ["كما في الصورة", "أزرق", "رمادي", "أخضر"]
    }
  },
  DELIVERY_PRICES: {
    "00 - إختر الولاية": { home: 0, desk: 0 },
    "01 - أدرار": { home: 1100, desk: 600 },
    "02 - الشلف": { home: 700, desk: 400 },
    "03 - الأغواط": { home: 900, desk: 500 },
    "04 - أم البواقي": { home: 650, desk: 400 },
    "05 - باتنة": { home: 700, desk: 400 },
    "06 - بجاية": { home: 700, desk: 400 },
    "07 - بسكرة": { home: 900, desk: 500 },
    "08 - بشار": { home: 1100, desk: 600 },
    "09 - البليدة": { home: 500, desk: 250 },
    "10 - البويرة": { home: 700, desk: 400 },
    "11 - تمنراست": { home: 1300, desk: 800 },
    "12 - تبسة": { home: 700, desk: 400 },
    "13 - تلمسان": { home: 800, desk: 400 },
    "14 - تيارت": { home: 800, desk: 400 },
    "15 - تيزي وزو": { home: 700, desk: 400 },
    "16 - الجزائر": { home: 500, desk: 250 },
    "17 - الجلفة": { home: 900, desk: 500 },
    "18 - جيجل": { home: 700, desk: 400 },
    "19 - سطيف": { home: 700, desk: 400 },
    "20 - سعيدة": { home: 800, desk: 400 },
    "21 - سكيكدة": { home: 600, desk: 400 },
    "22 - سيدي بلعباس": { home: 700, desk: 400 },
    "23 - عنابة": { home: 700, desk: 400 },
    "24 - قالمة": { home: 600, desk: 400 },
    "25 - قسنطينة": { home: 600, desk: 400 },
    "26 - المدية": { home: 700, desk: 400 },
    "27 - مستغانم": { home: 700, desk: 400 },
    "28 - المسيلة": { home: 800, desk: 400 },
    "29 - معسكر": { home: 700, desk: 400 },
    "30 - ورقلة": { home: 900, desk: 500 },
    "31 - وهران": { home: 800, desk: 400 },
    "32 - البيض": { home: 800, desk: 500 },
    "33 - إليزي": { home: 1300, desk: 600 },
    "34 - برج بوعريريج": { home: 700, desk: 400 },
    "35 - بومرداس": { home: 700, desk: 400 },
    "36 - الطارف": { home: 700, desk: 400 },
    "37 - تندوف": { home: 1300, desk: 600 },
    "38 - تيسمسيلت": { home: 800, desk: 400 },
    "39 - الوادي": { home: 900, desk: 500 },
    "40 - خنشلة": { home: 700, desk: 500 },
    "41 - سوق أهراس": { home: 700, desk: 400 },
    "42 - تيبازة": { home: 700, desk: 400 },
    "43 - ميلة": { home: 500, desk: 350 },
    "44 - عين الدفلى": { home: 700, desk: 400 },
    "45 - النعامة": { home: 800, desk: 500 },
    "46 - عين تموشنت": { home: 800, desk: 400 },
    "47 - غرداية": { home: 900, desk: 500 },
    "48 - غليزان": { home: 700, desk: 400 },
    "49 - تيميمون": { home: 1100, desk: 600 },
    "50 - برج باجي مختار": { home: 1200, desk: 650 },
    "51 - أولاد جلال": { home: 900, desk: 500 },
    "52 - بني عباس": { home: 1100, desk: 600 },
    "53 - عين صالح": { home: 1300, desk: 700 },
    "54 - عين قزام": { home: 1300, desk: 700 },
    "55 - توقرت": { home: 950, desk: 550 },
    "56 - جانت": { home: 1100, desk: 500 },
    "57 - المغير": { home: 950, desk: 550 },
    "58 - المنيعة": { home: 1000, desk: 600 }
  },
  DISCOUNTS: {
    minQuantityForDiscount: 2,
    discountPerItem: 300
  },
  STORE_INFO: {
    name: "BEN&KRAB-Shopp",
    tagline: "متجر أفخم الملابس للأطفال",
    phoneNumbers: ["0671466489", "0551102155"]
  },
  AGE_SIZES: {
    3: "S", 4: "S", 5: "S", 
    6: "M", 7: "M", 
    8: "L", 9: "L", 
    10: "XL", 11: "XL", 12: "XL"
  },
  AVAILABLE_COLORS: [
    "كما في الصورة", "أبيض", "أسود", "رمادي", "أزرق", 
    "أحمر", "أخضر", "زهري", "بنفسجي", "أصفر", "برتقالي", "ذهبي"
  ],
  AVAILABLE_SIZES: ["S", "M", "L", "XL", "XXL"]
};

// دالة جديدة لتحميل الإعدادات من GitHub
async function loadRemoteConfig() {
  try {
    const configUrl = 'https://raw.githubusercontent.com/ahcene43/Inas/main/config.json?t=' + Date.now();
    const response = await fetch(configUrl);
    
    if (response.ok) {
      const remoteConfig = await response.json();
      STORE_CONFIG = { ...STORE_CONFIG, ...remoteConfig };
      console.log('✅ تم تحميل الإعدادات من الخادم');
      
      // تحديث الواجهة إذا كانت موجودة
      if (typeof updateStoreDisplay === 'function') {
        updateStoreDisplay();
      }
    }
  } catch (error) {
    console.log('⚠️ استخدام الإعدادات المحلية', error);
  }
}

// تحميل الإعدادات المحفوظة محلياً
function loadConfig() {
  const saved = localStorage.getItem('storeConfig');
  if (saved) {
    try {
      const parsedConfig = JSON.parse(saved);
      STORE_CONFIG = { ...STORE_CONFIG, ...parsedConfig };
    } catch (e) {
      console.error('Error loading config:', e);
    }
  }
  return STORE_CONFIG;
}

// حفظ الإعدادات محلياً
function saveConfig(config = STORE_CONFIG) {
  localStorage.setItem('storeConfig', JSON.stringify(config));
  
  if (typeof updateLiveStore === 'function') {
    updateLiveStore();
  }
}

// دالة للحفظ على GitHub (تُستدعى من الادمن)
async function saveToGitHub(config) {
  try {
    const githubConfig = JSON.parse(localStorage.getItem('github_config') || '{}');
    
    if (!githubConfig.token || !githubConfig.username || !githubConfig.repo) {
      throw new Error('إعدادات GitHub غير مكتملة');
    }

    const content = btoa(unescape(encodeURIComponent(JSON.stringify(config, null, 2))));
    
    // محاولة الحصول على الـ SHA للملف الموجود
    let sha = '';
    try {
      const existingFile = await fetch(`https://api.github.com/repos/${githubConfig.username}/${githubConfig.repo}/contents/config.json`, {
        headers: {
          'Authorization': `token ${githubConfig.token}`
        }
      });
      
      if (existingFile.ok) {
        const fileData = await existingFile.json();
        sha = fileData.sha;
      }
    } catch (error) {
      // الملف غير موجود، سيتم إنشاؤه
    }

    const response = await fetch(`https://api.github.com/repos/${githubConfig.username}/${githubConfig.repo}/contents/config.json`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${githubConfig.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'تحديث إعدادات المتجر - ' + new Date().toLocaleString('ar-EG'),
        content: content,
        sha: sha,
        branch: githubConfig.branch || 'main'
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'فشل في حفظ الإعدادات على GitHub');
    }

    return await response.json();
  } catch (error) {
    console.error('Error saving to GitHub:', error);
    throw error;
  }
}

// تحميل الإعدادات عند استيراد الملف
loadConfig();
// محاولة تحميل الإعدادات من الخادم
loadRemoteConfig();
