function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ ctrl.count }}</div>',
			'</div>'
		].join(''),
		require: 'counter',
		controller: function () {
			this.count = 0;
		},
		controllerAs: 'ctrl',
		link: function(scope, element, attrs, ctrl) {
			document.addEventListener('click', function() {
				ctrl.count++;
				scope.$apply();
			});

			scope.$on('$destroy', function () {
      	alert('About to be destroyed!');
      });
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);
