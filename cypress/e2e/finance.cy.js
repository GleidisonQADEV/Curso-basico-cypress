


before(() => {
    cy.visit("https://dev-finance.netlify.app/")
});

describe('Transações', () => {

    beforeEach(() => {
        cy.visit("https://dev-finance.netlify.app/")
    });

    it('Cadastrar uma entrada', () => {
        
        criarTransação("Freelance", 550)

        // Assert
        cy.get('tbody tr td.description').should("have.text", "Freelance")
    });

    it('Cadastrar uma saida', () => {
        
        criarTransação("Cinema", -78)

        // Assert
        cy.get('tbody tr td.description').should("have.text", "Cinema")
    });

    it('Excluir transação', () => {

        criarTransação("Freelance", 550)
        criarTransação("Salario", 5550)
        //cy.contains('.description', "Freelance").parent().find('img').click()
        cy.contains('.description', "Freelance").siblings().children('img').click()

        //Assert
        cy.get('tbody tr').should("have.length", 1)
    })
});

function criarTransação(descrição, valor){
    cy.contains("Nova Transação").click()
        cy.get('#description').type(descrição)
        cy.get('#amount').type(valor)
        cy.get('#date').type("2023-06-19") //format yyyy-mm-dd
        cy.get('button').click()
}