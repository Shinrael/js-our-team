const teamContainer = document.getElementById('team-container');

// Creo l'array con tutti i dati forniti

const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    img: 'assets/img/wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    img: 'assets/img/angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    img: 'assets/img/walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    img: 'assets/img/angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    img: 'assets/img/scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    img: 'assets/img/barbara-ramos-graphic-designer.jpg'
  },
]

// Stampo in console tutti gli elementi dell'array

for(let member of team){

  console.log(member);

  // Creo un div che conterrà ogni membro del team

  const memberContainer = document.createElement('div');

  // Inietto dentro ad ogni div i membri del team

  memberContainer.innerHTML = `
  <div class="card text-bg-dark">
      <img src="${member.img}" class="card-img" alt="${member.name}">
      <div class="card-img-overlay">
        <h2 class="card-title">${member.name}</h2>
        <p class="card-text">${member.role}</p>
      </div>
    </div>
  `;

  // Utilizzando append inserisco ognuno di questi div dentro il container principale
  
  teamContainer.append(memberContainer);
}