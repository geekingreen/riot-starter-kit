<todos>

    <h2>Todos</h2>

    <ul>
        <li each={ todo, i in todos }
            class={ done: todo.done }
            onclick={ parent.toggleTodo }>
            <input type="checkbox"
                checked={ todo.done }>
                { i + 1 }: { todo.name }
        </li>
    </ul>

    <form onsubmit={ create }>
        <input type="text"
            value={ model.name }
            onkeyup={ edit }>
        <button type="submit">Add #{ nextNumber }</button>
        <button onclick={ removeDone }>Remove Done</button>
    </form>

    <style>
        todos {
            font-family: monospace;
        }
        todos h2 {
            color: #bada55;
        }
        todos ul {
            list-style: none;
            padding: 0;
        }
        todos ul li {
            border: 1px solid green;
            border-radius: 3px;
            margin-bottom: 4px;
            padding: 4px;
            user-select: none;
            -webkit-user-select: none;
        }
        todos ul li.done {
            text-decoration: line-through;
        }
        todos button {
            font-family: monospace;
        }
    </style>

    <script>
    this.mixin('store');

    this.todos = [];
    this.model = { name: '' };
    this.nextNumber = null;

    this.on('update', function () {
        this.nextNumber = this.todos.length + 1;
    });

    this.on('mount', function () {
        this.todos = this.store.find('todos');
        this.update();
    });

    this.on('unmount', function () {
    });

    this.on('save', function () {
        this.store.saveAll(this.todos);
    });

    edit(e) {
        this.model.name = e.target.value;
    }

    toggleTodo(e) {
        var todo = e.item.todo;
        todo.done = !todo.done;
        if ((/input/i).test(e.target.tagName)) {
            return true;
        }
        this.trigger('save');
    }

    create() {
        this.todos.push(this.model);
        this.model = this.store.createRecord();
        this.trigger('save');
    }

    removeDone() {
        this.todos = this.todos.filter(function(todo) { return !todo.done });
        this.trigger('save');
    }
    </script>

</todos>
