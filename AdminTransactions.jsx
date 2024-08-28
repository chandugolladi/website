import React, { useState, useEffect } from 'react';
import '../style/AdminTransactions.css';

const AdminTransactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Fetch all transactions from the backend API
        const fetchTransactions = async () => {
            try {
                const response = await fetch('/api/transactions');
                const data = await response.json();
                setTransactions(data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };
        fetchTransactions();
    }, []);

    return (
        <div id="admin-transactions-container">
            <h2>View Transactions</h2>
            <div id="transactions-list">
                {transactions.length > 0 ? (
                    transactions.map((transaction) => (
                        <div className="transaction-detail" key={transaction.id}>
                            <p><strong>Transaction ID:</strong> {transaction.id}</p>
                            <p><strong>Amount:</strong> {transaction.amount}</p>
                            <p><strong>Type:</strong> {transaction.type}</p>
                            <p><strong>Date:</strong> {transaction.date}</p>
                            <p><strong>Customer:</strong> {transaction.customerName}</p>
                        </div>
                    ))
                ) : (
                    <p>No transactions available.</p>
                )}
            </div>
        </div>
    );
};

export default AdminTransactions;

