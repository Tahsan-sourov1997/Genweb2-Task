//Use Strict Mode
"use strict";

//Import File Start
import featuredItems from "./Data/featuredItems.js";
import fruits from "./Data/fruit.js";
import popular from "./Data/popular.js";
import daily from "./Data/daily.js";
import allIcon from "./Data/icon.js";
import last from "./Data/last.js";
//Import File End

//Catch DOM Element Start
const featuredDeatils = document.querySelector(
  "body #featured .featured-deatils"
);
const fruitDivison = document.querySelector("body #fruits .fruit-divison");
const popularCard = document.querySelector("body #popular .popular-card");
const dailyCard = document.querySelector("body #daily .daily-product-card");
const icon = document.querySelector("body #all-icon .main");
const category = document.querySelector("body #last .all-category");
const list = document.querySelector("body #last .all-category .list");
//Catch DOM Element End

//For Featured Section Satrt
featuredItems.map((items) => {
  featuredDeatils.innerHTML += `<div class="col col-lg-2 col-sm- border rounded m-1" style="width:16%">
<img src=${items.path} style='width:100%'>
  <div class="p-3">${items.name}</div>
</div>`;
});
//For Featured Section End

//For Fruits Section Start
fruits.map((items) => {
  fruitDivison.innerHTML += `<div class="col-sm-6 background-image rounded" style='background-image:url(${items.path});'>
    <h3>${items.heading1}</h3>
    <h6>${items.heading2}</h6>
    <button>Shop Now</button>
    </div>`;
});
//For Fruits Section Start

//For Popular section Start
popular.map((item) => {
  const starsTotal = 5;
  document.addEventListener("DOMContentLoaded", getRatings);
  function getRatings() {
    const starPercentage = (item.ratings / starsTotal) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    popularCard.innerHTML += `<div class="col-sm-2 col-lg-5 p-3 "  style="width: 20%;">
      <div class="card h-100 card-area" style="width: auto;">
          <img src=${
            item.path
          } class="card-img-top " style="height: 200px" alt="...">
          <div class="card-body">
            <div class="heading1">${item.heading1}</div>
           <div class="heading2">${item.heading1}</div>
            <div class="rating">
              <div class="d-flex align-items-center">
                <div class="stars-outer">
                  <div class="stars-inner" style='width:${starPercentageRounded}'></div>
                </div>
                <div class="d-flex align-items-center">
                <span class="number-rating m-1">${item.ratings}</span>
                <div class="total-reviewer">(${item.reviewer})</div>
              </div>
              </div>
            </div>
            <div class="d-flex justify-content-between">
            <div class="d-flex align-items-center">
            <div class="price">${item.price}</div>
            <div class="m-1 del-price price"><del>${item.delPrice}</del></div>
            </div>
            <button type="button" class="btn add-button d-flex align-items-center"><i class="fa-regular fa-plus m-1"></i><div>Add</div></button>
          </div>
          <div class=${
            typeof item.sale === "number"
              ? "not-sale text-center"
              : "sale text-center"
          }>${typeof item.sale === "number" ? item.sale + "%" : item.sale}</div>
          </div>
        </div>
  </div>`;
  }
});
//For Popular section End

//For Daily section Start
daily.map((item) => {
  const starTotal = 5;
  document.addEventListener("DOMContentLoaded", getRating);
  function getRating() {
    const percentage = (item.ratings / starTotal) * 100;
    const rounded = `${Math.round(percentage / 10) * 10}%`;
    console.log(rounded);
    dailyCard.innerHTML += `<div class="col-sm-1 col-lg-5 ms-2 daily-overflow"  style="width:20rem;height: 485px;" >
<div class="card h-100 card-area" style="width: 100%;">
    <img src='images/bread.png' class="card-img-top" alt="...">
    <div class="card-body">
      <div class="daily-heading1">${item.heading1}</div>
     <div class="daily-heading2">${item.heading2}</div>
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <div class="daily-price">${item.price}</div>
          <div class="m-1 daily-del-price price"><del>${item.delPrice}</del></div>
          </div>
        <div class="daily-rating">
          <div class="d-flex align-items-center">
            <div class="daily-stars-outer">
              <div class="daily-stars-inner" style='width:${rounded}'></div>
            </div>
            <span class="daily-number-rating m-1">5</span>
          </div>
        </div>

    </div>
    </div>
    <div class="d-flex justify-content-center daily-button" style="width: 100%;">
    <button type="button" class="btn d-flex justify-content-center" style="width: 90%;background-color:#0AAD0A;"><i class="fa-solid fa-plus m-1"></i><div>Add</div></button>
  </div>
    <div class="container text-center daily-time" style="width: 100%;height:70px;">
    <div class="row ">
        <div class="d-flex justify-content-center align-items-center ">
          <div class="m-1 rounded d-flex flex-column justify-content-center border" style="width: 60px;height: 60px;"><div style="font-weight: bolder ;">00</div><div>Days</div></div>
          <div class="m-1 rounded d-flex flex-column justify-content-center border" style="width: 60px;height: 60px;"><div style="font-weight: bolder ;">00</div><div>Days</div></div>
          <div class="m-1 rounded d-flex flex-column justify-content-center border" style="width: 60px;height: 60px;"><div style="font-weight: bolder ;">00</div><div>Days</div></div>
          <div class="m-1 rounded d-flex flex-column justify-content-center border" style="width: 60px;height: 60px;"><div style="font-weight: bolder ;">00</div><div>Days</div></div>
        </div>
      </div>
    </div>
  </div>
  </div>`;
  }
});
//For Daily section End

//For Icon Section Start
allIcon.map((item) => {
  icon.innerHTML += `<div class="col-lg-3">
  <div class="all d-flex flex-column justify-content-start">
   <div class="icon">
    ${item.icon}
   </div>
   <div class="heading">
   ${item.heading}
   </div>
  <div class="pragraph">
  ${item.paragraph}
  </div>
  </div>
  </div>`;
});
//For Icon Section End

//For Last Section Start
const newHeading = function () {
  let store = "";
  last.map((item) => {
    store += item.heading + `</br>`;
  });
  return store;
};
let count = 0;
const newList = function (items) {
  let store2 = "";
  items.map((item) => {
    store2 += item + `</br>`;
  });
  return store2;
};

last.map((item) => {
  count++;
  category.innerHTML += `<div class="col-sm-2 col-lg-2">
  <div class="heading">
      ${item.heading}
     </div>
        <div class=${count === 2 ? "sendItemOfList" : "list"}>
      ${newList(item.list)}
         </div>
     </div>`;
});
//For Last Section Start
