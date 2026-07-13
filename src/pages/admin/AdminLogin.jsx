import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        // TODO: Replace with actual backend authentication
        if (email === 'corp@virsoftech.com' && password === 'admin123') {
            localStorage.setItem('adminToken', 'demo-token');
            navigate('/admin/dashboard');
        } else {
            setError('Invalid credentials. For demo use corp@virsoftech.com / admin123');
        }
    };

    return (
        <div className="admin-login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2>Admin Portal</h2>
                    <p>Login to manage website content</p>
                </div>

                <form onSubmit={handleLogin} className="login-form">
                    {error && <div className="error-message">{error}</div>}

                    <div className="form-group">
                        <label>Email Address</label>
                        <div className="input-with-icon">
                            <Mail size={18} className="input-icon" />
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="corp@virsoftech.com"
                                required 
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <div className="input-with-icon">
                            <Lock size={18} className="input-icon" />
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required 
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Secure Login
                    </button>
                </form>
            </div>

            <style jsx>{`
                .admin-login-container {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--background-alt);
                    padding: 2rem;
                }

                .login-card {
                    background: white;
                    padding: 3rem;
                    border-radius: var(--radius-xl);
                    box-shadow: var(--shadow-xl);
                    width: 100%;
                    max-width: 450px;
                    border: 1px solid rgba(0,0,0,0.05);
                }

                .login-header {
                    text-align: center;
                    margin-bottom: 2.5rem;
                }

                .login-header h2 {
                    font-size: 2rem;
                    color: var(--primary);
                    margin-bottom: 0.5rem;
                }

                .login-header p {
                    color: var(--text-muted);
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-group label {
                    display: block;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    color: var(--text);
                    font-size: 0.9rem;
                }

                .input-with-icon {
                    position: relative;
                }

                .input-icon {
                    position: absolute;
                    left: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--text-light);
                }

                .input-with-icon input {
                    width: 100%;
                    padding: 0.85rem 1rem 0.85rem 3rem;
                    border: 1px solid #e2e8f0;
                    border-radius: var(--radius-md);
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }

                .input-with-icon input:focus {
                    outline: none;
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);
                }

                .error-message {
                    background: rgba(239, 68, 68, 0.1);
                    color: #b91c1c;
                    padding: 0.75rem;
                    border-radius: var(--radius-sm);
                    margin-bottom: 1.5rem;
                    font-size: 0.9rem;
                    text-align: center;
                }

                .w-full {
                    width: 100%;
                }
            `}</style>
        </div>
    );
};

export default AdminLogin;
