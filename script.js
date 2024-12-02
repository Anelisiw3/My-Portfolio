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

const chatBox = document.querySelector('.chatbox');
                const inputDiv = document.createElement('div');
                inputDiv.classList.add('input-container');
                document.querySelector('.chatbot').appendChild(inputDiv);
            
            
                const botReplies = {
                    "hello": "Hi there! How can I assist you?",
                    "hi": "Hi there! How can I assist you?",
                    "who are you": "I am Anelisiwe Mtati , a junior web developer with a passion for coding",
                    "tell us about yourself": "I am a Junior Developer with a passion for coding and a strong foundation in web development technologies, including HTML, CSS and JavaScript. Proficient in collaborating with teams to create user friendly applications and eager to learn new programming languages and frameworks.",
                    "tell me about yourself": "I am a Junior Developer with a passion for coding and a strong foundation in web development technologies, including HTML, CSS and JavaScript. Proficient in collaborating with teams to create user friendly applications and eager to learn new programming languages and frameworks.",
                    "what do you do": " I specialise in Web Development, including frontend, Debugging and Database Management",
                    "what are your services": " Frontend Developer,Debugging and Testing , Database Management.",
                    "what are the services that you render": " Frontend Developer,Debugging and Testing , Database Management.",
                    "what are your skills": " html,css,JavaScript and Mysql.",
                    "tell me about your skills": " Okay, (75%)html, (70%)css, (50%)JavaScript and (65%)Mysql.",
                    "Do you have any skills": " Yes (75%)html, (70%)css, (50%)JavaScript and (65%)Mysql.", 
                    "what is your professional goal": " My goal is to contribute to innovative projects while gaining practical experience and mastering modern frameworks and technologies.",
                    "contact": "You can reach out via the contact form, LinkedIn link on the page.",
                    "default": "I'm sorry, I didn't understand that. Could you rephrase?",
                };
            
                sendBtn.addEventListener('click', () => {
                    const userText = userInput.value.trim();
                    if (userText) {
                        addChatMessage(userText, 'outgoing');
                        setTimeout(() => {
                            const botResponse = botReplies[userText.toLowerCase()] || botReplies["default"];
                            addChatMessage(botResponse, 'incoming');
                        }, 1000);
                    }
                    userInput.value = '';
                });
            
                function addChatMessage(message, type) {
                    const chatMessage = document.createElement('li');
                    chatMessage.classList.add('chat', type);
                    chatMessage.innerHTML = `<p>${message}</p>`;
                    chatBox.appendChild(chatMessage);
                    chatBox.scrollTop = chatBox.scrollHeight; 
                }
                