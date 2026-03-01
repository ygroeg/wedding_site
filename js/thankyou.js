// js/thankyou.js

// Загрузка и отображение данных гостя
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = localStorage.getItem('selectedLanguage') || 'ru';
    
    // Получаем данные из localStorage
    const guests = JSON.parse(localStorage.getItem('weddingGuests') || '[]');
    const lastGuest = guests[guests.length - 1];
    
    if (!lastGuest) {
        window.location.href = 'index.html';
        return;
    }
    
    // Обновляем заголовок
    document.title = translations[currentLang]['thankyou_tab_title'];
    
    // Обновляем все тексты на странице
    updatePageTexts(currentLang);
    
    // Форматируем данные для отображения (если раскомментировать блок в HTML)
    const summaryContent = document.getElementById('summaryContent');
    if (summaryContent) {
        let summaryHtml = '';
        
        // Имя
        summaryHtml += `
            <div class="summary-item">
                <span class="summary-label">${translations[currentLang]['guest_name_label']}:</span>
                <span class="summary-value">${escapeHtml(lastGuest.name)}</span>
            </div>
        `;
        
        // Присутствие
        summaryHtml += `
            <div class="summary-item">
                <span class="summary-label">${translations[currentLang]['attend_label']}:</span>
                <span class="summary-value">${lastGuest.attend}</span>
            </div>
        `;
        
        // Напитки (если есть)
        if (lastGuest.alcohol && lastGuest.alcohol !== (currentLang === 'ru' ? 'Не указано' : 'Non specificato')) {
            summaryHtml += `
                <div class="summary-item">
                    <span class="summary-label">${translations[currentLang]['drinks_label']}:</span>
                    <span class="summary-value">${lastGuest.alcohol}</span>
                </div>
            `;
        }
        
        // Время заполнения
        if (lastGuest.timestamp) {
            summaryHtml += `
                <div class="summary-item">
                    <span class="summary-label">${currentLang === 'ru' ? 'Время:' : 'Ora:'}</span>
                    <span class="summary-value">${escapeHtml(lastGuest.timestamp)}</span>
                </div>
            `;
        }
        
        summaryContent.innerHTML = summaryHtml;
    }
    
    // Debug информация (если есть)
    const debugContent = document.getElementById('debugContent');
    if (debugContent) {
        debugContent.textContent = JSON.stringify(lastGuest, null, 2);
    }
    
    // Функция для экранирования HTML
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Функция обновления текстов на странице
    function updatePageTexts(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang]?.[key]) {
                element.textContent = translations[lang][key];
            }
        });
    }
});