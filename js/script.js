const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")

//Manipulando o amount/input para receber somente números.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Captando o evento de submit/enviar do formulário.
form.onsubmit = (event) => {
    event.preventDefault()

    //console.log(currency.value)

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

function convertCurrency(amount, price, symbol){
    try{
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = amount * price;
        total = formatCurrencyBRL(total).replace("R$", "")

        result.textContent = `${total} Reais`

        footer.classList.add("show-result")
    } catch (error){
        footer.classList.remove("show-result")
        console.log(error)
        alert("Não foi possível converter. Tente mais tarde!")
    }
}

function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency", 
        currency: "BRL",
    })
}