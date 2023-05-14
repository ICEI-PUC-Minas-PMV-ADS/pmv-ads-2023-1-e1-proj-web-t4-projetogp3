// trocar imagem perfil
const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Escolha uma imagem";
pictureImage.innerHTML = pictureImageTxt;


inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});

//trocar informações do perfil

let texto= "";
let nome="";
let age="";
let bibliography="";
let gender="";
let local ="";


function trocarInfo (){
  nome = document.getElementById('profile-name').value;
  age = document.getElementById('profile-age').value;
  bibliography = document.getElementById('profile-bibliography').value; 
  gender = document.getElementById('profile-gender').value; 
  local = document.getElementById('profile-location').value; 
  
  texto = (nome + " | " + age + " | " + bibliography + " | " + gender + " | " + local);
  document.getElementById('info').innerHTML = texto;
  console.log("chamou");
}

//trocar cor capa

const wallpaper = document.getElementById('capa');

function trocarCapa (){

  let color = document.getElementById('cor_escolhida').value
  console.log(color)
  wallpaper.style.backgroundColor = color;
}