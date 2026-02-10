// Define the BankAccount class
class BankAccount {
  constructor() {
    this.balance = 0;           // Initial balance
    this.transactions = [];     // Stores transactions as {type, amount}
  }

  // Deposit method
  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }
    this.balance += amount;
    this.transactions.push({ type: "deposit", amount });
    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  // Withdraw method
  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }
    this.balance -= amount;
    this.transactions.push({ type: "withdraw", amount });
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  // Check balance
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  // List all deposits
  listAllDeposits() {
    const deposits = this.transactions
      .filter(tx => tx.type === "deposit")
      .map(tx => tx.amount);
    return `Deposits: ${deposits.join(",")}`;
  }

  // List all withdrawals
  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(tx => tx.type === "withdraw")
      .map(tx => tx.amount);
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

// Create an instance
const myAccount = new BankAccount();

// Add transactions to satisfy requirements
myAccount.deposit(50);      // deposit 1
myAccount.deposit(100);     // deposit 2
myAccount.withdraw(20);     // withdrawal 1
myAccount.withdraw(30);     // withdrawal 2
myAccount.deposit(80);      // deposit 3 (ensures balance > 100)
