import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/EditProfile.css';

const EditProfile = () => {
    const [profile, setProfile] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        accountNumber: '',
        balance: ''
    });

    const [isEditing, setIsEditing] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Fetch profile details on component mount
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('/api/profile');
                setProfile(response.data);
            } catch (error) {
                setErrorMessage('Failed to fetch profile details.');
            }
        };
        fetchProfile();
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    };

    // Handle profile save
    const handleSave = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/update-profile', profile);
            alert('Profile updated successfully!');
            setIsEditing(false);
        } catch (error) {
            setErrorMessage('Failed to update profile.');
        }
    };

    return (
        <div id="edit-profile-container">
            <h2>{isEditing ? 'Edit Profile' : 'View Profile'}</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <form id="edit-profile-form" onSubmit={handleSave}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={profile.name}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={profile.address}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={profile.email}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                    required
                />
                <input
                    type="text"
                    name="accountNumber"
                    placeholder="Account Number"
                    value={profile.accountNumber}
                    readOnly
                />
                <input
                    type="text"
                    name="balance"
                    placeholder="Available Balance"
                    value={profile.balance}
                    readOnly
                />
                {isEditing ? (
                    <button type="submit">Save</button>
                ) : (
                    <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
                )}
            </form>
        </div>
    );
};

export default EditProfile;
