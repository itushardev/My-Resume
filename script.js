let modal = document.getElementById('myModal');
let myImg = document.getElementById('myImg');
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
myImg.onclick = function(){
  	modal.style.display = "block";
  	modalImg.src = this.src;
  	captionText.innerHTML = this.alt;
  }
let span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}