/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance < 1 || !(balance % 1 === 0) || typeof balance !== 'number') {
    return null;
  }
  if (balance > 0 && balance % 1 === 0 && typeof balance === 'number') {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
};
Bank.prototype.getAccount = function (number) {
  var account = null;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      account = this.accounts[i];
    }
  }
  return account;
};
Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  }
  var total = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    total += this.accounts[i].getBalance();
  } return total;
};
