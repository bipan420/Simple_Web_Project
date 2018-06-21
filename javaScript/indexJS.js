function toggle_topBar(){
	
			var x = document.getElementById("topBar");
			var y = document.getElementById('toggle-topBar');
			var logoAndSearch = document.getElementById('logoAndSearch');
			if(x.style.display == "none")
			{
				x.style.display = "block";
				
				y.innerHTML = "-";
				logoAndSearch.style.height = '100px';

			}
				
			else {
				y.innerHTML = "+";
				x.style.display = "none";
				logoAndSearch.style.height = '150px';
				
				}
}


//Increase height of logoAndSearch when the - button is pressed.
// var topBar = document.getElementById('topBar');
// if (topBar.style.display == 'none'){
// 	document.getElementById('logoAndSearch').style.height = 135px;
// }



