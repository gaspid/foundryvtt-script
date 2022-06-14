//random script =================================
function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//===============================================
let rollStoneType = getRandomInRange(1, 17);
let rollStoneSize = getRandomInRange(1, 10);
let rollStoneСondition = getRandomInRange(1, 11);

//==============================
let thisStoneIMG = () => {
	return `./stone/${rollStoneType}.png`;
};
let thisStoneType = () => {
	switch (rollStoneType) {
		case 1:
			return 'красный';
			break;
		case 2:
			return 'голубой';
			break;
		case 3:
			return 'оранжевый';
			break;
		case 4:
			return 'Желто-белый';
			break;
		case 5:
			return 'белый';
			break;
		case 6:
			return 'синий';
			break;
		case 7:
			return 'Фиолетовый';
			break;
		case 8:
			return 'коричневый';
			break;
		case 9:
			return 'зеленый';
			break;
		case 10:
			return 'зелено-голубой';
			break;
		case 11:
			return 'цвет морской волны';
			break;
		case 12:
			return 'фиалковый';
			break;
		case 13:
			return 'бледно желтый';
			break;
		case 14:
			return 'темно-синий';
			break;
		case 15:
			return 'лиловый';
			break;
		case 16:
			return 'берюзовый';
			break;
		case 17:
			return 'лимонный';
			break;
	}
};
let thisStoneSize = () => {
	if (rollStoneSize <= 6) {
		return 'маленкий';
	}
	if (rollStoneSize <= 9) {
		return 'средний';
	}
	if (rollStoneSize <= 10) {
		return 'болшёй';
	}
};
let thisStoneСondition = () => {
	if (rollStoneСondition <= 4) {
		return 'норм';
	}
	if (rollStoneСondition <= 8) {
		return 'потресканый';
	}
	if (rollStoneСondition <= 10) {
		return 'очень потресканый';
	}
	if ((rollStoneСondition = 11)) {
		return 'смерть';
	}
};
//==============================================
const stone = {
	stoneType: thisStoneType(),
	stoneSize: thisStoneSize(),
	stoneCondition: thisStoneСondition(),
	stoneIMG: thisStoneIMG()
};

//==============================================
console.log(stone);
//======================================
let targets = [];
game.user.targets.forEach((i) => {
	let name = i.name;
	targets.push(name);
});

let results_html = `<h2>Казино камней</h2>
<h6>${stone.stoneType}</h6>
<img src=${stone.stoneIMG}/>
 <strong>Cостояние: ${stone.stoneCondition}</strong>.
 <strong>Размер: ${stone.stoneCondition}</strong>.


 `;

ChatMessage.create({
	user: game.user._id,
	speaker: ChatMessage.getSpeaker({ token: actor }),
	content: results_html
});
