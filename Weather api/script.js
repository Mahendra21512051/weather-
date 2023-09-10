const userTab= document.querySelector("[data-userWeather]");
const searchTab= document.querySelector("[data-searchWeather");
const userContainer= document.querySelector(".weather-cotainer");

const grandAccessContainer= document.querySelector(".grant- location- container");
const sarchForm= document.querySelector("[data-searchForm");
const loadingScreen= document.querySelector(".loading-container");
const userInContainer= document.querySelector("user-info-container");

//initaly variable need

let currentab= userTab;
const ApI_key= " ";
currentTab.classList.add("current-tab");

function switchTab(clickedTab){
  if(currentab!=switchTab){
    currentab.classList.remove("cuurent-tab");
    curentTab= clickedTab;
    cureentTab.classList.add("current-tab");
    if(!searchForm.classList.contains("active")){
      userInContainer.classList.remove("active");
      grandAccessContainer.classList.
    }
  }

}


userTab.addEventListener("click", ()=>{
  switchTab(userTab);
});
searchTab.addEventListener("click",()=>{
  switchTab(searchTab);
})