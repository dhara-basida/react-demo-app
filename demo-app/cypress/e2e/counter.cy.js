describe('Counter Component', () => {
    it('increments and decrements the counter', () => {
      // Visit the page with the Counter component
      cy.visit('http://localhost:3000/'); // Update the URL as needed
  
      // Find the Counter Value element and assert its initial value
      cy.get('h1').should('have.text', 'Counter Value: 10');
  
      // Click the Increment button and assert the updated value
      cy.get('button:contains(Increment)').click();
      cy.get('h1').should('have.text', 'Counter Value: 11');
  
      // Click the Decrement button and assert the updated value
      cy.get('button:contains(Decrement)').click();
      cy.get('h1').should('have.text', 'Counter Value: 10');
    });
  });
  