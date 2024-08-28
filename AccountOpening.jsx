import React, { useState } from 'react';
import '../style/AccountOpening.css';

const AccountOpening = () => {
    const [accountHolderName, setAccountHolderName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [accountType, setAccountType] = useState('');

    const handleAccountOpening = (e) => {
        e.preventDefault();
        // Implement account opening logic here
        alert(`Account for ${accountHolderName} has been opened as a ${accountType} account.`);
    };

    return (
        <div id="account-opening-container">
            <h2>Account Opening</h2>
            <form id="account-opening-form" onSubmit={handleAccountOpening}>
                <input
                    type="text"
                    placeholder="Account Holder Name"
                    value={accountHolderName}
                    onChange={(e) => setAccountHolderName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <select
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    required
                >
                    <option value="">Select Account Type</option>
                    <option value="Savings">Savings</option>
                    <option value="Current">Current</option>
                    <option value="Fixed Deposit">Fixed Deposit</option>
                </select>
                <button type="submit">Open Account</button>
            </form>
        </div>
    );
};

export default AccountOpening;
