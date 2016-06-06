(function(){

	var app = angular.module('portfolio', ['ui.bootstrap']);


	//Controlador para cargar los modales cuando se clicke en una obra.
	app.controller('ModalInstanceCtrl', function($scope, $modalInstance, value) {
	  $scope.data = {};
	  $scope.data.value = value;

	  $scope.ok = function () {
	  	$modalInstance.close('this is result for close');
	  };
	  
	});

	app.controller('portfolioCtrl', function($scope, $modal){
		this.portfolioData = portfolioImagesAndSubheaders;
		$scope.open = function(_value) {
		    var modalInstance = $modal.open({
		      controller: "ModalInstanceCtrl",
		      templateUrl: 'myModal',
		      resolve: {
		        value: function() {
		          return _value;
		        }
		      }
		    });
		    modalInstance.result
	  	}
	});

	app.directive('portfolioItem', function(){
		return{
			restrict: 'E',
			templateUrl: 'portfolio-item.html',
			controller: 'portfolioCtrl',
			controllerAs: 'port'
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
	{i: 'css/img/portfolio/roundicons.png',h4: 'Round Icons', p: 'Graphic Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'},



	{i: 'css/img/portfolio/startup-framework.png',h4: 'Startup Framework', p: 'Website Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'},



	{i: 'css/img/portfolio/treehouse.png',h4: 'Treehouse', p: 'Website Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'},



	{i: 'css/img/portfolio/golden.png',h4: 'Golden', p: 'Website Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'},



	{i: 'css/img/portfolio/escape.png',h4: 'Escape', p: 'Website Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'},



	{i: 'css/img/portfolio/dreams.png',h4: 'Dreams', p: 'Website Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'}
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