// js/main.js

// Функция для получения текущего языка
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'ru';
}

// Функция для получения перевода
function translate(key) {
    const lang = getCurrentLanguage();
    return translations[lang]?.[key] || translations['ru'][key] || key;
}

// Функция для установки языка
function setLanguage(lang) {
    // Сохраняем выбор пользователя
    localStorage.setItem('selectedLanguage', lang);

    // Обновляем все элементы с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang]?.[key];
        
        if (translation) {
            if (element.tagName === 'TITLE' || element.tagName === 'INPUT') {
                element.textContent = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // Обновляем placeholder'ы
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = translations[lang]?.[key];
        if (translation) {
            element.placeholder = translation;
        }
    });

    // Обновляем заголовок страницы
    const titleKey = document.querySelector('title')?.getAttribute('data-i18n');
    if (titleKey && translations[lang]?.[titleKey]) {
        document.title = translations[lang][titleKey];
    }

    // Обновляем data-color атрибуты для точек дресс-кода
    document.querySelectorAll('.dot').forEach(dot => {
        const colorKey = dot.getAttribute('data-color-key');
        if (colorKey && translations[lang]?.[colorKey]) {
            dot.setAttribute('data-color', translations[lang][colorKey]);
        }
    });

    // Обновляем активный класс у кнопок переключения языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[data-lang="${lang}"]`)?.classList.add('active');

    // Обновляем слайдер пожеланий, если он существует
    if (typeof window.updateWishesSlider === 'function') {
        window.updateWishesSlider(lang);
    }
}

// Функция для переключения языка
function switchLanguage(lang) {
    setLanguage(lang);
}

// Добавление переключателя языка
function addLanguageSwitcher() {
    if (document.querySelector('.language-switcher')) return;
    
    const currentLang = getCurrentLanguage();
    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.innerHTML = `
        <button class="lang-btn ${currentLang === 'ru' ? 'active' : ''}" data-lang="ru" onclick="switchLanguage('ru')">Русский</button>
        <button class="lang-btn ${currentLang === 'it' ? 'active' : ''}" data-lang="it" onclick="switchLanguage('it')">Italiano</button>
    `;
    
    document.body.insertBefore(switcher, document.body.firstChild);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем переключатель языка
    addLanguageSwitcher();
    
    // Устанавливаем язык из localStorage или русский по умолчанию
    const savedLang = getCurrentLanguage();
    setLanguage(savedLang);
    
    // Инициализация слайдера (если функция существует)
    if (typeof initSlider === 'function') {
        initSlider();
    }
    
    // Intersection Observer для анимации слайдов
    const slides = document.querySelectorAll('.slide');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    slides.forEach(slide => observer.observe(slide));
});

// Делаем функции глобальными
window.translate = translate;
window.switchLanguage = switchLanguage;
window.setLanguage = setLanguage;
window.getCurrentLanguage = getCurrentLanguage;