let form = document.querySelector("form");
let chatArea = document.querySelector("#chat-area");
let inputMessage = document.querySelector("#message");

async function getBotAnswer() {
  const responseText = await fetch("bot_answer.json");
  const data = await responseText.json(); // data.. um ein Array zubekommen
  form.onsubmit = (e) => {
    // e: event
    e.preventDefault(); // nicht mehr refrech
    let inputMessageSpac = inputMessage.value.trim().toLowerCase();
    if (inputMessageSpac === "") {
      alert("please insert value");
    } else {
      data.forEach((answer) => {
        if (inputMessageSpac === answer.my_msg) {
          //   console.log(answer.bot_answer);
          chatArea.innerHTML += ` <p class ="my_msg">${answer.my_msg}</p>`;
          setTimeout(() => {
            chatArea.innerHTML += ` <p class ="answer">${answer.bot_answer}</p>`;
          }, Math.floor(Math.random() * 1000));
        }
      });
    }
    inputMessage.value = "";
  };
}
getBotAnswer();
