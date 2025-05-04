function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();

    if (message !== "") {
        const messagesDiv = document.getElementById("messages");

        // Add user's message
        const userMsg = document.createElement("div");
        userMsg.textContent = "You: " + message;
        messagesDiv.appendChild(userMsg);

        // Add fake bot reply
        const botMsg = document.createElement("div");
        botMsg.textContent = "Bot: I heard you say '" + message + "'";
        messagesDiv.appendChild(botMsg);

        // Scroll to bottom
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        // Clear input
        input.value = "";
    }
}


function sendMessage() {
    const input = document.getElementById('userInput');
    const messages = document.getElementById('messages');
    const userText = input.value.trim();

    if (userText === '') return;

    // Display user message
    messages.innerHTML += `<p><strong>You:</strong> ${userText}</p>`;

    // Prepare response
    const response = getBotResponse(userText.toLowerCase());
    messages.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;

    input.value = '';
    messages.scrollTop = messages.scrollHeight;
}

function getBotResponse(input) {
    // Basic keyword matching
    if (input.includes('skills')) {
        return "I have experience in Python, Java, Linux, Networking, Data Analysis, and more!";
    } else if (input.includes('projects')) {
        return "Check out my GitHub! I've worked on projects like IoT security, grade converters, and machine learning for zero-day attacks.";
    } else if (input.includes('experience')) {
        return "I participated in cybersecurity study groups and worked on penetration testing and security research at PGCC.";
    } else if (input.includes('school') || input.includes('education')) {
        return "I studied Cybersecurity at Prince George's Community College and Computer Technology at Bowie State University.";
    } else if (input.includes('hello') || input.includes('hi')) {
        return "Hello! Ask me anything about my background or projects.";
    } else {
        return "I'm not sure how to answer that, but you can ask about my skills, experiences, or projects!";
    }
}
