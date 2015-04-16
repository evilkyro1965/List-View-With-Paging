  angular.module('transcludeExample', [])
	.directive('listView', function(){
      return {
        restrict: 'E',
        scope: {listData:'=data'},
				transclude:true,
				link: function(scope, element, attrs, ctrl, transclude) {
					scope.postPerPage = 2;
					var post = new Array();
					for(var i=0;i<scope.postPerPage;i++) {
						// the code here is executed once in its own scope
						post[i] = scope.listData[i];
					}
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