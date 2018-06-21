var slideIndex = 1;
showSlide(slideIndex);
var slideTime;

function plusSlides(n){
	clearTimeout(slideTime);
	slideIndex+=n;
	showSlide(slideIndex);
}


function currentSlide(n) {
	clearTimeout(slideTime);
  showSlide(slideIndex = n);
}

function autoslide(){
	slideIndex++;
	showSlide(slideIndex);
}

function showSlide(n){
	var i;
	var slides = document.getElementsByClassName("myslides");
	var dots = document.getElementsByClassName("dots");
	if (n > slides.length) { slideIndex = 1};
	if (n < 1) { slideIndex = slides.length};
	for (i=0;i<slides.length;i++) {
		slides[i].style.display = "none";
	};
	for (i=0;i<dots.length;i++) {
		dots[i].className = dots[i].className.replace(" active","");
	};
	slides[slideIndex-1].style.display = "block";

	dots[slideIndex-1].className += " active";
	slideTime = setTimeout(autoslide,3000);

}
