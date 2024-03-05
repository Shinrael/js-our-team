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

for(let teams of team){
  console.log(teams);
}