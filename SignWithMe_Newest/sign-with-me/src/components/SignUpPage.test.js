import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import SignUpPage from './SignUpPage';
import { AuthContext } from '../AuthContext';
import { toBeInTheDocument } from '@testing-library/jest-dom';

// Mock axios
jest.mock('axios');

// Mock useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('SignUpPage Component', () => {
  // Mock login function for AuthContext
  const mockLogin = jest.fn();

  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <AuthContext.Provider value={{ login: mockLogin }}>
          <SignUpPage />
        </AuthContext.Provider>
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('renders signup form elements', () => {
    renderComponent();

    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Retype Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
  });

  test('shows error when passwords do not match', async () => {
    // Mock window.alert
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    renderComponent();

    // Fill out form with mismatched passwords
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText('Retype Password'), { target: { value: 'differentpassword' } });

    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    // Check that alert was called
    expect(alertMock).toHaveBeenCalledWith('Passwords do not match!');

    alertMock.mockRestore();
  });

  test('successful signup and login', async () => {
    // Mock localStorage
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn()
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });

    // Mock axios post calls
    axios.post.mockImplementationOnce(() => Promise.resolve({})) // signup
      .mockImplementationOnce(() => Promise.resolve({ // signin
        data: { 
          token: 'fake_token', 
          username: 'testuser' 
        }
      }));

    renderComponent();

    // Fill out form correctly
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText('Retype Password'), { target: { value: 'password123' } });

    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    // Wait for async operations
    await waitFor(() => {
      // Check axios calls
      expect(axios.post).toHaveBeenCalledTimes(2);
      expect(axios.post).toHaveBeenCalledWith('http://localhost:5001/api/signup', {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123'
      });
      expect(axios.post).toHaveBeenCalledWith('http://localhost:5001/api/signin', {
        username: 'testuser',
        password: 'password123'
      });

      // Check localStorage
      expect(localStorageMock.setItem).toHaveBeenCalledWith('token', 'fake_token');

      // Check login was called
      expect(mockLogin).toHaveBeenCalledWith('fake_token', 'testuser');

      // Check navigation
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
    });
  });

  test('handles signup error', async () => {
    // Mock axios to throw an error
    axios.post.mockRejectedValueOnce({
      response: {
        data: {
          message: 'Username already exists'
        }
      }
    });

    renderComponent();

    // Fill out form
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText('Retype Password'), { target: { value: 'password123' } });

    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    // Wait for error message
    await waitFor(() => {
        expect(screen.getByText('Username already exists')).toBeInTheDocument();
    });
  });

  test('navigation buttons work correctly', () => {
    renderComponent();

    // Test login page navigation
    fireEvent.click(screen.getByText(/already have an account\?/i));
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/login');

    // Reset mock
    mockedUsedNavigate.mockClear();

    // Test home page navigation
    fireEvent.click(screen.getByText(/return to home page/i));
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
  });
});