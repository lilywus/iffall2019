function openNav() {
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("main").style.marginLeft = "300px";
  var all = document.getElementsByClassName('content');
	for (var i = 0; i < all.length; i++) {
	  all[i].style.marginTop = '10px';
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
  document.getElementById("main").style.marginLeft= "0";
  var all = document.getElementsByClassName('content');
	for (var i = 0; i < all.length; i++) {
	  all[i].style.marginTop = '-90px';
  }
}