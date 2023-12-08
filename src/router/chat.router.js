const socketClient = io();
const form = document.getElementById("chatForm");
const inputMessage = document.getElementById("chatMessage");
const h3Name = document.getElementById("email");
const divChat = document.getElementById("chat");



form.onsubmit = (e) => {
  e.preventDefault();
  const infoMessage = {
    email: h3Name.value,
    message: inputMessage.value,
  };
  socketClient.emit("message", infoMessage);
};

socketClient.on("chat", (messages) => {
  const chat = messages
    .map((objMessage) => `<p>${objMessage.email}: ${objMessage.message}</p>`)
    .join(" ");
  divChat.innerHTML = chat;
});