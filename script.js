// Select elements
const chatbotIcon = document.getElementById('chatbotIcon');
const chatbot = document.getElementById('chatbot');
const minimizeBtn = document.getElementById('minimizeBtn');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatbox = document.querySelector('.chatbox');

// Toggle Chatbot
chatbotIcon.addEventListener('click', () => {
    chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'flex' : 'none';
});

// Minimize Chatbot
minimizeBtn.addEventListener('click', () => {
    chatbot.style.display = 'none';
});

// Handle Send Message
sendBtn.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, 'outgoing');
        userInput.value = ''; // Clear input
        setTimeout(() => {
            addMessage('Thank you for your message!', 'incoming');
        }, 1000);
    }
});

// Add Message to Chatbox
function addMessage(message, type) {
    const li = document.createElement('li');
    li.className = `chat ${type}`;
    li.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(li);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
}
