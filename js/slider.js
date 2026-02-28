// Слайдер пожеланий
let currentWish = 1;
let wishes = [];
const wishSlider = document.getElementById('wishSlider');
const wishCounter = document.getElementById('wishCounter');

// Оригинальные пожелания
const wishesData = [
    'Будем очень признательны, если Вы воздержитесь от криков «Горько». Ведь поцелуй – это знак выражения чувств, и он не может быть по заказу.',
    'Мы с теплотой относимся к детям любого возраста. Но для свадьбы выбрали формат 18+.',
    'Пожалуйста, не дарите нам цветы! Мы не успеем насладиться их красотой и ароматом. Если хотите подарить нам ценный и нужный подарок, мы будем очень благодарны за вклад в бюджет нашей молодой семьи.'
];

// Создаем элементы с клонами для бесконечной прокрутки
function initSlider() {
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
    if (originalIndex >= 0 && originalIndex < wishesData.length) {
        wishCounter.textContent = `${originalIndex + 1}/${wishesData.length}`;
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