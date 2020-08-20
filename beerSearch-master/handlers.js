var beerGlobalFunctions = {

	showDataOPage: function(data) {
		let fragment = document.createDocumentFragment();
		for (let beerData of data) {
			fragment.appendChild(this.createBeer(beerData));	
		}
		content.appendChild(fragment);
	},

	searchBeer: function(data) {
		for (var i = 0; i < data.length; i++) {
			if (searchText.value === data[i]['name']) {
				console.log(data[i]['name']);
			}
		}
		/*let found = data.find(function(obj) {
		 	return obj.name === searchText.value;
		});*/
		/*console.log(found);*/
		searchText.value = '';
	},

	_createElements: function(type, prototypes) {
		const element = document.createElement(type);
		Object.keys(prototypes).forEach(key => element[key] = prototypes[key]);

		return element;
	},

	createBeer: function(data) {
		const elements = [];
		const textOfBeer = [];
		textOfBeer.push(this._createElements('span', {innerHTML: data['name'], className: 'beerNameTitle'}));
		textOfBeer.push(this._createElements('p', {innerHTML: data['description'], className: 'description'}));

		elements.push(this._createElements('img', {src: data['image_url'], className:'beerImg'}));

		const blockWithBeer = document.createElement('div');
		const textWraper = document.createElement('div');
		blockWithBeer.className = "contentBlock";
		textWraper.className = 'textWraper';
		blockWithBeer.id = data['name'];

		
		textOfBeer.forEach(/*elm => textWraper.appendChild(elm)*/ function(elm) {
			textWraper.appendChild(elm);
			if (elm.className === 'description') {
				if (elm.innerHTML.length > 200) {
					elm.innerHTML = elm.innerHTML.substring(0,200) + '...';
				}
			}
		});
		elements.forEach(elm => blockWithBeer.appendChild(elm));

		blockWithBeer.appendChild(textWraper);

		return blockWithBeer;
	}
};
