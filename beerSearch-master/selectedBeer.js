(function selectBeer() {

	const $ = document;
	const content = $.getElementById('content');
	const modal = $.getElementById('openBeer');
	/*EVENT HERE*/
	content.addEventListener('click', click);
	function click(event) {
		event.stopPropagation();
		const arr = event.path;
		let beer = arr.find(elm => elm.className == 'contentBlock').id;
		//openBeer.style.display = 'block';
	}
	window.onclick = function(event) {
  		if (event.target != modal) {
   		modal.style.display = "none";
 	}
}
})();