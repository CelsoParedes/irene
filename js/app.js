(function(){

	var app = angular.module('portfolio', []);

	app.directive('portfolioItem', function(){
		return{
			restrict: 'E',
			templateUrl: 'portfolio-item.html',
			controller: function(){
				this.portfolioData = portfolioImagesAndSubheaders;
				this.openModal = function(){
					alert('Hola');
				}
			},
			controllerAs: 'port'
		}
	});

	//Directiva para cargar los modales cuando se clicke en una obra.
	app.controller('portfolioModal', function(){
		this.openModal = function(){
			alert('Hola');
		}
	});

	app.controller('formController',function($http){
		/*this.emai = {};
		console.log(this.emai);
		this.addMail = function(){
			$http.get('js/emails.json').success(function(data){
			data.push({},{});
			console.log(data);
			});
		};

		Para terminar esta parte de la página tengo que usar node y mandar el e-mail por la parte de servidor y no de
		cliente así que no se si es válido éste código pero para validar se va a necesitar por lo menos una parte.




		*/
	});

	var portfolioImagesAndSubheaders = [
	{i: 'css/img/portfolio/roundicons.png',h4: 'Round Icons', p: 'Graphic Design'},
	{i: 'css/img/portfolio/startup-framework.png',h4: 'Startup Framework', p: 'Website Design'},
	{i: 'css/img/portfolio/treehouse.png',h4: 'Treehouse', p: 'Website Design'},
	{i: 'css/img/portfolio/golden.png',h4: 'Golden', p: 'Website Design'},
	{i: 'css/img/portfolio/escape.png',h4: 'Escape', p: 'Website Design'},
	{i: 'css/img/portfolio/dreams.png',h4: 'Dreams', p: 'Website Design'}
	];

	var emails = [
	{
		name: '',
		email: '',
		phone: '',
		msg: ''
	}
	];

})();