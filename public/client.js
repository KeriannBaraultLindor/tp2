//script qui gère la fonction AJAX
elmModifier = document.getElementsByClassName("modifier");//va chercher tous les boutons ayant la classe "modifier"
for (var i = 0; i < elmModifier.length; i++) {
    elmModifier[i].addEventListener('click', modifier, false);//ajoute un événement à chaque bouton "modifier"
}

function modifier(){
	//console.log(this.parentNode.parentNode.tagName);
	var parent = this.parentNode.parentNode;
	var elmTd = parent.getElementsByTagName("td");
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

/*function traiterRequest(e){
 console.log("xhr.readyState = " + xhr.readyState)
 console.log("xhr.status = " + xhr.status)
 if(xhr.readyState == 4 && xhr.status == 200){
	 console.log('ajax fonctionne')
	 var response = JSON.parse(xhr.responseText);
	 console.log(xhr.responseText);
	 elmChamp_id.innerHTML = response[0]._id
	 elmLigne.style.backgroundColor = "#0f0"

	}
}//fin fonction traiterRequest
*/