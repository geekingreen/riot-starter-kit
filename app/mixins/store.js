riot.mixin('store', {
	store: {
		find: function(model) {
			var todos = [{ name: 'First todo', done: false }];
			if (window.localStorage) {
				var todosString = window.localStorage.getItem('todos');
				if (todosString) {
					todos = JSON.parse(todosString);
				}
			}
			return todos;
		},
		saveAll: function(todos) {
			if (window.localStorage) {
				window.localStorage.setItem('todos', JSON.stringify(todos));
			}
		},
		createRecord: function() {
			return { name: '', done: false };
		}
	}
});
