context('Main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('Should click the submit button to send the script and robot should move to x: 3, y: 1', () => {
    cy.get('.sc-AxhCb').click()
    cy.get('.sc-AxgMl > svg');
  })

  it('Should change the value of the script field and submit. Robot should move to x: 4, y: 1', () => {
    cy.get('.sc-AxhUy').clear()
      .type("POSITION 1 1 EAST //sets the position of the robot, pointing east\nFORWARD 3 //lets the robot do 3 steps forward");

    cy.get('.sc-AxhCb').click()
    cy.get('.hXdidj').children('.sc-AxgMl');
  })
})
