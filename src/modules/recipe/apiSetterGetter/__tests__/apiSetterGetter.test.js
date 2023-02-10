import { createElement } from 'lwc';
import ApiSetterGetter from 'recipe/apiSetterGetter';

describe('recipe-api-setter-getter', () => {
    it('creates a new todo item', () => {
        const TODO_DESCRIPTION = 'Some ToDo';

        // Create initial element
        const element = createElement('recipe-api-setter-getter', {
            is: ApiSetterGetter
        });
        document.body.appendChild(element);

        // Query ui-input elements
        const uiInputEls = element.shadowRoot.querySelectorAll('ui-input');

        const todoCountPrevious = element.shadowRoot.querySelector(
            'recipe-todo-list'
        ).todos.length;

        // Select input fields for simulating user input
        uiInputEls.forEach((el) => {
            if (el.label === 'Description') {
                el.value = TODO_DESCRIPTION;
            } else if (el.label === 'Priority') {
                el.checked = true;
            }
            el.dispatchEvent(new CustomEvent('change'));
        });

        // Select button for simulating click
        const buttonEl = element.shadowRoot.querySelector('ui-button');
        buttonEl.click();

        // Return a promise to wait for any asynchronous DOM updates. Jest
        // will automatically wait for the Promise chain to complete before
        // ending the test and fail the test if the promise rejects.
        return Promise.resolve().then(() => {
            // Compare if tracked property has been assigned a new value.
            const todoListEl = element.shadowRoot.querySelector(
                'recipe-todo-list'
            );
            expect(todoListEl.todos.length).toBe(todoCountPrevious + 1);
            expect(todoListEl.todos[2].description).toBe(TODO_DESCRIPTION);
            expect(todoListEl.todos[2].priority).toBe(true);
        });
    });

    it('is accessible', () => {
        const element = createElement('recipe-api-setter-getter', {
            is: ApiSetterGetter
        });

        document.body.appendChild(element);

        return Promise.resolve().then(() => expect(element).toBeAccessible());
    });
});
