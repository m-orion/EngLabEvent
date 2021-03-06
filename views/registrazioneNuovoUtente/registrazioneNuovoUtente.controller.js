/*******************
REGISTRAZIONE NUOVO UTENTE
Questo controller si occuperà di gestire tutta la logica di registrazione di un nuovo utente.
Per ogni utente si vuole salvare:
- nome (text)
- cognome (text)
- email aziendale (email)
- se è esterno oppure no (bool)

 */


(function() {
	'use strict';

	angular
	.module('engLabEvents')
	.controller('registrazioneNuovoUtente', registrazioneNuovoUtente);

	registrazioneNuovoUtente.$inject = ['$localStorage'];

	/* @ngInject */
	function registrazioneNuovoUtente($localStorage) {
		var ctrl = this;
		/*
			ATTRIBUTI
		 */
		ctrl.utente = {
				nome:null,
				cognome:null,
				email:null,
				password:null

		};
		ctrl.utenti = $localStorage.utenti;





		/*
    Variabili di flusso
		 */


		/*
      FUNZIONI
		 */
		ctrl.salva = salva;
		ctrl.pulisci = pulisci;
		ctrl.elimina = elimina;

		function salva(){
			ctrl.utente.id = Math.ceil(Math.random() * 100);
			ctrl.utente.dataIscrizione = new Date();
			ctrl.utente.eventiCreati = [];
			ctrl.utenti.push(ctrl.utente);
			ctrl.pulisci();
			alert('Utente registrato correttamente!');
		}

		function pulisci() {
			ctrl.utente = {};
		}

		function elimina(utente){
			ctrl.utenti.splice(utente, 1);
		}


		function init(){
			if (!$localStorage.utenti) {
				$localStorage.utenti = [];
			}
				ctrl.utenti = $localStorage.utenti;
		}
		init();

	}
})();
