// Обработка формы с "Другое" полем
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
});

window.saveGuestResponse = function() {
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
                alcoholPreferences.push(`Другое: ${otherValue}`);
            }
        } else {
            alcoholPreferences.push(cb.value);
        }
    });
    
    // Валидация
    if (!name) {
        alert('Пожалуйста, введите имя');
        return;
    }
    
    if (!attend) {
        alert('Пожалуйста, укажите, планируете ли Вы присутствовать');
        return;
    }
    
    // Если человек придет, проверяем что выбрал хотя бы один напиток
    if (attend === 'yes' && alcoholPreferences.length === 0) {
        alert('Пожалуйста, укажите ваши предпочтения по напиткам');
        return;
    }
    
    // Проверяем что если выбран вариант "Другое", то поле заполнено
    const otherCheckbox = document.getElementById('otherCheckbox');
    const otherInput = document.getElementById('otherInput');
    if (otherCheckbox && otherCheckbox.checked && !otherInput.value.trim()) {
        alert('Пожалуйста, укажите ваш вариант напитка');
        otherInput.focus();
        return;
    }

    // Создаем объект с данными
    const guestData = {
        name: name,
        attend: attend,
        alcohol: alcoholPreferences,
        timestamp: new Date().toLocaleString('ru-RU')
    };
    
    // Сохраняем в localStorage
    const existing = localStorage.getItem('weddingGuests');
    const guests = existing ? JSON.parse(existing) : [];
    guests.push(guestData);
    localStorage.setItem('weddingGuests', JSON.stringify(guests));
    
    // Показываем персонализированное сообщение
    let attendMessage = '';
    if (attend === 'yes') {
        attendMessage = 'Ждём вас!';
    } else if (attend === 'no') {
        attendMessage = 'Будем скучать!';
    } else {
        attendMessage = 'Будем надеяться на ваше присутствие!';
    }
    
    alert(`Спасибо, ${name}! ${attendMessage} ❤️`);
    
    // Очищаем форму
    document.getElementById('guestName').value = '';
    document.querySelectorAll('input[name="attend"]').forEach(r => r.checked = false);
    document.querySelectorAll('input[name="alc"]').forEach(r => r.checked = false);
    if (document.getElementById('otherInput')) {
        document.getElementById('otherInput').value = '';
        document.getElementById('otherInput').classList.remove('active');
    }
};