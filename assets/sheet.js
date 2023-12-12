// side navigation bar
// function openNav() {
// 	document.getElementById('mySidenav').style.width = '100%';
// 	document.getElementById('main').style.marginLeft = '100%';
// }

// function closeNav() {
// 	document.getElementById('mySidenav').style.width = '0';
// 	document.getElementById('hamburger').style.marginLeft = '0';
// }

currentOriginal.src = './assets/images/' + imgFiles1[i] + '.jpg';

const flexParent1 = document.getElementById('flex-parent-1');

const images1 = [
	{
		name: 'aaraliya-01',
		caption: 'this is the caption that goes here with the first',
	},
	{
		name: 'aaraliya-02',
		caption: 'this is the caption that goes here with the second',
	},
	{
		name: 'aaraliya-03',
		caption: 'this is the caption that goes here with the third',
	},
];

function generateRow(array) {
	for (let i = 0; i < array.length; i++) {
		const currentDataEntry = array[i];

		currentOriginal.src = './assets/images/' + currentDataEntry.name + '.jpg';
		currentOriginal.alt = '@' + currentDataEntry.name;
		const currentCaption = document.createElement('p');
		currentCaption.classList.add('body-text');
		currentCaption.innerText = array[i].caption;
		currentFlexItem.appendChild(currentCaption);

		currentHalftone.src =
			'./assets/images/' + currentDataEntry.name + '_halftone.jpg';
	}
}

generateRow(images1);
generateRow(images2);
generateRow(images3);
