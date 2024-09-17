let result = document.querySelector(".result");
result.textContent = "0";
let counter = setInterval(countDown, 10);
function countDown() {
  result.innerHTML++;
  if (result.innerHTML === "76") {
    clearInterval(counter);
  }
}

let json = new XMLHttpRequest();
json.open("GET", "./data.json");
json.send();

json.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(json.responseText);
    let jsData = JSON.parse(this.responseText);
    let scoreOne = document.querySelector(".scoreOne");
    let s1 = document.createTextNode(jsData[0].score);
    scoreOne.appendChild(s1);
    let scoreTwo = document.querySelector(".scoreTwo");
    let s2 = document.createTextNode(jsData[1].score);
    scoreTwo.appendChild(s2);
    let scoreThree = document.querySelector(".scoreThree");
    let s3 = document.createTextNode(jsData[2].score);
    scoreThree.appendChild(s3);
    let scoreFour = document.querySelector(".scoreFour");
    let s4 = document.createTextNode(jsData[3].score);
    scoreFour.appendChild(s4);

    let iconOne = document.querySelector(".iconOne");
    let i1 = document.createElement("img");
    i1.src = jsData[0].icon;
    iconOne.appendChild(i1);
    let iconTwo = document.querySelector(".iconTwo");
    let i2 = document.createElement("img");
    i2.src = jsData[1].icon;
    iconTwo.appendChild(i2);
    let iconThree = document.querySelector(".iconThree");
    let i3 = document.createElement("img");
    i3.src = jsData[2].icon;
    iconThree.appendChild(i3);
    let iconFour = document.querySelector(".iconFour");
    let i4 = document.createElement("img");
    i4.src = jsData[3].icon;
    iconFour.appendChild(i4);
  }
};
