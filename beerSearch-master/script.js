(function init(){
	const $ = document;
	let request = new XMLHttpRequest();
	const content = $.getElementById('content');
	const searchText = $.getElementById('searchText');
	const btnSearch = $.getElementById('btnSearch');

	function gotBeersDataFromApi() {		
		if (this.readyState == 4) {
			let data = JSON.parse(request.response);
			if (this.status == 200) {
				beerGlobalFunctions.showDataOPage(data);
				btnSearch.addEventListener('click', /*beerGlobalFunctions.searchBeer(data)*/ searchBeer);
				function searchBeer () {
					let found = data.find(function(obj) {
		 				return obj.name === searchText.value;
					});
					console.log(found);
					searchText.value = '';
				}
			}
			else console.log(`${request.status}: ${request.statusText}`);
		} 
	};
	request.onreadystatechange = gotBeersDataFromApi;
	request.open('GET', `https://api.punkapi.com/v2/beers/`);
	request.send();

})();
