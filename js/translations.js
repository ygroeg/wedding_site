// js/translations.js
const translations = {
  ru: {
    // Titles
    'tab_title': 'Таня и Гоша · Приглашение на свадьбу',
    'rsvp_tab_title': 'Анкета гостя · Таня и Гоша',
    'thankyou_tab_title': 'Спасибо! · Таня и Гоша',
    
    // Общие элементы
    'tanya': 'Таня',
    'and': '&',
    'gosha': 'Гоша',
    'date_7_may': '7 мая, 2026',
    'date_time': '7 мая, 2026 | 17:00',
    'date_time_short': '7 мая, 2026 | 17:00',
    
    // Слайд 1
    'farewell_see_you': 'До скорой встречи!',
    'farewell_with_love': 'С любовью',
    
    // Слайд 2 - Приглашение
    'invitation_line1': 'Дорогие',
    'invitation_line2': 'друзья и родные!',
    'invitation_text': 'Ну вот и всё, дождались! :) Мы решили пожениться и хотим видеть вас в качестве того, кто разделит с нами этот долгожданный день!',
    'calendar_month': 'Май 2026',
    'calendar_mon': 'Пн',
    'calendar_tue': 'Вт',
    'calendar_wed': 'Ср',
    'calendar_thu': 'Чт',
    'calendar_fri': 'Пт',
    'calendar_sat': 'Сб',
    'calendar_sun': 'Вс',
    
    // Слайд 3 - Место
    'venue_registration_title': 'Место регистрации',
    'venue_registration_name': 'Дворец бракосочетания №2',
    'venue_registration_address': 'ул. Фурштатская 52, Санкт-Петербург',
    'venue_banquet_title': 'Место банкета',
    'venue_banquet_text': 'Место проведения будет уточнено позже.',
    'btn_open_map': 'Открыть карту',
    
    // Слайд 4 - Тайминг
    'timing_title': 'Тайминг',
    'timing_ceremony': 'Церемония регистрации',
    'timing_banquet': 'Банкет',
    'timing_end': 'Завершение вечера',
    
    // Слайд 5 - Дресс-код
    'dresscode_title': 'Дресс-код',
    'dresscode_text': 'Будем рады видеть вас в элегантных образах в весенней палитре:\nшалфей, пыльная роза, дымчато-голубой, светло-серый и глубокий синий.\n\nДопустимы как мягкие, так и более насыщённые вариации этих оттенков.\n\nПриветствуются серебристые акценты и лёгкий деликатный блеск.\n\nПросим по возможности избегать оттенков белого, слишком ярких и неоновых цветов, а также образов в стиле total black.',
    
    // Цвета для дресс-кода
    'color_dusty_rose': 'Пыльная роза',
    'color_deep_rose': 'Глубокая роза',
    'color_wine': 'Винный (приглушённый)',
    'color_light_gray': 'Светло-серый',
    'color_smoky_blue': 'Дымчато-голубой',
    'color_deep_blue': 'Глубокий синий',
    'color_sage': 'Шалфей',
    'color_dark_olive': 'Тёмный оливковый',
    'color_graphite': 'Графит',
    
    // Слайд 6 - Пожелания (слайдер)
    'wishes_title': 'Пожелания',
    'wish_1': 'Будем очень признательны, если Вы воздержитесь от криков «Горько». Ведь поцелуй – это знак выражения чувств, и он не может быть по заказу.',
    'wish_2': 'Мы с теплотой относимся к детям любого возраста. Но для свадьбы выбрали формат 18+.',
    'wish_3': 'Пожалуйста, не дарите нам цветы! Мы не успеем насладиться их красотой и ароматом. Если хотите подарить нам ценный и нужный подарок, мы будем очень благодарны за вклад в бюджет нашей молодой семьи.',
    
    // Слайд 7 - Анкета
    'rsvp_title': 'Анкета гостя',
    'rsvp_deadline_text': 'Пожалуйста, подтвердите своё присутствие на мероприятии до:',
    'rsvp_deadline_date': '9 марта 2026',
    'guest_name_label': 'Ваше имя',
    'guest_name_placeholder': 'Имя и фамилия',
    'attend_label': 'Планируете ли Вы присутствовать?',
    'attend_yes': 'Да, с удовольствием',
    'attend_no': 'Не смогу',
    'drinks_label': 'Ваши предпочтения в напитках (можно выбрать несколько)',
    'drink_champagne': 'Шампанское',
    'drink_white_wine': 'Белое вино',
    'drink_red_wine': 'Красное вино',
    'drink_vodka': 'Водка',
    'drink_whiskey': 'Виски',
    'drink_other': 'Другое',
    'drink_other_placeholder': 'Укажите ваш вариант',
    'drink_none': 'Не пью алкоголь',
    'btn_confirm': 'Подтвердить',
    'mobile_confirm': 'Подтвердить присутствие',
    
    // Слайд 8 - Контакты
    'contacts_title': 'Контакты',
    'contacts_description': 'По всем вопросам, связанным с мероприятием, напишите нам!',
    'telegram_btn': 'Написать в Telegram',
    
    // Thank you page
    'thankyou_title': 'Спасибо!',
    'thankyou_subtitle': 'Ваш ответ получен',
    'thankyou_note': '* Если вы ошиблись в данных, просто заполните форму заново',
    'btn_register_another': 'Зарегистрировать ещё гостя',
    'btn_to_home': 'На главную',
    
    // Validation messages
    'validation_name': 'Пожалуйста, введите имя',
    'validation_attend': 'Пожалуйста, укажите, планируете ли Вы присутствовать',
    'validation_drinks': 'Пожалуйста, укажите ваши предпочтения по напиткам',
    'validation_other': 'Пожалуйста, укажите ваш вариант напитка',
    'email_sending': 'Отправка...',
    'email_error': 'Не удалось отправить email, позвоните нам, номер указан в контактах. Мы свяжемся с вами!'
  },
  
  it: {
    // Titles
    'tab_title': 'Tanja e Gosha · Invito al matrimonio',
    'rsvp_tab_title': 'Questionario ospite · Tanja e Gosha',
    'thankyou_tab_title': 'Grazie! · Tanja e Gosha',
    
    // Elementi comuni
    'tanya': 'Tanja',
    'and': '&',
    'gosha': 'Gosha',
    'date_7_may': '7 maggio 2026',
    'date_time': '7 maggio 2026 | 17:00',
    'date_time_short': '7 maggio 2026 | 17:00',
    
    // Slide 1
    'farewell_see_you': 'A presto!',
    'farewell_with_love': 'Con amore',
    
    // Slide 2 - Invito
    'invitation_line1': 'Cari',
    'invitation_line2': 'amici e parenti!',
    'invitation_text': 'Finalmente è arrivato il momento! :) Abbiamo deciso di sposarci e vogliamo che voi condividiate con noi questo giorno tanto atteso!',
    'calendar_month': 'Maggio 2026',
    'calendar_mon': 'Lu',
    'calendar_tue': 'Ma',
    'calendar_wed': 'Me',
    'calendar_thu': 'Gi',
    'calendar_fri': 'Ve',
    'calendar_sat': 'Sa',
    'calendar_sun': 'Do',
    
    // Slide 3 - Luogo
    'venue_registration_title': 'Luogo della cerimonia',
    'venue_registration_name': 'Palazzo dei matrimoni n. 2',
    'venue_registration_address': 'via Furštatskaja 52, San Pietroburgo',
    'venue_banquet_title': 'Luogo del banchetto',
    'venue_banquet_text': 'Il luogo del banchetto sarà comunicato in seguito.',
    'btn_open_map': 'Apri la mappa',
    
    // Slide 4 - Orari
    'timing_title': 'Programma',
    'timing_ceremony': 'Cerimonia',
    'timing_banquet': 'Banchetto',
    'timing_end': 'Fine della serata',
    
    // Slide 5 - Codice di abbigliamento
    'dresscode_title': 'Codice di abbigliamento',
    'dresscode_text': 'Saremo lieti di vedervi in abiti eleganti con una tavolozza primaverile:\nsalvia, rosa cipria, azzurro fumoso, grigio chiaro e blu intenso.\n\nSono accettabili sia le varianti morbide che quelle più sature di queste tonalità.\n\nBenvenuti accenti argentati e una leggera lucentezza delicata.\n\nVi chiediamo, se possibile, di evitare le tonalità del bianco, i colori troppo brillanti e neon, così come gli abiti in stile total black.',
    
    // Colori per il codice di abbigliamento
    'color_dusty_rose': 'Rosa cipria',
    'color_deep_rose': 'Rosa profondo',
    'color_wine': 'Bordeaux (soft)',
    'color_light_gray': 'Grigio chiaro',
    'color_smoky_blue': 'Azzurro fumoso',
    'color_deep_blue': 'Blu intenso',
    'color_sage': 'Salvia',
    'color_dark_olive': 'Oliva scuro',
    'color_graphite': 'Grafite',
    
    // Slide 6 - Desideri (slider)
    'wishes_title': 'Desideri',
    'wish_1': 'Saremo molto grati se eviterete di gridare "Gorko" (Amaro). Il bacio è un\'espressione di sentimenti e non può essere su ordinazione.',
    'wish_2': 'Amiamo i bambini di tutte le età. Ma per il matrimonio abbiamo scelto il formato 18+.',
    'wish_3': 'Per favore, non regalateci fiori! Non faremo in tempo a godere della loro bellezza e fragranza. Se volete farci un regalo prezioso e utile, saremo molto grati per un contributo al budget della nostra giovane famiglia.',
    
    // Slide 7 - Questionario
    'rsvp_title': 'Questionario ospite',
    'rsvp_deadline_text': 'Confermare la vostra presenza entro:',
    'rsvp_deadline_date': '9 marzo 2026',
    'guest_name_label': 'Il vostro nome',
    'guest_name_placeholder': 'Nome e cognome',
    'attend_label': 'Pensate di partecipare?',
    'attend_yes': 'Sì, con piacere',
    'attend_no': 'Non posso',
    'drinks_label': 'Preferenze per le bevande (potete scegliere più opzioni)',
    'drink_champagne': 'Champagne',
    'drink_white_wine': 'Vino bianco',
    'drink_red_wine': 'Vino rosso',
    'drink_vodka': 'Vodka',
    'drink_whiskey': 'Whisky',
    'drink_other': 'Altro',
    'drink_other_placeholder': 'Specificate la vostra scelta',
    'drink_none': 'Non bevo alcolici',
    'btn_confirm': 'Conferma',
    'mobile_confirm': 'Conferma presenza',
    
    // Slide 8 - Contatti
    'contacts_title': 'Contatti',
    'contacts_description': 'Per qualsiasi domanda sull\'evento, scrivetoci!',
    'telegram_btn': 'Scrivere in Telegram',
    
    // Thank you page
    'thankyou_title': 'Grazie!',
    'thankyou_subtitle': 'La vostra risposta è stata ricevuta',
    'thankyou_note': '* Se avete sbagliato i dati, compilate nuovamente il modulo',
    'btn_register_another': 'Registrare un altro ospite',
    'btn_to_home': 'Alla home',
    
    // Validation messages
    'validation_name': 'Per favore, inserite il nome',
    'validation_attend': 'Per favore, indicate se parteciperete',
    'validation_drinks': 'Per favore, indicate le vostre preferenze per le bevande',
    'validation_other': 'Per favore, specificate la vostra scelta',
    'email_sending': 'Invio...',
    'email_error': 'Impossibile inviare l\'email, chiamateci, il numero è nei contatti. Vi contatteremo!'
  }
};