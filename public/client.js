//script qui gère la fonction AJAX
elmModifier = document.getElementsByClassName("modifier");//va chercher tous les boutons ayant la classe "modifier"
elmLigneDiv = document.getElementsByTagName("td");//va chercher tous les "td"
for (var i = 0; i < elmModifier.length; i++) {
    elmModifier[i].addEventListener('click', modifier, false);//ajoute un événement à chaque bouton "modifier"
}

function modifier(){
	xhr = new XMLHttpRequest();
	xhr.open('POST', "modifier", true);
	data = { 
	 "modif":{
	 "nom" : elmLigneDiv[6].innerHTML,
	 "prenom" : elmLigneDiv[7].innerHTML,
	 "telephone" : elmLigneDiv[8].innerHTML,
	 "_id" : elmLigneDiv[9].innerHTML 
	 }//récupère tous éléments du "data" sélectionné
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