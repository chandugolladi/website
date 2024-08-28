import React, { useState, useEffect } from 'react';
import '../style/ViewCustomerDetails.css';

const ViewCustomerDetails = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Fetch customer details from the backend API and exclude sensitive info
        const fetchCustomerDetails = async () => {
            try {
                const response = await fetch('/api/customers');
                const data = await response.json();
                setCustomers(data);
            } catch (error) {
                console.error('Error fetching customer details:', error);
            }
        };
        fetchCustomerDetails();
    }, []);

    return (
        <div id="view-customer-details-container">
            <h2>View Customer Details</h2>
            <div id="customer-details-list">
                {customers.length > 0 ? (
                    customers.map((customer) => (
                        <div className="customer-detail" key={customer.id}>
                            <p><strong>Name:</strong> {customer.name}</p>
                            <p><strong>Email:</strong> {customer.email}</p>
                            <p><strong>Phone Number:</strong> {customer.phone}</p>
                            <p><strong>Address:</strong> {customer.address}</p>
                            {/* Excluding sensitive information like passwords */}
                        </div>
                    ))
                ) : (
                    <p>No customer details available.</p>
                )}
            </div>
        </div>
    );
};

export default ViewCustomerDetails;

