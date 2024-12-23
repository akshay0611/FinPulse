import React from 'react';
import Navbar from '../components/Navbar';

const Dashboard: React.FC = () => {
    // Static data for demonstration
    const transactionData = [
        { date: '01/01/2023', description: 'Investment in ABC Corp', amount: '$500' },
        { date: '02/01/2023', description: 'Dividend from XYZ Inc', amount: '$50' },
    ];

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f4f4f9' }}>
            <Navbar />
            <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center', color: '#333' }}>Advanced Finance Dashboard</h1>
                <section className="summary-cards" style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
                    <div className="card" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <h2>Total Investments</h2>
                        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>$10,000</p>
                    </div>
                    <div className="card" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <h2>Returns</h2>
                        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>$1,200</p>
                    </div>
                    <div className="card" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <h2>Net Worth</h2>
                        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>$15,000</p>
                    </div>
                </section>
                <section className="charts" style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
                    <div className="chart" style={{ width: '45%', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                        <h2>Investment Growth</h2>
                        <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                            Chart Placeholder
                        </div>
                    </div>
                    <div className="chart" style={{ width: '45%', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                        <h2>Portfolio Distribution</h2>
                        <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                            Chart Placeholder
                        </div>
                    </div>
                </section>
                <section className="transactions" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', margin: '20px 0' }}>
                    <h2>Recent Transactions</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f4f4f9' }}>
                                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Date</th>
                                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Description</th>
                                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactionData.map((transaction, index) => (
                                <tr key={index} style={{ textAlign: 'center' }}>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{transaction.date}</td>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{transaction.description}</td>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{transaction.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
