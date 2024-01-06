describe('MovieListPage', () => {
    it('end-to-end tests case', () => {
        cy.visit('http://localhost:3000/');

        // Test search functionality
        cy.get('[data-testid="search-input"]').type('Titanic');
        cy.get('[data-testid="search-button"]').click();
        cy.get('[data-testid="movie-title"]').should('include.text', 'Titanic');

        // Test sorting functionality
        cy.get('[data-testid="sort-control"]').parent().select('release_date');
        cy.get('[data-testid="movie-list"]').first().should('include.text', 'Titanic1997Drama');

        // Test switching genre
        // Test switching genre
        cy.get('[data-testid="genre-select"]').eq(0).click(); // Click to open the dropdown
        // cy.get('[data-testid^="genre-option-"]').first().click(); // Click the first genre option
        cy.get('[data-testid="genre-select"]').should('include.text', 'ALL');

        // Test selecting a movie
        cy.get('[data-testid="movie-list-container"]').eq(0).click();
        cy.get('[data-testid="movie-details"]').should('be.visible');

    });
});
