const express = require('express')
const cors = require('cors')
const dayjs = require('dayjs')
const app = express()
const port = 4000

app.use(cors())

const accountsFromApi = require('./mock_responses/accounts.json').Data.Account
const balancesFromApi = require('./mock_responses/balances.json').Data.Balance
const transactionsFromApi = require('./mock_responses/transactions.json').Data.Transaction

app.get('/accounts', (req, res) => {
    accounts = []

    accountsFromApi.forEach( (acc) => {
        balance = balancesFromApi.find( (bal) => {
            return bal.AccountId == acc.AccountId
        })

        accounts.push({
            id: acc.AccountId,
            name: acc.Nickname,
            type: acc.AccountSubType,
            balance: Number(balance.Amount.Amount),
        })
    })

    res.send(accounts)
})

app.get('/transactions/:accountId', (req, res) => {
    transactions = []
    accountId = req.params['accountId']

    transactionsRaw = transactionsFromApi.filter( (trans) => {
        // TODO Reactivate Filter
        // return trans.AccountId == accountId && dayjs().subtract(1, 'month') <= dayjs(trans.BookingDateTime)
        return true
    })

    transactionsRaw.forEach( (trans) => {
        transactions.push({
            description: trans.TransactionInformation,
            datetime: trans.BookingDateTime,
            amount: Number(trans.Amount.Amount)
        })
    })

    res.send(transactions)
})

app.listen(port, () => {
    console.log(`Backend server is listening on port ${port}`)
})