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
	return `https://github.com/gaspid/foundryvtt-script/blob/main/stone/${rollStoneType}.png?raw=true`;
};
let thisStoneType = () => {
	switch (rollStoneType) {
		case 1:
			return 'Красный';
			break;
		case 2:
			return 'Голубой';
			break;
		case 3:
			return 'Оранжевый';
			break;
		case 4:
			return 'Желто-белый';
			break;
		case 5:
			return 'Белый';
			break;
		case 6:
			return 'Синий';
			break;
		case 7:
			return 'Фиолетовый';
			break;
		case 8:
			return 'Коричневый';
			break;
		case 9:
			return 'Зеленый';
			break;
		case 10:
			return 'Зелено-голубой';
			break;
		case 11:
			return 'Цвет морской волны';
			break;
		case 12:
			return 'Фиалковый';
			break;
		case 13:
			return 'Бледно желтый';
			break;
		case 14:
			return 'Темно-синий';
			break;
		case 15:
			return 'Лиловый';
			break;
		case 16:
			return 'Берюзовый';
			break;
		case 17:
			return 'Лимонный';
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

let results_html = `<h1>Казино камней</h1>
<h3><i>${stone.stoneType}</i></h3>
<img src=${stone.stoneIMG}/>
 <b>Cостояние:</b> ${stone.stoneCondition}
<br>
<b> Размер:</b> ${stone.stoneSize}


 `;

ChatMessage.create({
	user: game.user._id,
	speaker: ChatMessage.getSpeaker({ token: actor }),
	content: results_html
});