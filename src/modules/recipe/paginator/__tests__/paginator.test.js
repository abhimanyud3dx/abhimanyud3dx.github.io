import { createElement } from 'lwc';
import Paginator from 'recipe/paginator';

describe('recipe-paginator', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        // Clear mocks so that every test run has a clean implementation
        jest.clearAllMocks();
    });

    it('sends "next" and "previous" events on button click', () => {
        // Create initial element
        const element = createElement('recipe-paginator', {
            is: Paginator
        });
        document.body.appendChild(element);

        // Mock handlers for child events
        const handlerPrevious = jest.fn();
        const handlerNext = jest.fn();
        // Add event listener to catch child events
        element.addEventListener('previous', handlerPrevious);
        element.addEventListener('next', handlerNext);

        element.shadowRoot.querySelectorAll('ui-button').forEach((button) => {
            button.click();
        });

        // Return a promise to wait for any asynchronous DOM updates. Jest
        // will automatically wait for the Promise chain to complete before
        // ending the test and fail the test if the promise rejects.
        return Promise.resolve().then(() => {
            // Validate if mocked events got fired
            expect(handlerPrevious).toHaveBeenCalledTimes(1);
            expect(handlerNext).toHaveBeenCalledTimes(1);
        });
    });

    it('is accessible', () => {
        const element = createElement('recipe-paginator', {
            is: Paginator
        });

        document.body.appendChild(element);

        return Promise.resolve().then(() => expect(element).toBeAccessible());
    });
});
