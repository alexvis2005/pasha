// Православный пасхальный тест - 10 вопросов
const easterQuiz = [
    {
        text: "1. Что означает слово «Пасха» в переводе с еврейского языка?",
        options: ["Избавление", "Прохождение мимо", "Воскресение", "Праздник плодов"],
        correct: 1
    },
    {
        text: "2. В какой день седмицы празднуется Пасха в православной традиции?",
        options: ["В субботу", "В воскресенье", "В понедельник", "В пятницу"],
        correct: 1
    },
    {
        text: "3. Какое приветствие принято произносить в пасхальные дни?",
        options: ["Мир вам!", "Христос Воскресе!", "Слава Тебе, Господи!", "Бог в помощь!"],
        correct: 1
    },
    {
        text: "4. Что символизирует красное яйцо на Пасху?",
        options: ["Кровь Христа и вечную жизнь", "Красоту весны", "Богатство", "Любовь Богородицы"],
        correct: 0
    },
    {
        text: "5. Как называется служба в ночь на Пасху?",
        options: ["Всенощное бдение", "Полунощница", "Пасхальная заутреня и литургия", "Вечерня"],
        correct: 2
    },
    {
        text: "6. Как заканчивается пасхальное приветствие священника: «Христос Воскресе!» - ответ:",
        options: ["Воистину воскресе!", "Воистину воскрес!", "Истинно воскресе!", "Воистину воскрес Христос!"],
        correct: 0
    },
    {
        text: "7. Сколько дней длится празднование Пасхи до Отдания?",
        options: ["7 дней", "40 дней", "50 дней", "30 дней"],
        correct: 1
    },
    {
        text: "8. Что такое Артос, который освящается на Пасху?",
        options: ["Особый хлеб", "Пасхальное яйцо", "Свеча", "Лампада"],
        correct: 0
    },
    {
        text: "9. Кому первому из апостолов явился воскресший Христос?",
        options: ["Апостолу Петру", "Апостолу Иоанну", "Апостолу Иакову", "Апостолу Фоме"],
        correct: 0
    },
    {
        text: "10. Какое традиционное пасхальное блюдо готовят в России, помимо куличей и яиц?",
        options: ["Пасха творожная", "Блины", "Медовуха", "Кутья"],
        correct: 0
    }
];

// Управление именем пользователя
let currentUserName = '';

// Функция сохранения имени
function saveUserName() {
    const nameInput = document.getElementById('userName');
    const name = nameInput.value.trim();
    
    if (name === '') {
        alert('Пожалуйста, введите ваше имя!');
        return;
    }
    
    currentUserName = name;
    
    // Сохраняем имя в localStorage
    localStorage.setItem('easterUserName', name);
    
    // Показываем персональное поздравление
    const greetingDiv = document.getElementById('greetingMessage');
    greetingDiv.innerHTML = ` ${currentUserName}, Христос Воскресе! <br>Благословение Божие на вас!`;
    greetingDiv.classList.add('show');
    
    // Обновляем основное поздравление
    updateMainGreeting();
    
    // Анимация кнопки
    const btn = document.getElementById('saveNameBtn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 200);
    
    // Показываем уведомление
    showNotification(`С праздником, ${currentUserName}!`);
}

// Функция обновления основного поздравления с именем
function updateMainGreeting() {
    if (!currentUserName) return;
    
    const greetingElement = document.getElementById('dynamicGreeting');
    const originalText = `Дорогие братья и сестры, учащиеся и педагоги Православной гимназии города Иркутска!<br><br>
        Сердечно поздравляем вас со Светлым Христовым Воскресением! Пасха Господня — победа жизни, радость и надежда. 
        Пусть благодать Воскресшего Спасителя наполняет ваши сердца, семьи и classrooms небесным миром и любовью. 
        Желаем вам крепкой веры, пасхальной радости и щедрых даров Святого Духа!`;
    
    const personalizedText = `Дорогой(ая) <span style="color: #b34e1a; font-weight: bold; text-shadow: 0 0 5px rgba(227,179,76,0.5);">${currentUserName}</span>!<br><br>
        Сердечно поздравляем вас со Светлым Христовым Воскресением! Пасха Господня — победа жизни, радость и надежда. 
        Пусть благодать Воскресшего Спасителя наполняет ваше сердце, семью и душу небесным миром и любовью. 
        Желаем вам крепкой веры, пасхальной радости и щедрых даров Святого Духа!`;
    
    greetingElement.innerHTML = personalizedText;
}

// Функция показа уведомления
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #e3b34c, #b34e1a);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        font-weight: bold;
        z-index: 10000;
        animation: slideInRight 0.5s ease, fadeOut 0.5s ease 2.5s forwards;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Добавляем анимации для уведомления
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(style);

// Функция рендеринга теста
function renderQuiz() {
    const container = document.getElementById('testContainer');
    if (!container) return;
    
    let html = '';
    easterQuiz.forEach((question, index) => {
        html += `
            <div class="question-item" data-qidx="${index}">
                <div class="question-text">${question.text}</div>
                <div class="options">
        `;
        
        question.options.forEach((option, optIndex) => {
            html += `
                <label>
                    <input type="radio" name="q${index}" value="${optIndex}">
                    <span>${option}</span>
                </label>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Функция подсчета результатов
function calculateResult() {
    let score = 0;
    const totalQuestions = easterQuiz.length;
    
    for (let i = 0; i < totalQuestions; i++) {
        const selectedRadio = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedRadio) {
            const selectedValue = parseInt(selectedRadio.value);
            if (selectedValue === easterQuiz[i].correct) {
                score++;
            }
        }
    }
    
    return { score, total: totalQuestions };
}

// Функция отображения результата с поздравлением
function displayResult() {
    const { score, total } = calculateResult();
    const resultDiv = document.getElementById('testResult');
    
    let message = '';
    let emoji = '';
    
    if (score === total) {
        emoji = '🌟✨🎉';
        message = `Великолепно! Вы набрали ${score} из ${total} баллов! Вы настоящий знаток православной Пасхи! Христос Воскресе! 🌟✨🎉`;
    } else if (score >= 8) {
        emoji = '✝️🙏✨';
        message = `Отлично! ${score} из ${total} баллов! Вы хорошо знаете пасхальные традиции. С праздником! Христос Воскресе! ✝️🙏✨`;
    } else if (score >= 6) {
        emoji = '🐣🥚🌷';
        message = `Хорошо! ${score} из ${total} баллов. Неплохой результат! Почитайте Евангелие и жития святых, чтобы ещё глубже познать радость Пасхи. Христос Воскресе! 🐣🥚🌷`;
    } else if (score >= 4) {
        emoji = '📖🕯️💫';
        message = `${score} из ${total} баллов. Хорошая попытка! В Светлую седмицу предлагаем больше узнать о традициях Православной Церкви. Христос Воскресе! 📖🕯️💫`;
    } else {
        emoji = '🕊️🌟🙏';
        message = `${score} из ${total} баллов. Дорогой друг! Поздравляем с Пасхой! Пусть этот светлый праздник вдохновит вас на изучение православной веры и традиций. Христос Воскресе! 🕊️🌟🙏`;
    }
    
    resultDiv.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 10px;">${emoji}</div>
        <div style="font-size: 1.2rem; margin-bottom: 10px;">✨ Ваш результат: ${score} из ${total} ✨</div>
        <div>${message}</div>
    `;
    
    // Плавная прокрутка к результату
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Добавляем пасхальное звуковое поздравление в консоль
    console.log('%c ХРИСТОС ВОСКРЕСЕ! 🎉 Поздравляем с Пасхой! 🎉 ', 'color: #b34e1a; font-size: 16px; font-weight: bold;');
}

// Функция проверки, что все вопросы отмечены
function checkAllAnswered() {
    const totalQuestions = easterQuiz.length;
    let answered = 0;
    
    for (let i = 0; i < totalQuestions; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) answered++;
    }
    
    if (answered < totalQuestions) {
        const confirmSubmit = confirm(`Вы ответили только на ${answered} из ${totalQuestions} вопросов. Хотите посмотреть результат?`);
        return confirmSubmit;
    }
    return true;
}

// Загрузка сохраненного имени при старте
function loadSavedName() {
    const savedName = localStorage.getItem('easterUserName');
    if (savedName) {
        const nameInput = document.getElementById('userName');
        if (nameInput) {
            nameInput.value = savedName;
            currentUserName = savedName;
            const greetingDiv = document.getElementById('greetingMessage');
            greetingDiv.innerHTML = ` ${currentUserName}, Христос Воскресе! <br>Благословение Божие на вас!`;
            greetingDiv.classList.add('show');
            updateMainGreeting();
        }
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderQuiz();
    loadSavedName();
    
    const submitButton = document.getElementById('submitTest');
    if (submitButton) {
        submitButton.addEventListener('click', () => {
            if (checkAllAnswered()) {
                displayResult();
            }
        });
    }
    
    const saveNameBtn = document.getElementById('saveNameBtn');
    if (saveNameBtn) {
        saveNameBtn.addEventListener('click', saveUserName);
    }
    
    // Добавляем обработчик Enter в поле ввода имени
    const nameInput = document.getElementById('userName');
    if (nameInput) {
        nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                saveUserName();
            }
        });
    }
    
    // Добавляем пасхальное приветствие в консоль
    console.log('%c✝️ ХРИСТОС ВОСКРЕСЕ! ✝️', 'color: #b34e1a; font-size: 20px; font-weight: bold;');
    console.log('%cПоздравляем православную гимназию города Иркутск со Светлым Христовым Воскресением!', 'color: #8b5a2b; font-size: 14px;');
    
    // Создаем дополнительные плавающие элементы
    createFloatingElements();
});

// Создание дополнительных плавающих элементов для волшебства
function createFloatingElements() {
    const container = document.querySelector('.floating-particles');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        element.innerHTML = ['✝️', '🕊️', '🥚', '🌟', '✨', '🌷', '🐣'][Math.floor(Math.random() * 7)];
        element.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: ${Math.random() * 20 + 10}px;
            opacity: ${Math.random() * 0.5 + 0.2};
            animation: floatElement ${Math.random() * 10 + 10}s linear infinite;
            pointer-events: none;
        `;
        container.appendChild(element);
    }
}

// Добавляем анимацию для плавающих элементов
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes floatElement {
        from {
            transform: translateY(100vh) rotate(0deg);
        }
        to {
            transform: translateY(-100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(floatStyle);