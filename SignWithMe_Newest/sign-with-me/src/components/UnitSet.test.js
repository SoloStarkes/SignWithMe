import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import UnitSet from './UnitSet';

jest.mock('axios');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

jest.mock('react-circular-progressbar', () => ({
  CircularProgressbar: () => <div data-testid="mock-circular-progressbar" />,
}));

describe('UnitSet Component', () => {
  beforeEach(() => {
    localStorage.setItem('userName', 'testUser');
    axios.get.mockResolvedValue({ data: { lesson: { quiz_complete: true } } });
  });

  afterEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('renders without crashing', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <UnitSet />
        </BrowserRouter>
      );
    });
    expect(screen.getByText('Units Dashboard')).toBeInTheDocument();
  });

  it('displays all unit buttons', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <UnitSet />
        </BrowserRouter>
      );
    });
    expect(screen.getByText('Unit 1: Basics')).toBeInTheDocument();
    expect(screen.getByText('Unit 2: Intermediate')).toBeInTheDocument();
    expect(screen.getByText('Unit 3: Advanced')).toBeInTheDocument();
    expect(screen.getByText('Unit 4: Final Examination')).toBeInTheDocument();
  });

  it('toggles unit lessons when unit button is clicked', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <UnitSet />
        </BrowserRouter>
      );
    });
    await act(async () => {
      fireEvent.click(screen.getByText('Unit 1: Basics'));
    });
    expect(screen.getByText('Alphabet')).toBeInTheDocument();
    expect(screen.getByText('Finger Spelling')).toBeInTheDocument();
    expect(screen.getByText('Greetings')).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(screen.getByText('Unit 1: Basics'));
    });
    expect(screen.queryByText('Alphabet')).not.toBeInTheDocument();
  });

  it('fetches quiz statuses on mount', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <UnitSet />
        </BrowserRouter>
      );
    });
    expect(axios.get).toHaveBeenCalledTimes(8);
});

  it('displays trophy for completed lessons', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <UnitSet />
        </BrowserRouter>
      );
    });
    await act(async () => {
      fireEvent.click(screen.getByText('Unit 1: Basics'));
    });
    const trophies = screen.getAllByText('🏆');
    expect(trophies.length).toBeGreaterThan(0);
  });

  it('navigates to lesson when "Go to Lesson" button is clicked', async () => {
    const navigateMock = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(navigateMock);

    await act(async () => {
      render(
        <BrowserRouter>
          <UnitSet />
        </BrowserRouter>
      );
    });
    await act(async () => {
      fireEvent.click(screen.getByText('Unit 1: Basics'));
    });
    await act(async () => {
      fireEvent.click(screen.getAllByText('Go to Lesson')[0]);
    });
    expect(navigateMock).toHaveBeenCalledWith('/units/lesson1');
  });

  it('renders CircularProgressbar for each lesson', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <UnitSet />
        </BrowserRouter>
      );
    });
    await act(async () => {
      fireEvent.click(screen.getByText('Unit 1: Basics'));
    });
    const progressBars = screen.getAllByTestId('mock-circular-progressbar');
    expect(progressBars.length).toBe(3);
  });
});
