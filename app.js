  angular.module('transcludeExample', ['ngResource'])
	.directive('listView', function($resource){
      return {
        restrict: 'E',
        scope: {listData:'=data'},
				transclude:true,
				link: function(scope, element, attrs, ctrl, transclude) {
					scope.postPerPage = 2;
					scope.page = 1;
					var post = new Array();
					var postResource = $resource('json.php', {});
					post = postResource.query(
						{page:scope.page,postPerPage:scope.postPerPage},
						function(data) {}
					);
					scope.post = post;
					transclude(scope, function(clone, scope) {
						element.append(clone);
					});
				}
      };
  })
  .controller('ExampleController', ['$scope', function($scope) {
		$scope.articles = [
			{title:'lorem ipsum1',content:'lorem ipsum dolor sit amet'},
			{title:'lorem ipsum2',content:'lorem ipsum dolor sit amet'},
			{title:'lorem ipsum3',content:'lorem ipsum dolor sit amet'},
			{title:'lorem ipsum4',content:'lorem ipsum dolor sit amet'},
			{title:'lorem ipsum5',content:'lorem ipsum dolor sit amet'},
			{title:'lorem ipsum6',content:'lorem ipsum dolor sit amet'},
			{title:'lorem ipsum7',content:'lorem ipsum dolor sit amet'},
			{title:'lorem ipsum8',content:'lorem ipsum dolor sit amet'}
		];

		
  }]);		