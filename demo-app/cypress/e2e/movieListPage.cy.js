describe('MovieListPage', () => {
    it('end-to-end tests case', () => {
        cy.visit('http://localhost:3000/');

        // Test search functionality
        cy.get('[data-testid="search-input"]').type('Titanic');
        cy.get('[data-testid="search-button"]').click();
        cy.get('[data-testid="movie-title"]').should('include.text', 'Titanic');

        // Test sorting functionality
        cy.get('[data-testid="sort-control"]').select('release_date');
        cy.get('[data-testid="movie-list"]').first().should('include.text', 'Avengers War of Infinity');

        // Test switching genre
        cy.get('[data-testid="genre-select"]').select('HORROR');
        cy.get('[data-testid="movie-genre"]').should('include.text', 'HORROR');

        // Test selecting a movie
        cy.get('[data-testid="movie-list"]').first().click();
        cy.get('[data-testid="movie-details"]').should('be.visible');

    });
});
