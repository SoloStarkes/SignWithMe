import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import LoginPage from './LoginPage';
import axios from 'axios';
import '@testing-library/jest-dom';


// Mock axios
jest.mock('axios');

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Mock localStorage
const mockSetItem = jest.fn();
Object.defineProperty(window, 'localStorage', {
  value: { setItem: mockSetItem },
});

const mockLogin = jest.fn();

const renderLoginPage = () => {
  return render(
    <BrowserRouter>
      <AuthContext.Provider value={{ login: mockLogin }}>
        <LoginPage />
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

describe('LoginPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders login form', () => {
    renderLoginPage();
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  test('handles successful login', async () => {
    axios.post.mockResolvedValue({ data: { token: 'fake-token' } });
    renderLoginPage();

    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('http://localhost:5001/api/signin', {
        username: 'testuser',
        password: 'password123',
      });
      expect(mockSetItem).toHaveBeenCalledWith('token', 'fake-token');
      expect(mockLogin).toHaveBeenCalledWith('fake-token', 'testuser');
      expect(mockNavigate).toHaveBeenCalledWith('/');
      expect(screen.getByText('Sign-in successful')).toBeInTheDocument();
    });
  });

  test('handles login failure', async () => {
    axios.post.mockRejectedValue({ response: { data: { message: 'Invalid credentials' } } });
    renderLoginPage();

    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    await waitFor(() => {
      expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
    });
  });

  test('navigates to signup page', () => {
    renderLoginPage();
    fireEvent.click(screen.getByText(/Don’t have an account\? Sign Up/));
    expect(mockNavigate).toHaveBeenCalledWith('/signup');
  });
  
  test('navigates to home page', () => {
    renderLoginPage();
    fireEvent.click(screen.getByText('Return to Home Page'));
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
