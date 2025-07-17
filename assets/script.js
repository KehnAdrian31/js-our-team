const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// recupero gli elementi del dom
//definizione delle variabili
const teamContainer = document.getElementById(`teamContainer`);

//definisco una variabile che mi serve per contenere tutte le colonne e le card da iniettare nella pagina

let cards =  '';

//ciclo l' array degli elementi
for(let i=0; i<teamMembers.length; i++){

  const member = teamMembers[i];

  const{name, role, email, img} = member;

  cards += `<div class="col-12 col-md-6 col-lg-4">
        <div class="card bg-dark rounded-0 mb-3">
          <div class="row g-0">
           <div class="col-md-4">
              <img src="${img}" class="img-fluid img-adapt" alt="...">
           </div>
            <div class="col-md-8">
              <div class="card-body text-white">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${role}</p>
                <p class="card-text"><small class="text-info">${email}</small></p>
              </div>
            </div>
          </div>
        </div>`
}

teamContainer.innerHTML = cards;