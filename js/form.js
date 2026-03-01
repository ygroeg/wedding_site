// js/form.js

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const otherCheckbox = document.getElementById('otherCheckbox');
    const otherInput = document.getElementById('otherInput');
    
    if (otherCheckbox && otherInput) {
        otherCheckbox.addEventListener('change', function() {
            if (this.checked) {
                otherInput.classList.add('active');
                otherInput.focus();
            } else {
                otherInput.classList.remove('active');
                otherInput.value = '';
            }
        });
    }
    
    // Проверяем, нужно ли прокрутить к анкете
    if (window.location.hash === '#rsvp') {
        setTimeout(scrollToRsvp, 500);
    }
});

// Функция прокрутки к анкете
window.scrollToRsvp = function() {
    const rsvpSection = document.getElementById('rsvp-section');
    if (rsvpSection) {
        rsvpSection.scrollIntoView({ behavior: 'smooth' });
    }
}

window.saveGuestResponse = function() {
    // Получаем текущий язык для сообщений
    const currentLang = localStorage.getItem('selectedLanguage') || 'ru';
    
    // Получаем имя
    const name = document.getElementById('guestName').value.trim();
    
    // Получаем ответ о присутствии
    const attendRadio = document.querySelector('input[name="attend"]:checked');
    const attend = attendRadio ? attendRadio.value : null;
    
    // Получаем все выбранные напитки
    const alcoholCheckboxes = document.querySelectorAll('input[name="alc"]:checked');
    const alcoholPreferences = [];
    
    alcoholCheckboxes.forEach(cb => {
        if (cb.value === 'other') {
            const otherValue = document.getElementById('otherInput').value.trim();
            if (otherValue) {
                alcoholPreferences.push(`Altro: ${otherValue}`);
            }
        } else {
            alcoholPreferences.push(cb.value);
        }
    });
    
    // Валидация
    if (!name) {
        alert(translations[currentLang]['validation_name']);
        return;
    }
    
    if (!attend) {
        alert(translations[currentLang]['validation_attend']);
        return;
    }
    
    // Если человек придет, проверяем что выбрал хотя бы один напиток
    if (attend === 'yes' && alcoholPreferences.length === 0) {
        alert(translations[currentLang]['validation_drinks']);
        return;
    }
    
    // Проверяем что если выбран вариант "Другое", то поле заполнено
    const otherCheckbox = document.getElementById('otherCheckbox');
    const otherInput = document.getElementById('otherInput');
    if (otherCheckbox && otherCheckbox.checked && !otherInput.value.trim()) {
        alert(translations[currentLang]['validation_other']);
        otherInput.focus();
        return;
    }

    // Форматируем напитки для красивого отображения
    const formattedAlcohol = alcoholPreferences.map(drink => {
        const drinkMap = {
            'champagne': '🍾 ' + (currentLang === 'ru' ? 'Шампанское' : 'Champagne'),
            'white wine': '🥂 ' + (currentLang === 'ru' ? 'Белое вино' : 'Vino bianco'),
            'red wine': '🍷 ' + (currentLang === 'ru' ? 'Красное вино' : 'Vino rosso'),
            'vodka': '🥃 ' + (currentLang === 'ru' ? 'Водка' : 'Vodka'),
            'whiskey': '🥃 ' + (currentLang === 'ru' ? 'Виски' : 'Whisky'),
            'none': '🚫 ' + (currentLang === 'ru' ? 'Не пью алкоголь' : 'Non bevo alcolici')
        };
        return drinkMap[drink] || drink;
    }).join(', ');

    // Создаем объект с данными
    const guestData = {
        name: name,
        attend: attend === 'yes' 
            ? (currentLang === 'ru' ? '✅ Да, с удовольствием' : '✅ Sì, con piacere')
            : (currentLang === 'ru' ? '❌ Не смогу' : '❌ Non posso'),
        alcohol: formattedAlcohol || (currentLang === 'ru' ? 'Не указано' : 'Non specificato'),
        timestamp: new Date().toLocaleString(currentLang === 'ru' ? 'ru-RU' : 'it-IT')
    };
    
    // Сохраняем в localStorage
    const existing = localStorage.getItem('weddingGuests');
    const guests = existing ? JSON.parse(existing) : [];
    guests.push(guestData);
    localStorage.setItem('weddingGuests', JSON.stringify(guests));
    
    // Отправка через EmailJS
    sendEmail(guestData);
};

// Функция отправки email
function sendEmail(guestData) {
    const currentLang = localStorage.getItem('selectedLanguage') || 'ru';
    
    // Показываем индикатор загрузки
    const submitBtn = document.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = translations[currentLang]['email_sending'];
    submitBtn.disabled = true;
    
    // Параметры для шаблона EmailJS
    const templateParams = {
        guest_name: guestData.name,
        attendance: guestData.attend,
        drinks: guestData.alcohol,
        submission_time: guestData.timestamp,
        language: currentLang
    };
    
    // Отправка
    emailjs.send('service_8cwu7nd', 'template_o76mz18', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Перенаправляем на страницу благодарности
            window.location.href = 'thankyou.html';
        }, function(error) {
            console.log('FAILED...', error);
            
            // Восстанавливаем кнопку
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Показываем ошибку
            alert(translations[currentLang]['email_error']);
            
            // Всё равно перенаправляем на страницу благодарности
            window.location.href = 'thankyou.html';
        });
}