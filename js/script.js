const input = document.getElementById("input");
const button = document.getElementById("button");
const returnBtn = document.createElement("button");
const answer = document.getElementById("answers");
// while (input.value.length== 0) {

  button.addEventListener("click", ask);

  // a function that displays random magic8ball image when ask button clicked
  function ask() {
    const imgArray = [
      "images/magic8ball_1.png",
      "images/magic8ball_2.png",
      "images/magic8ball_3.png",
      "images/magic8ball_4.png",
      "images/magic8ball_5.png",
      "images/magic8ball_6.png",
      "images/magic8ball_7.png",
      "images/magic8ball_8.png",
      "images/magic8ball_9.png",
      "images/magic8ball_10.png",
      "images/magic8ball_11.png",
      "images/magic8ball_12.png",
      "images/magic8ball_13.png",
      "images/magic8ball_14.png",
      "images/magic8ball_15.png",
      "images/magic8ball_16.png",
      "images/magic8ball_17.png",
      "images/magic8ball_18.png",
      "images/magic8ball_19.png",
      "images/magic8ball_20.png",
    ];
if (input.value.length != 0) {
  // selecting random index from imgArray
  const randomImgIndex = Math.floor(Math.random() * imgArray.length);

  // Create image tag to insert random image
  const img = document.createElement("img");
  // img.src = imgArray[getRandomImage()];
  img.src = imgArray[randomImgIndex];
  // append selected random image into html

  answer.appendChild(img);
  // hide input field and ask button
  const content = document.getElementById("content");
  content.style.display = "none";

  // create h2 element and append to html to display users question after user clicked ask button
  const askedQuestion = document.createElement("p");

  answer.prepend(askedQuestion);
  askedQuestion.innerText = input.value;
  // // create return button to ask another

  returnBtn.setAttribute("id", "returnBtn");
  returnBtn.innerText = "Do you want to ask another question?";
  returnBtn.style.textAlign = "center";
  answer.appendChild(returnBtn);
} else {
  alert("Enter a question")
}
  returnBtn.addEventListener("click", function returnToAsk() {
    content.style.display = "block";
    input.value = "";
    // answer.style.display = "none";
    answer.innerHTML = "";
  });
}
