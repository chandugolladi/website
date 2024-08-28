import React, { useState } from 'react';
import '../style/UpdateDetails.css';

const UpdateDetails = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleUpdateDetails = (e) => {
        e.preventDefault();
        // Implement update personal details logic here
        alert(`Details updated for ${name}`);
    };

    return (
        <div id="update-details-container">
            <h2>Update Personal Details</h2>
            <form id="update-details-form" onSubmit={handleUpdateDetails}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <button type="submit">Update Details</button>
            </form>
        </div>
    );
};

export default UpdateDetails;

