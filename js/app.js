(function(){
	var app = angular.module('portfolio', []);

	app.directive('portfolioItem', function(){
		return{
			restrict: 'E',
			templateUrl: 'portfolio-item.html',
			controller: function(){
				this.portfolioData = data;
			},
			controllerAs: 'port'
		}
	});

	var data = [
	{i: 'css/img/portfolio/roundicons.png',h4: 'Round Icons', p: 'Graphic Design'},
	{i: 'css/img/portfolio/startup-framework.png',h4: 'Startup Framework', p: 'Website Design'},
	{i: 'css/img/portfolio/treehouse.png',h4: 'Treehouse', p: 'Website Design'},
	{i: 'css/img/portfolio/golden.png',h4: 'Golden', p: 'Website Design'},
	{i: 'css/img/portfolio/escape.png',h4: 'Escape', p: 'Website Design'},
	{i: 'css/img/portfolio/dreams.png',h4: 'Dreams', p: 'Website Design'}
	];
})();