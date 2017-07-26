// les variables ci-dessous ne sont pas misent dans la function car sinon elle se retrouvera bloquée dans cette function
var reponse =['Bonjour', 'Tu vas bien?', 'Qui es-tu?', 'Je suis une IA'];
var x=0;

// je cible mon 'button' onclick et je lui ajoute la function .click
$('#send').click(function(){

// une variable est créée que l'on nomme "contenu" et elle récupère mon #text
// Je cible mon input text avec mon id
// mon .val() représente la valeur du second input (voir html)
var contenu = $('#text').val();

// je cible ma div "chatbox" et ensuite je tape "apend"  pour insérer du texte.
 // Je récupère ma var contenu car le contenu représente mon futur texte
$('#chatbox').append('<p>'+ contenu + '</p>');




// si x = 3 réponse, il doit revenir à 0 pour évité qu'il soit undefined
	if(x==4){
		x=0
	}


	//mon setTimeout permet une forme de style. IL n'est pas obligatoire pour faire fonctionner mon IA mais lui donne un genre plus réél
	setTimeout(function(){

		// ici on va chercher la réponse [x] donc la variable réponse pour créer une conversation
// le h6 est ici pour différencier, mais on aurait pu mettre un 'p'
	$('#chatbox').append('<h6>'+ reponse[x] + '</h6>');


// ici on incrémente de 1 à chaque fois. (voir page)
// il faut suivre la procédure dans l'odre exemple: la réponse vient après le contenu, donc la question
	x++;

	},3000); //le 3000 représente le temps de réponse de mon IA


// ici on rappelle notre contenu et on remplace notre .val() vide par un val('') pour que ma boite de dialogue soit vide dans mon html.
// la string '' représente quelque chose d'inexistant
	var contenu = $('#text').val(' ');





});

