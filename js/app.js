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
	  	}
	});

	//AQUI CAMBIAMOS EL NOMBRE DE EL CONTROLADOR Y LA URL PARA QUE ABRA UN MODAL DE TERMINOS DE USO Y POLITICA DE PRIVACIDAD

	app.controller('footerCtrl', function($scope, $modal){
		this.pt = PolicyAndTerms;
		$scope.open = function(_value) {
		    var modalInstance = $modal.open({
		      controller: "ModalInstanceCtrl",
		      templateUrl: 'myModal2',
		      resolve: {
		        value: function() {
		          return _value;
		        }
		      }
		    });
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






	var portfolioImagesAndSubheaders = [
	{i: 'css/img/portfolio/roundicons.png',h4: 'Round Icons', p: 'Graphic Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'},



	{i: 'css/img/portfolio/startup-framework.png',h4: 'Startup Framework', p: 'Website Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'},



	{i: 'css/img/portfolio/treehouse.png',h4: 'Treehouse', p: 'Website Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'},



	{i: 'css/img/portfolio/golden.png',h4: 'Golden', p: 'Website Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'},



	{i: 'css/img/portfolio/escape.png',h4: 'Escape', p: 'Website Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'},



	{i: 'css/img/portfolio/dreams.png',h4: 'Dreams', p: 'Website Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'}
	];

	var PolicyAndTerms = [
	{
		title: 'Privacy Policy',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'
	},
	{
		title: 'Terms of Use',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'
	}
	];

})();