// Загрузка и отображение данных гостя
document.addEventListener('DOMContentLoaded', function() {
    // Получаем данные из localStorage
    const guests = JSON.parse(localStorage.getItem('weddingGuests') || '[]');
    const lastGuest = guests[guests.length - 1];
    
    if (!lastGuest) {
        window.location.href = 'index.html';
        return;
    }
    
    // Форматируем данные для отображения
    const summaryContent = document.getElementById('summaryContent');
    const debugContent = document.getElementById('debugContent');
    
    // Создаем красивое отображение
    let summaryHtml = '';
    
    // Имя
    summaryHtml += `
        <div class="summary-item">
            <span class="summary-label">Имя:</span>
            <span class="summary-value">${escapeHtml(lastGuest.name)}</span>
        </div>
    `;
    
    // Присутствие
    const attendText = lastGuest.attend === 'yes' ? '✅ Да, с удовольствием' : '❌ Не смогу';
    summaryHtml += `
        <div class="summary-item">
            <span class="summary-label">Присутствие:</span>
            <span class="summary-value">${attendText}</span>
        </div>
    `;
    
    // Напитки (если есть)
    if (lastGuest.alcohol && lastGuest.alcohol.length > 0) {
        const alcoholText = lastGuest.alcohol.map(drink => {
            const drinkMap = {
                'champagne': '🍾 Шампанское',
                'white wine': '🥂 Белое вино',
                'red wine': '🍷 Красное вино',
                'vodka': '🥃 Водка',
                'whiskey': '🥃 Виски',
                'none': '🚫 Не пью алкоголь'
            };
            return drinkMap[drink] || drink;
        }).join('<br>');
        
        summaryHtml += `
            <div class="summary-item">
                <span class="summary-label">Напитки:</span>
                <span class="summary-value">${alcoholText}</span>
            </div>
        `;
    }
    
    // Время заполнения
    if (lastGuest.timestamp) {
        summaryHtml += `
            <div class="summary-item">
                <span class="summary-label">Время:</span>
                <span class="summary-value">${escapeHtml(lastGuest.timestamp)}</span>
            </div>
        `;
    }
    
    summaryContent.innerHTML = summaryHtml;
    
    // Debug информация (полные данные)
    if (debugContent) {
        debugContent.textContent = JSON.stringify(lastGuest, null, 2);
    }
    
    // Функция для экранирования HTML
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});