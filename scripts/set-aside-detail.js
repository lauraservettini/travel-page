const barcelonaExpBtnElement = document.querySelector("#barcelona a");
const hawaiExpBtnElement = document.querySelector("#hawai a");
const londonExpBtnElement = document.querySelector("#london a");
const miamiExpBtnElement = document.querySelector("#miami a");
const munichExpBtnElement = document.querySelector("#munich a");
const newYorkExpBtnElement = document.querySelector("#new-york a");
const parisExpBtnElement = document.querySelector("#paris a");
const sidneyExpBtnElement = document.querySelector("#sidney a");
const tokyoExpBtnElement = document.querySelector("#tokyo a");
const baliExpBtnElement = document.querySelector("#bali a");

const barcelonaLiElement = document.getElementById("barcelona");
const hawaiLiElement = document.getElementById("hawai");
const londonLiElement = document.getElementById("london");
const miamiLiElement = document.getElementById("miami");
const munichLiElement = document.getElementById("munich");
const newYorkLiElement = document.getElementById("new-york");
const parisLiElement = document.getElementById("paris");
const sidneyLiElement = document.getElementById("sidney");
const tokyoLiElement = document.getElementById("tokyo");
const baliLiElement = document.getElementById("bali");

const asideDetailElement = document.getElementById("aside-detail");
const asideImageElement = document.getElementById("img-detail");

barcelonaExpBtnElement.addEventListener("click", setAsideDetailBarcelona);
hawaiExpBtnElement.addEventListener("click", setAsideDetailHawai);
londonExpBtnElement.addEventListener("click", setAsideDetailLondon);
miamiExpBtnElement.addEventListener("click", setAsideDetailMiami);
munichExpBtnElement.addEventListener('click', setAsideDetailMunich);
newYorkExpBtnElement.addEventListener('click', setAsideDetailNewYork);
parisExpBtnElement.addEventListener('click', setAsideDetailParis);
sidneyExpBtnElement.addEventListener('click', setAsideDetailSidney);
tokyoExpBtnElement.addEventListener('click', setAsideDetailTokyo);
baliExpBtnElement.addEventListener('click', setAsideDetailBali);