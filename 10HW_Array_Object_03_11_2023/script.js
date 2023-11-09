/*

Создать обьект bankAccount(debit),представляющий 
собой банковский счет со след свойствами:

1. accountNumber: 12345678;
2. accountHolderName: 'Alice';
3. balance: 1000;
4. deposit() - функция для описания действия по добавлению средств на счет
5. withDraw() - функция для описания действия по снятию средств на счет
6. checkBalance() - функия для проверки баланса

реализовать пользовательский интерфейс

*/

const bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    updateBalanceDisplay();
  },
  withDraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      updateBalanceDisplay();
    } else {
      alert('Недостаточно средств');
    }
  },
  checkBalance() {
    alert('Баланс: ' + this.balance);
  },
};


const balanceElem = document.getElementById("balance");
const depositAmountElem = document.getElementById("depositAmount");
const withdrawAmountElem = document.getElementById("withdrawAmount");


document.getElementById('depositButton').addEventListener('click', function() {
   
    const depositAmount = parseFloat(depositAmountElem.value);
   
    if (!isNaN(depositAmount) && depositAmount > 0) {
        bankAccount.deposit(depositAmount);
        alert('Deposit completed successfully');
        depositAmountElem.value = '';
    }

  });
  
  document.getElementById('withdrawButton').addEventListener('click', function() {
  
    const withdrawAmount = parseFloat(withdrawAmountElem.value);
   
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        bankAccount.withDraw(withdrawAmount);
        alert('Withdrawal completed successfully');
        withdrawAmountElem.value = ''; 
    }

  });

  
  document.getElementById('checkBalanceButton').addEventListener('click', function() {
    bankAccount.checkBalance();
  });


  function updateBalanceDisplay() {
    balanceElem.textContent = 'Balance: ' + bankAccount.balance;
  }

  updateBalanceDisplay();