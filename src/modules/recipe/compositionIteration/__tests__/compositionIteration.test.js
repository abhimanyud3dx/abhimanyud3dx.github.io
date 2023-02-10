import { createElement } from 'lwc';
import CompositionIteration from 'recipe/compositionIteration';

describe('recipe-composition-iteration', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders three contact tiles', () => {
        // Create initial element
        const element = createElement('recipe-composition-iteration', {
            is: CompositionIteration
        });
        document.body.appendChild(element);

        // Select rendered contact tile elements for length check
        const contactTileEls = element.shadowRoot.querySelectorAll(
            'recipe-contact-tile'
        );
        expect(contactTileEls.length).toBe(3);
    });

    it('renders contact tiles that contain specific names as contact tile data', () => {
        // Create initial element
        const element = createElement('recipe-composition-basics', {
            is: CompositionIteration
        });
        document.body.appendChild(element);

        // Select contact tiles for public property check
        const CONTACT_LIST_EXPECTED = [
            'Amy Taylor',
            'Michael Jones',
            'Jennifer Wu'
        ];
        const contactTileNames = Array.from(
            element.shadowRoot.querySelectorAll('recipe-contact-tile')
        ).map((contactTile) => contactTile.contact.Name);
        expect(contactTileNames).toEqual(CONTACT_LIST_EXPECTED);
    });

    it('is accessible', () => {
        const element = createElement('recipe-composition-iteration', {
            is: CompositionIteration
        });

        document.body.appendChild(element);

        return Promise.resolve().then(() => expect(element).toBeAccessible());
    });
});
