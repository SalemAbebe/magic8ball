const input = document.getElementById("input");
const button = document.getElementById("button");
const returnBtn = document.createElement("button");
const answer = document.getElementById("answers");

  button.addEventListener("click", ask);

  // a function that displays random magic8ball image when ask button clicked
  function ask() {
    const imgArray = [
      "imagesCopy/magic8ball_1.png",
      "imagesCopy/magic8ball_3.png",
      "imagesCopy/magic8ball_4.png",
      "imagesCopy/magic8ball_5.png",
      "imagesCopy/magic8ball_6.png",
      "imagesCopy/magic8ball_7.png",
      "imagesCopy/magic8ball_8.png",
      "imagesCopy/magic8ball_9.png",
      "imagesCopy/magic8ball_10.png",
      "imagesCopy/magic8ball_11.png",
      "imagesCopy/magic8ball_12.png",
      "imagesCopy/magic8ball_13.png",
      "imagesCopy/magic8ball_14.png",
      "imagesCopy/magic8ball_15.png",
      "imagesCopy/magic8ball_16.png",
      "imagesCopy/magic8ball_17.png",
      "imagesCopy/magic8ball_18.png",
      "imagesCopy/magic8ball_19.png",
      "imagesCopy/magic8ball_20.png",
    ];
    // selecting random index from imgArray
    function getRandomImage() {
      const randomImgIndex = Math.floor(Math.random() * imgArray.length);

      return randomImgIndex;
    }
    getRandomImage();
    // Create image tag to insert random image
    const img = document.createElement("img");
    img.src = imgArray[getRandomImage()];
    // append selected random image into html
    
    answer.appendChild(img);
    // hide input field and ask button
    const content = document.getElementById("content");
    content.style.display = "none";
    // get the value of input

    console.log(input.value);

    // create h2 element and append to html to display users question after user clicked ask button
    const askedQuestion = document.createElement("h2");

    answer.prepend(askedQuestion);
    askedQuestion.innerHTML = input.value;
    // create return button to return ask another
    
    returnBtn.setAttribute("id", "returnBtn");
    returnBtn.innerText = "Do you want to ask another question?";
    returnBtn.style.textAlign = "center";
    answer.appendChild(returnBtn);
    
       
}
  returnBtn.addEventListener("click", function returnToAsk() {
    content.style.display = "block";
    answer.style.display = "none";
  });
// }
  
