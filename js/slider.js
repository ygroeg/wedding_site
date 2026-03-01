// js/slider.js
let currentWish = 1;
let wishes = [];

function initSlider() {
    const wishSlider = document.getElementById('wishSlider');
    if (!wishSlider) return;
    
    // Получаем текущий язык
    const currentLang = localStorage.getItem('selectedLanguage') || 'ru';
    
    // Загружаем пожелания на текущем языке
    const wishesData = [
        translations[currentLang]['wish_1'],
        translations[currentLang]['wish_2'],
        translations[currentLang]['wish_3']
    ];
    
    // Очищаем контейнер
    wishSlider.innerHTML = '';
    
    // Добавляем клон последнего элемента в начало
    const firstClone = document.createElement('div');
    firstClone.className = 'wish-item';
    firstClone.textContent = wishesData[wishesData.length - 1];
    wishSlider.appendChild(firstClone);
    
    // Добавляем оригинальные элементы
    wishesData.forEach(text => {
        const div = document.createElement('div');
        div.className = 'wish-item';
        div.textContent = text;
        wishSlider.appendChild(div);
    });
    
    // Добавляем клон первого элемента в конец
    const lastClone = document.createElement('div');
    lastClone.className = 'wish-item';
    lastClone.textContent = wishesData[0];
    wishSlider.appendChild(lastClone);
    
    // Обновляем ссылки на элементы
    wishes = document.querySelectorAll('.wish-item');
    
    // Устанавливаем начальную позицию на первом оригинальном элементе
    currentWish = 1;
    updateWishSlider(false);
}

function updateWishSlider(animate = true) {
    const wishSlider = document.getElementById('wishSlider');
    const wishCounter = document.getElementById('wishCounter');
    if (!wishSlider || !wishCounter) return;
    
    if (!animate) {
        wishSlider.style.transition = 'none';
        wishSlider.style.transform = `translateX(-${currentWish * 100}%)`;
        setTimeout(() => {
            wishSlider.style.transition = 'transform 0.3s ease';
        }, 50);
    } else {
        wishSlider.style.transform = `translateX(-${currentWish * 100}%)`;
    }
    
    // Обновляем счетчик (вычитаем 1 из-за клона в начале)
    const originalIndex = currentWish - 1;
    const currentLang = localStorage.getItem('selectedLanguage') || 'ru';
    const totalWishes = 3; // Всегда 3 пожелания
    
    if (originalIndex >= 0 && originalIndex < totalWishes) {
        wishCounter.textContent = `${originalIndex + 1}/${totalWishes}`;
    }
}

window.nextWish = function() {
    currentWish++;
    updateWishSlider(true);
    
    // Если дошли до последнего клона, мгновенно перескакиваем на первый оригинальный
    if (currentWish === wishes.length - 1) {
        setTimeout(() => {
            currentWish = 1;
            updateWishSlider(false);
        }, 300);
    }
}

window.prevWish = function() {
    currentWish--;
    updateWishSlider(true);
    
    // Если дошли до первого клона, мгновенно перескакиваем на последний оригинальный
    if (currentWish === 0) {
        setTimeout(() => {
            currentWish = wishes.length - 2;
            updateWishSlider(false);
        }, 300);
    }
}

// Функция для обновления слайдера при смене языка
window.updateWishesSlider = function(lang) {
    const wishSlider = document.getElementById('wishSlider');
    if (!wishSlider) return;
    
    const wishesData = [
        translations[lang]['wish_1'],
        translations[lang]['wish_2'],
        translations[lang]['wish_3']
    ];
    
    // Обновляем все слайды
    const items = document.querySelectorAll('.wish-item');
    if (items.length === 5) { // 2 клона + 3 оригинала
        items[0].textContent = wishesData[2]; // первый клон
        items[1].textContent = wishesData[0]; // оригинал 1
        items[2].textContent = wishesData[1]; // оригинал 2
        items[3].textContent = wishesData[2]; // оригинал 3
        items[4].textContent = wishesData[0]; // последний клон
    }
    
    // Сбрасываем позицию
    currentWish = 1;
    updateWishSlider(false);
};