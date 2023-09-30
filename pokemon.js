/*interface ObjectOption{
  name: string;
  height: string | number;
  weight: string | number;
  types: Array<string> | string;
  abilities: Array<string>;
  hp: string | number;
  attack: string | number;
  defense: string | number;
  speed: string | number;
}

interface DataOption{
  option: ObjectOption[];
}*/
var data = [
    {
        name: 'Bulbasaur',
        height: '7',
        weight: '69',
        types: ['grass', 'poison'],
        'base-Experience': '64',
        abilities: ['overgrow', 'chlorophyll'],
        hp: '45',
        attack: '49',
        defense: '49',
        'special-attack': '65',
        'special-defense': '65',
        speed: '45',
    },
    {
        name: 'Ivysaur',
        height: '10',
        weight: '130',
        types: ['grass', 'poison'],
        'base-Experience': '142',
        abilities: ['overgrow', 'chlorophyll'],
        hp: '60',
        attack: '62',
        defense: '63',
        'special-attack': '80',
        'special-defense': '80',
        speed: '60',
    },
    {
        name: 'Venusaur',
        height: '20',
        weight: '1000',
        types: ['grass', 'poison'],
        'base-Experience': '236',
        abilities: ['overgrow', 'chlorophyll'],
        hp: '80',
        attack: '82',
        defense: '83',
        'special-attack': '100',
        'special-defense': '100',
        speed: '80',
    },
    {
        name: 'Charmander',
        height: '6',
        weight: '85',
        types: ['fire'],
        'base-Experience': '62',
        abilities: ['blaze', 'solar-power'],
        hp: '39',
        attack: '52',
        defense: '43',
        'special-attack': '60',
        'special-defense': '50',
        speed: '65',
    },
    {
        name: 'Charmeleon',
        height: '11',
        weight: '190',
        types: ['fire'],
        'base-Experience': '142',
        abilities: ['blaze', 'solar-power'],
        hp: '58',
        attack: '64',
        defense: '58',
        'special-attack': '80',
        'special-defense': '65',
        speed: '80',
    },
    {
        name: 'Charizard',
        height: '17',
        weight: '905',
        types: ['fire', 'flying'],
        'base-Experience': '240',
        abilities: ['blaze', 'solar-power'],
        hp: '78',
        attack: '84',
        defense: '78',
        'special-attack': '109',
        'special-defense': '85',
        speed: '100',
    },
    {
        name: 'Squirtle',
        height: '5',
        weight: '90',
        types: ['water'],
        'base-Experience': '63',
        abilities: ['torrent', 'rain-dish'],
        hp: '44',
        attack: '48',
        defense: '65',
        'special-attack': '50',
        'special-defense': '64',
        speed: '43',
    },
    {
        name: 'Wartortle',
        height: '10',
        weight: '225',
        types: ['water'],
        'base-Experience': '142',
        abilities: ['torrent', 'rain-dish'],
        hp: '59',
        attack: '63',
        defense: '80',
        'special-attack': '65',
        'special-defense': '80',
        speed: '58',
    },
    {
        name: 'Blastoise',
        height: '16',
        weight: '855',
        types: ['water'],
        'base-Experience': '239',
        abilities: ['torrent', 'rain-dish'],
        hp: '79',
        attack: '83',
        defense: '100',
        'special-attack': '85',
        'special-defense': '105',
        speed: '78',
    },
    {
        name: 'Caterpie',
        height: '3',
        weight: '29',
        types: ['bug'],
        'base-Experience': '39',
        abilities: ['shield-dust', 'run-away'],
        hp: '45',
        attack: '30',
        defense: '35',
        'special-attack': '20',
        'special-defense': '20',
        speed: '45',
    },
];
//html 10개 선택 구간 ID를 select-border DOM 구조로 묶기
var selectBorder = document.getElementById("select-border");
data.forEach(function (a, index) {
    var topNode = document.createElement('div'); // 가장 위의 div 태그 선언
    topNode.classList.add('select'); // select 클래스 선언
    var image = document.createElement("img");
    image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(index + 1, ".png"); //깃허브에서 각 인덱스 가져오기
    image.style.width = "30%"; //이미지 크기 줄이기
    topNode.appendChild(image); // 클래스에 이미지 노드 붙이기
    var inform = document.createElement('div'); // information 넣을 inform div 태그 선언
    var h2Text = document.createElement('h2'); // 1. h2 태그 선언
    var pHeight = document.createElement('p'); // 2. Height 넣는 p 태그 선언
    var pWeight = document.createElement('p'); // 3. Weight 넣는 p 태그 선언
    var pTypes = document.createElement('p'); // 4. type 넣는 p 태그 선언
    h2Text.innerText = a.name; // data 배열에서 이름 받아오기
    pHeight.innerText = "Height: ".concat(a.height); // height 받아오기
    pWeight.innerText = "Weight: ".concat(a.weight); // weight 받아오기
    pTypes.innerText = "Types: ".concat(a.types.join(', ')); // types 받아오기
    inform.append(h2Text, pHeight, pWeight, pTypes); // inform 노드에 Text, height, weight, types 노드 붙이기
    topNode.appendChild(inform); // select 클래스에 inform 노드 붙이기
    selectBorder.appendChild(topNode); //최종적으로 selectBorder 노드에 붙이기
    /*document.querySelector('.select').addEventListener('mouseenter', () => {
      topNode.style.borderBlockColor="yellow";
    });
  
    document.querySelector('.select').addEventListener('mouseleave', () => {
      topNode.style.borderBlockColor="#F7C437";
    });*/
}); //이걸 10번 반복
