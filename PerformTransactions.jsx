import React, { useState } from 'react';
import '../style/PerformTransactions.css';

const PerformTransactions = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [transactionType, setTransactionType] = useState('');
    const [amount, setAmount] = useState('');

    const handleTransaction = (e) => {
        e.preventDefault();
        // Implement transaction logic here
        alert(`${transactionType} of ₹${amount} for account ${accountNumber} is processed.`);
    };

    return (
        <div id="transaction-container">
            <h2>Perform Transactions</h2>
            <form id="transaction-form" onSubmit={handleTransaction}>
                <input
                    type="text"
                    placeholder="Account Number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    required
                />
                <select
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value)}
                    required
                >
                    <option value="">Select Transaction Type</option>
                    <option value="Deposit">Deposit</option>
                    <option value="Withdrawal">Withdrawal</option>
                    <option value="Transfer">Transfer</option>
                    <option value="KYC Verification">KYC Verification</option>
                    <option value="Balance Inquiry">Balance Inquiry</option>
                </select>
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required={transactionType !== 'KYC Verification' && transactionType !== 'Balance Inquiry'}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PerformTransactions;
