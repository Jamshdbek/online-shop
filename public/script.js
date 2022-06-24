window.onload = () => {
  document.querySelector(".preloader").style.display = "none";
  document.querySelector(".body").style.display = "block";
};
// progress

setTimeout(() => {
  document.querySelector("#myProgress").style.display = `none`;
  document.querySelector(".bigData").style.display = `block`;
  document.querySelector(".main").style.display = "flex";
  document.querySelector("#accordion").style.display ="block"
}, 4000);


i = 0;
if (i == 0) {
  i = 1;
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame , 25, () => {}, 4000);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      // i = 0;
    } else {
      width++;

      elem.style.width = width + "%";
      elem.innerHTML = width + "%";
    }
  }
}

// produkt objjectning kanstruktiri

function Product(nomParam, kategoriyaParam, narxParam, holatParam, suratParam) {
  this.nom = nomParam;
  this.kategoriya = kategoriyaParam;
  this.narx = narxParam;
  this.holat = holatParam;
  this.surat = suratParam
    ? suratParam
    : "https://simg.nicepng.com/png/small/304-3048415_business-advice-product-icon-png.png";
  this.vaqt = new Date();
}
console.log(`
  __                    __  _______  _            ____         ___      _        _     _   
    _                  _    _        _           _    _      _     _    _  _    _ _    _
     _       _        _     _        _          _           _       _   _   _ _   _    _ 
      _    _   _    _       ______   _          _           _       _   _    _    _    _
        _  _     _ _        _        _           _    _      _     _    _         _    
        _         _         _______  _______      ____        ____      _         _    0
`);
// new porduct
function filterProducts() {
  let tanlanganHolat = document.getElementById(filterHolat).value;
  let tanlanganKategoriya = document.getElementById("filterKategoriya").value;
  let saralanganArray = [];
  if (tanlanganHolat !== "barchasi" && tanlanganKategoriya !== "barchasi") {
    saralanganArray = productArray.filter((product) => {
      return (
        product.holat === tanlanganHolat &&
        product.kategoriya === tanlanganKategoriya
      );
    });
  } else if (tanlanganKategoriya !== "barchasi") {
    saralanganArray = productArray.filter((product) => {
      return product.kategoriya === tanlanganKategoriya;
    });
  } else if (tanlanganHolat !== "barchasi") {
    saralanganArray = productArray.filter((product) => {
      return product.holat === tanlanganHolat;
    });
  } else {
    saralanganArray = productArray;
  }

  // Saralangan arrayni ekranga chiqarish
  ekrangaChiqarish(saralanganArray);
}

//yangi maxsulot
// Barcha productlarni saqlovchi array
let productArray = [
  new Product("Iphone 13 Pro", "texnika", 1300, "yangi", "https://avatars.mds.yandex.net/i?id=2a00000181962c8ac40b0e3e45c4d1533e39-1527923-fast-images&n=13"),
  new Product("Coputer", "texnika", 80, "yangi", "https://avatars.mds.yandex.net/i?id=7cfe05bebb4712a8a319a3c4d4ed6213-3100052-images-thumbs&n=13"),
  new Product("fudbolka", "kiyim", 100, "eski", "https://avatars.mds.yandex.net/i?id=4f4924f5680573705a642a452aafb4c7-5024131-images-thumbs&n=13"),
  new Product("Soat", "texnika", 12, "yangi", "https://avatars.mds.yandex.net/i?id=6dcbb0693103ae2ec37281a70d1620ad-4255243-images-thumbs&n=13"),
  new Product("Tufli", "kiyim", 9, "yangi", "https://avatars.mds.yandex.net/i?id=93db942d8367a0df0be21b175bf83fbd-5603290-images-thumbs&n=13"),
  new Product("Samsiun Node8", "kiyim", 90, "yangi", "https://avatars.mds.yandex.net/i?id=833d42d7adc6bb6346ef2a4469e25e56-5878150-images-thumbs&n=13"),
  new Product("o'quv qurollari", "kiyim", 7, "yangi", "https://avatars.mds.yandex.net/i?id=253edbb577ecb0a335feabfe8d35ecd7-4451316-images-thumbs&n=13"),
  new Product("Sumka", "kiyim", 10, "yangi", "https://avatars.mds.yandex.net/i?id=12f0afe0c3c07007357f7a6dc1d26205-4303244-images-thumbs&n=13"),



];

const korzinkaArray = [];
const mainDiv = document.querySelector(".main");
ekrangaChiqarish(productArray);

//local storich orqali qo'shish 
// productArray = JSON.parse(localStorage.getItem("productlar")) || [];
// const  korzinkaArray = JSON.parse(localStorage.getItem('incorzin'))||[];

// const mainDiv = document.querySelector(".main");
// ekrangaChiqarish(productArray);

// Yangi mahsulot qo'shish

function mahsulotQoshish() {
  let nom = document.getElementById("nom").value;
  let kategoriya = document.getElementById("kategoriya").value;
  let narx = document.getElementById("narx").value;
  let holat = document.querySelector("[name=holat]:checked").value;
  let surat = document.querySelector("#surat").value;

  if (nom && narx) {
    const product = new Product(nom, kategoriya, narx, holat, surat);
    // Yangi hosil bo'lgan mahsulotni arrayga qo'shish
    productArray.push(product);
    localStorage.setItem("productlar", JSON.stringify(productArray));
    ekrangaChiqarish(productArray);
  }
}
// ekarnga chiqarish
function ekrangaChiqarish(arrayParam) {
  mainDiv.innerHTML = "";
  arrayParam.forEach((product, index) => {
    mainDiv.innerHTML += `<div class="card" id="newcard" style="width: 18rem;">
    <img src="${product.surat}" class="card-img-top" alt="...">
    <div id="newcard" class="card-body">
      <h4 class="card-title">${product.nom}</h4>
      <p class="card-title">Turi: ${product.kategoriya} Holat: ${product.holat}</p>
     
      <h5 class="card-title">Narx: ${product.narx}$</h5>
      <p class="card-title">${new Date(product.vaqt).toLocaleString()}</p>
      <button  onclick='korzinkagaQoshish(${index})'>Sotib olish</button>
    </div>
 
  </div>`;
  });
}
// Karzinka
function korzinkagaQoshish(index) {

  korzinkaArray.push(productArray[index]);
  // localStorage ga joylash
  localStorage.setItem("incorzin" ,JSON.stringify(korzinkaArray));

 
  
    document.getElementById("span").innerText = korzinkaArray.length;

  karzinkaniEkrangaChiqariw(korzinkaArray);
}
// Form submit bo'lganda refresh bo'lishini oldini olish
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});

/**
 * Mahsulotlarni turli hil kriteriya bo'yicha saralash
 */
const sideBar = document.querySelector(".sidebar");
function saytBardichiqarish() {
  document.querySelector(".sidebar").style.display = "block";
  document.querySelector(".exet").style.display="block"
  karzinkaniEkrangaChiqariw(korzinkaArray)
  
}
function exet(){
  document.querySelector(".sidebar").style.display ="none";
  document.querySelector(".exet").style.display="none"

}

// document.getElementById("span").innerText = korzinkaArray.length;

function karzinkaniEkrangaChiqariw() {
 
  sideBar.innerHTML = "";

  korzinkaArray.forEach((product, index, array) => {

    sideBar.innerHTML += `<div class="card" style="width: 18rem;">
      <img src="${product.surat}" class="card-img-top" alt="...">
      <div class="card-body">
        <h2 class="card-title">${product.nom}</h5>
        <h5 class="card-title">Turi: ${product.kategoriya}</h5>
        <h5 class="card-title">Holat: ${product.holat}</h5>
        <h5 class="card-title">Narx: ${product.narx}$</h5>
       
    
      </div>
    </div>`;
  });
}
// function deleteOne(){
//   let importer = JSON.parse(localStorage.getItem('incorzin'))
// }

function filterProducts() {
  let tanlanganHolat = document.getElementById("filterHolat").value;
  let tanlanganKategoriya = document.getElementById("filterKategoriya").value;
  let saralanganArray = [];
  if (tanlanganHolat !== "barchasi" && tanlanganKategoriya !== "barchasi") {
    saralanganArray = productArray.filter((product) => {
      return (
        product.holat === tanlanganHolat &&
        product.kategoriya === tanlanganKategoriya
      );
    });
  } else if (tanlanganKategoriya !== "barchasi") {
    saralanganArray = productArray.filter((product) => {
      return product.kategoriya === tanlanganKategoriya;
    });
  } else if (tanlanganHolat !== "barchasi") {
    saralanganArray = productArray.filter((product) => {
      return product.holat === tanlanganHolat;
    });
  } else {
    saralanganArray = productArray;
  }

  // Saralangan arrayni ekranga chiqarish

  ekrangaChiqarish(saralanganArray);
}
function opening() {
  document.querySelector(".sind").classList.toggle("enter");
}
function sortProduct() {
  let narxSort = document.getElementById("sortNarx").value;
  productArray.sort((productA, productB) => {
    return narxSort == "arzon"
      ? productA.narx - productB.narx
      : productB.narx - productA.narx;
  });

  sortByTime();
  ekrangaChiqarish(productArray);
}

function sortByTime() {
  let vaqtsort = document.getElementById("vaqtsorch").value;

  productArray.sort((productA, productB) => {
    return vaqtsort == "yangi"
      ? productB.vaqt - productA.vaqt
      : productA.vaqt - productB.vaqt;
  });
  console.log(productArray);
  ekrangaChiqarish(productArray);
}


    let contenr = 0;
   let onion = setInterval(filesor,50);
    function filesor(){
      if(contenr >= 130){
        clearInterval(onion);
      }else{

        document.querySelector(".sistemone").innerHTML = `${++contenr}++ industries`;
      }
 }
//eee
 let oves = 0;
 let onionb = setInterval(going,3);
  function going(){
    if(oves >= 1785){
      clearInterval(onionb);
    }else{

      document.querySelector(".sistemtwo").innerText = `${++oves}++ Active Suppries`;
    }
}
// function sorcher() {
//   let sorch = document.getElementById("sorch").value;
//   console.log();
//   let ender = new RegExp(sorch, `gi`);
//   return product.nom.test(ender);

//   console.log(productArray);
//   ekrangaChiqarish(productArray);
// }
