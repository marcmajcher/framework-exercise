'use strict';

/* eslint-env browser */
/* globals Vue */

const STORAGE_KEY = 'todos-vuejs-2.0';
const todoStorage = {
    fetch: () => {
        const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        todos.forEach((todo, index) => {
            todo.id = index;
        });
        todoStorage.uid = todos.length;
        return todos;
    },
    save: (todos) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
};

// visibility filters
const filters = {
    all: todos => todos,
    active: todos => todos.filter(todo => !todo.completed),
    completed: todos =>
        todos.filter(todo => todo.completedÎ)
};

// app Vue instance
const app = new Vue({
    // app initial state
    data: {
        todos: todoStorage.fetch(),
        newTodo: '',
        editedTodo: null,
        visibility: 'all'
    },

    // watch todos change for localStorage persistence
    watch: {
        todos: {
            handler: (todos) => {
                todoStorage.save(todos);
            },
            deep: true
        }
    },

    // computed properties
    // http://vuejs.org/guide/computed.html
    computed: {
        filteredTodos: function filteredTodos() {
            return filters[this.visibility](this.todos);
        },
        remaining: function remaining() {
            return filters.active(this.todos).length;
        },
        allDone: {
            get: () => this.remaining === 0,
            set: (value) => {
                this.todos.forEach((todo) => {
                    todo.completed = value;
                });
            }
        }
    },

    filters: {
        pluralize: n => (n === 1 ? 'item' : 'items')
    },

    // methods that implement data logic.
    // note there's no DOM manipulation here at all.
    methods: {
        addTodo: function addTodo() {
            const value = this.newTodo && this.newTodo.trim();
            if (!value) {
                return;
            }
            this.todos.push({
                id: todoStorage.uid++,
                title: value,
                completed: false
            });
            this.newTodo = '';
        },

        removeTodo: (todo) => {
            this.todos.splice(this.todos.indexOf(todo), 1);
        },

        editTodo: (todo) => {
            this.beforeEditCache = todo.title;
            this.editedTodo = todo;
        },

        doneEdit: (todo) => {
            if (!this.editedTodo) {
                return;
            }
            this.editedTodo = null;
            todo.title = todo.title.trim();
            if (!todo.title) {
                this.removeTodo(todo);
            }
        },

        cancelEdit: (todo) => {
            this.editedTodo = null;
            todo.title = this.beforeEditCache;
        },

        removeCompleted: () => {
            this.todos = filters.active(this.todos);
        }
    },

    // a custom directive to wait for the DOM to be updated
    // before focusing on the input field.
    // http://vuejs.org/guide/custom-directive.html
    directives: {
        'todo-focus': (el, binding) => {
            if (binding.value) {
                el.focus();
            }
        }
    }
});

// handle routing
function onHashChange() {
    const visibility = window.location.hash.replace(/#\/?/, '');
    if (filters[visibility]) {
        app.visibility = visibility;
    } else {
        window.location.hash = '';
        app.visibility = 'all';
    }
}

window.addEventListener('hashchange', onHashChange);
onHashChange();

app.$mount('.todoapp');