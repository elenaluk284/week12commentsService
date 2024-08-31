// Функция для проверки спама (с сохранением регистра остальных слов)
function checkSpam(str) {
    const spamWords = ['viagra', 'xxx'];

    spamWords.forEach(word => {
        const regex = new RegExp(word, 'gi'); // 'gi' для нечувствительности к регистру
        str = str.replace(regex, '***');
    });

    return str;
}

// Остальная часть кода остаётся прежней:
function formatName(name) {
    name = name.trim(); // Убираем лишние пробелы
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function addComment() {
    const nameInput = document.getElementById('name').value;
    const avatarInput = document.getElementById('avatar').value;
    const messageInput = document.getElementById('message').value;

    const formattedName = formatName(nameInput);
    const checkedMessage = checkSpam(messageInput);

    const commentContainer = document.createElement('div');
    commentContainer.className = 'comment';

    const avatarImg = document.createElement('img');
    avatarImg.src = avatarInput || 'https://via.placeholder.com/50';
    avatarImg.width = 50;
    avatarImg.height = 50;

    const nameSpan = document.createElement('span');
    nameSpan.className = 'name';
    nameSpan.textContent = formattedName;

    const messageSpan = document.createElement('span');
    messageSpan.className = 'message';
    messageSpan.textContent = checkedMessage;

    commentContainer.appendChild(avatarImg);
    commentContainer.appendChild(nameSpan);
    commentContainer.appendChild(messageSpan);

    document.getElementById('comments').appendChild(commentContainer);

    // Очищаем поля ввода
    document.getElementById('name').value = '';
    document.getElementById('avatar').value = '';
    document.getElementById('message').value = '';
}
