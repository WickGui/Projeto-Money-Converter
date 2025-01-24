const convertButton = document.querySelector(".main-button") // Mapeando o botão do html.
const currencySelect = document.querySelector(".moeda-alvo")
const firstCurrencySelect = document.querySelector(".primeira-opcao")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".main-input").value // Mapeando e criando variável apenas do valor do input.
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Mapeando o valor em Real.
    const currencyValueConverted = document.querySelector(".currency-value") // Mapeando as outras moedas.


    if (firstCurrencySelect.value == "real") {
        var dolarToday = 6.10
        var euroToday = 6.20
        var libraToday = 7.40
        var bitcoinToday = 640000
        var realToday = 1
    }

    if (firstCurrencySelect.value == "dolar") {
        var realToday = 0.17
        var euroToday = 1.04
        var libraToday = 1.23
        var bitcoinToday = 102000
        var dolarToday = 1
    }

    if (firstCurrencySelect.value == "euro") {
        var realToday = 0.16
        var dolarToday = 0.96
        var libraToday = 1.18
        var bitcoinToday = 98000
        var euroToday = 1
    }

    if (firstCurrencySelect.value == "libra") {
        var realToday = 0.13
        var dolarToday = 0.81
        var euroToday = 0.85
        var bitcoinToday = 83000
        var libraToday = 1
    }

    if (firstCurrencySelect.value == "bitcoin") {
        var realToday = 0.0000016187122231267392
        var dolarToday = 0.000009754014959830285
        var euroToday = 0.000010170380313235508
        var libraToday = 0.000012027752113599999
        var bitcoinToday = 1
    }


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("uk-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: "8"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (firstCurrencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: "8"
        }).format(inputCurrencyValue)
    }

    if (firstCurrencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    } // Pegando o valor do input e colocando no lugar do valor display com a formatação de moeda.

    if (firstCurrencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (firstCurrencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (firstCurrencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("uk-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
}

convertButton.addEventListener("click", convertValues) // Identificando o click no botão e chamando uma função.

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const firstCurrencyName = document.getElementById("first-currency-name")
    const firstCurrencyImage = document.querySelector(".logo-moeda-a-converter")

    if (firstCurrencySelect.value == 'real') {
        firstCurrencyName.innerHTML = '<b>Real Brasileiro</b>'
        firstCurrencyImage.src = "./assets/real.png"
    }

    if (firstCurrencySelect.value == 'dolar') {
        firstCurrencyName.innerHTML = '<b>Dólar Americano</b>'
        firstCurrencyImage.src = "./assets/dollar.png"
    }

    if (firstCurrencySelect.value == 'euro') {
        firstCurrencyName.innerHTML = '<b>Euro</b>'
        firstCurrencyImage.src = "./assets/euro.png"
    }

    if (firstCurrencySelect.value == 'libra') {
        firstCurrencyName.innerHTML = '<b>Libra</b>'
        firstCurrencyImage.src = "./assets/libra.png"
    }

    if (firstCurrencySelect.value == 'bitcoin') {
        firstCurrencyName.innerHTML = '<b>Bitcoin</b>'
        firstCurrencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == 'real') {
        currencyName.innerHTML = '<b>Real Brasileiro</b>'
        currencyImage.src = "./assets/real.png"
    }

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = '<b>Dólar Americano</b>'
        currencyImage.src = "./assets/dollar.png"
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = '<b>Euro</b>'
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = '<b>Libra</b>'
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = '<b>Bitcoin</b>'
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}

firstCurrencySelect.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)