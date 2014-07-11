
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var textField8 = {};	// @textField
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	textField8.keyup = function textField8_keyup (event)// @startlock
	{// @endlock
		var re=$$('textField8').getValue();
		var recherche=re+'*';
		sources.client.query('nom == :1',recherche);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var login=$$('log').getValue();
		var mdp=$$('mdpC').getValue();
		 sources.client.query('login == :1 AND mdp == :2 ',
		{onSuccess: function(){
            alert('requete exécuté avec succes');
            },params:[login,mdp]
        });
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		alert('hbdcs');
		var nom=$$('nom').getValue();
		var prenom=$$('prenom').getValue();
		var email=$$('email').getValue();
		var login=$$('login').getValue();
		var mdp=$$('mdp').getValue();
		if(nom=='' || prenom=='' || email=='' || login=='' || mdp==''  ){
			alert("Remplir SVP tt les champs");}
			else {

				sources.client.newEntity();
				sources.client.addNewElement();
				sources.client.nom=nom;
				sources.client.prenom=prenom;
				sources.client.email=email;
				sources.client.login=login;
				sources.client.mdp=mdp;
				sources.client.save();
				

				
				}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("textField8", "keyup", textField8.keyup, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
