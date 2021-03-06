//script qui gère la fonction AJAX
elmModifier = document.getElementsByClassName("modifier");//va chercher tous les boutons ayant la classe "modifier"
for (var i = 0; i < elmModifier.length; i++) {
    elmModifier[i].addEventListener('click', modifier, false);//ajoute un événement à chaque bouton "modifier"
}

function modifier(){
	//console.log(this.parentNode.parentNode.tagName);
	var parent = this.parentNode.parentNode;//on va chercher le parent du bounton modifier en question
	var elmTd = parent.getElementsByTagName("td");//on va chercher les td de la bonne ligne, en fonction du tr en question
	xhr = new XMLHttpRequest();
	xhr.open('POST', "modifier", true);
	data = { 
	 "nom" : elmTd[0].innerHTML,
	 "prenom" : elmTd[1].innerHTML,
	 "telephone" : elmTd[2].innerHTML,
	 "_id" : elmTd[3].innerHTML
	}//fin data
	sData = JSON.stringify(data);
	console.log(sData);//test pour savoir le contenu des données recherchées dans la fonction "modifier"
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(sData);
	//xhr.addEventListener("readystatechange", traiterRequest, false);
}//fin fonction modifier