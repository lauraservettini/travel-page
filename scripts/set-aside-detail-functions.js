let imageSrc;

let imageAlt;

let titleTextContent;

let PTextContent;

function showAside() {
  if (
    asideDetailElement.style.display === "none" ||
    asideDetailElement.style.display === ""
  ) {
    asideDetailElement.style.display = "block";
  }
}

function extraxtCityDetail(li) {
  //estrae il titolo
  titleTextContent = li.children[1].children[0].children[0].textContent;

  //estrae alt e src per img
  imageAlt = li.children[0].alt;
  imageSrc = li.children[0].src;

  //alternativa per img.src ricostruendo il path
  // imageSrc = "img/places/" + titleTextContent.toLowerCase() + ".jpg";
}

function insertNewAsideDetail() {
  //sostituisce l'immagine
  asideImageElement.src = imageSrc;
  asideImageElement.alt = imageAlt;

  //sostituisce il titolo
  asideDetailElement.children[1].children[0].textContent = titleTextContent;

  //sostituisce il contenuto del paragrafo
  asideDetailElement.children[1].children[1].children[0].textContent =
    PTextContent;
}

function setAsideDetailBarcelona() {
  //se aside-detail non visibile rendi visibile
  showAside();

  //nuova immagine e nuovi testi da inserire
  extraxtCityDetail(barcelonaLiElement);

  PTextContent =
    "Barcelona - Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus." +
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus.";

  //inserisce i nuovi contenuti relativi al link cliccato
  insertNewAsideDetail();
}

function setAsideDetailHawai() {
  //se aside-detail non visibile rendi visibile
  showAside();

  //nuova immagine e nuovi testi da inserire
  extraxtCityDetail(hawaiLiElement);

  PTextContent =
    "Hawai - Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus." +
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus.";

  //inserisce i nuovi contenuti relativi al link cliccato
  insertNewAsideDetail();
}

function setAsideDetailLondon() {
  //se aside-detail non visibile rendi visibile
  showAside();

  //nuova immagine e nuovi testi da inserire
  extraxtCityDetail(londonLiElement);

  PTextContent =
    "London - Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus." +
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus.";

  //inserisce i nuovi contenuti relativi al link cliccato
  insertNewAsideDetail();
}

function setAsideDetailMiami() {
  //se aside-detail non visibile rendi visibile
  showAside();

  //nuova immagine e nuovi testi da inserire
  extraxtCityDetail(miamiLiElement);

  PTextContent =
    "Miami - Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus." +
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus.";

  //inserisce i nuovi contenuti relativi al link cliccato
  insertNewAsideDetail();
}

function setAsideDetailMunich() {
  //se aside-detail non visibile rendi visibile
  showAside();

  //nuova immagine e nuovi testi da inserire
  extraxtCityDetail(munichLiElement);

  PTextContent =
    "Munich - Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus." +
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus.";

  //inserisce i nuovi contenuti relativi al link cliccato
  insertNewAsideDetail();
}

function setAsideDetailNewYork() {
  //se aside-detail non visibile rendi visibile
  showAside();

  //nuova immagine e nuovi testi da inserire
  extraxtCityDetail(newYorkLiElement);

  PTextContent =
    "New York - Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus." +
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus.";

  //inserisce i nuovi contenuti relativi al link cliccato
  insertNewAsideDetail();
}

function setAsideDetailParis() {
  //se aside-detail non visibile rendi visibile
  showAside();

  //nuova immagine e nuovi testi da inserire
  extraxtCityDetail(parisLiElement);

  PTextContent =
    "Paris - Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus." +
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus.";

  //inserisce i nuovi contenuti relativi al link cliccato
  insertNewAsideDetail();
}

function setAsideDetailSidney() {
  //se aside-detail non visibile rendi visibile
  showAside();

  //nuova immagine e nuovi testi da inserire
  extraxtCityDetail(sidneyLiElement);

  PTextContent =
    "Sidney - Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus." +
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus.";

  //inserisce i nuovi contenuti relativi al link cliccato
  insertNewAsideDetail();
}

function setAsideDetailTokyo() {
  //se aside-detail non visibile rendi visibile
  showAside();

  //nuova immagine e nuovi testi da inserire
  extraxtCityDetail(tokyoLiElement);

  PTextContent =
    "Tokyo - Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus." +
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus.";

  //inserisce i nuovi contenuti relativi al link cliccato
  insertNewAsideDetail();
}

function setAsideDetailBali() {
  //se aside-detail non visibile rendi visibile
  showAside();

  //nuova immagine e nuovi testi da inserire
  extraxtCityDetail(baliLiElement);

  PTextContent =
    "Bali - Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus." +
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis" +
    " nobis nihil impedit laudantium nisi, officiis autem modi a eaque?" +
    "Nam explicabo dolore possimus sit tenetur est porro a quia" +
    " ducimus.";

  //inserisce i nuovi contenuti relativi al link cliccato
  insertNewAsideDetail();
}
