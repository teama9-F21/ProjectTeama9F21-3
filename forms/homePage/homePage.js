headMain.textContent = "Wellcome, ${userID}"
btnBitcoinExchange.onclick=function(){
  ChangeForm(BitcoinAPI)
}

btnStock.onclick=function(){
  ChangeForm(stockExchange)
}

// Two more forms


btnBankStatement.onclick=function(){
  ChangeForm(bankStatement)
}
