import React, { useState } from 'react';

const BorrowerForm = () => {
    const [formData, setFormData] = useState({
        amount: '',
        loanPurpose: '',
        fullName: '',
        dob: '',
        street: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
        employmentStatus: '',
        yearlyIncome: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Check Your Rates</h1>
            <div style={{ textAlign: 'left', margin: '0 auto', maxWidth: '400px' }}>
                <div>
                    <label>How much do you want to borrow?</label>
                    <input 
                        type="number" 
                        name="amount" 
                        value={formData.amount} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>Loan Purpose</label>
                    <input 
                        type="text" 
                        name="loanPurpose" 
                        value={formData.loanPurpose} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>Full Name</label>
                    <input 
                        type="text" 
                        name="fullName" 
                        value={formData.fullName} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>Date of Birth</label>
                    <input 
                        type="date" 
                        name="dob" 
                        value={formData.dob} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>Street</label>
                    <input 
                        type="text" 
                        name="street" 
                        value={formData.street} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>City</label>
                    <input 
                        type="text" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>State</label>
                    <input 
                        type="text" 
                        name="state" 
                        value={formData.state} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>Country</label>
                    <input 
                        type="text" 
                        name="country" 
                        value={formData.country} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>Zip Code</label>
                    <input 
                        type="text" 
                        name="zipCode" 
                        value={formData.zipCode} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>Employment Status</label>
                    <select 
                        name="employmentStatus" 
                        value={formData.employmentStatus} 
                        onChange={handleChange}
                    >
                        <option value="">Select...</option>
                        <option value="employed">Employed</option>
                        <option value="self-employed">Self-employed</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Yearly Income</label>
                    <input 
                        type="number" 
                        name="yearlyIncome" 
                        value={formData.yearlyIncome} 
                        onChange={handleChange} 
                    />
                </div>
            </div>
        </div>
    );
};

export default BorrowerForm;
