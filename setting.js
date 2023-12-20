const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelectorAll(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input => {
  input.addEventListener("Input", e => {
    let minPrice = parseInt(priceInput[0].value),
    maxPrice = parseInt(priceInput[1].value);

    if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
      if(e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = ((minPrice / rangeInput[0].max)*100)+"%";
      }else{
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max)*100 + "%";
      }
    }
  });
});

rangeInput.forEach(input =>{
  input.addEventListener("input", e => {
    let minVal = parseInput(rangeInput[1].value);

    if((maxVal - minVal) < priceGap) {
      if(e.target.classname === "range-min") {
        rangeInput[0].value = maxVal - priceGap     
      }else{
        rangeInput[1].value = minVal + priceGap;
      }
    }else{
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = ((minVal / rangeInput[0].max)*100)+ "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max)*100 + "%";
    }
  });
});


// JS for tabbar
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

function myFunction() {
  confirm("Plase Recheck Value");
}