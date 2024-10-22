const chatbotToggler = document.querySelector(".chatbot-toggler"); //close/open chat
const closeBtn = document.querySelector(".close-btn"); //close button
const chatbox = document.querySelector(".chatbox"); //chatbox component
const chatInput = document.querySelector(".chat-input textarea");//users inputbox
const sendChatBtn = document.querySelector(".chat-input span");//send user-input button

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

// API configuration
const API_KEY = "my key here"; // Your API key here
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

const createChatLi = (message, className) => {
  // Create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);//add to CSS class
  //chat content CSS class-ification
  let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;//assign UI
  chatLi.querySelector("p").textContent = message;//assign paragraph to message
  return chatLi; // return chat <li> element
}

const generateResponse = async (chatElement) => {//async await for response generation
  const messageElement = chatElement.querySelector("p"); //paragraph to object assignment

  // Define the properties and message for the API request
  const requestOptions = {
    method: "POST", //http post request method
    headers: { "Content-Type": "application/json" }, //header file meta data classification
    body: JSON.stringify({ //data content to standard string format
      contents: [{ //specifies contents
        role: "user", //normal user, no special privileges
        parts: [{ text: userMessage }] //text content from user
      }] 
    }),
  }

  // Send POST request to API, get response and set the reponse as paragraph text
  try {//tries to execute API request
    const response = await fetch(API_URL, requestOptions);//URL and possible API options as arguments
    const data = await response.json();//waits for response
    if (!response.ok) throw new Error(data.error.message);//if not 500, throw error message
    
    // Get the API response text and update the message element
    messageElement.textContent = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
  } catch (error) {
    // Handle error
    messageElement.classList.add("error");//add test CSS error class
    messageElement.textContent = error.message;//set text to error message
  } finally {
    chatbox.scrollTo(0, chatbox.scrollHeight);//auto scroll new responded message
  }
}

const handleChat = () => {
  userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
  if (!userMessage) return;//if not user message

  // Clear the input textarea and set its height to default
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  // Append the user's message to the chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing")); //add to UI
  chatbox.scrollTo(0, chatbox.scrollHeight);//scroll to object

  setTimeout(() => {
    // Display "Thinking..." message while waiting for the response
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);//add to UI
    chatbox.scrollTo(0, chatbox.scrollHeight);// scroll there
    generateResponse(incomingChatLi);//call response generator
  }, 600);//timeout at 600 milliseconds
}

chatInput.addEventListener("input", () => {
  // Adjust the height of the input textarea based on its content
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  // If Enter key is pressed without Shift key and the window 
  // width is greater than 800px, handle the chat
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();//assigns PC vs mobile UI accordingly
  }
});

sendChatBtn.addEventListener("click", handleChat);//user to bot send query button
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));// IIFE function closes chat UI
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));//close/open chat listener