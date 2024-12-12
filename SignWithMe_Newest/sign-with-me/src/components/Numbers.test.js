import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LearnASLNumbers from './Numbers';
import '@testing-library/jest-dom';

import number00 from "../Letters/number00.png";
import number01 from "../Letters/number01.png";
import number02 from "../Letters/number02.png";
import number03 from "../Letters/number03.png";
import number04 from "../Letters/number04.png";
import number05 from "../Letters/number05.png";
import number06 from "../Letters/number06.png";
import number07 from "../Letters/number07.png";
import number08 from "../Letters/number08.png";
import number09 from "../Letters/number09.png";
import number10 from "../Letters/number10.gif";


// Mock the images to avoid issues with static assets in tests
jest.mock('../Letters/number00.png', () => 'mocked-number00');
jest.mock('../Letters/number01.png', () => 'mocked-number01');
jest.mock('../Letters/number02.png', () => 'mocked-number02');
jest.mock('../Letters/number03.png', () => 'mocked-number03');
jest.mock('../Letters/number04.png', () => 'mocked-number04');
jest.mock('../Letters/number05.png', () => 'mocked-number05');
jest.mock('../Letters/number06.png', () => 'mocked-number06');
jest.mock('../Letters/number07.png', () => 'mocked-number07');
jest.mock('../Letters/number08.png', () => 'mocked-number08');
jest.mock('../Letters/number09.png', () => 'mocked-number09');
jest.mock('../Letters/number10.gif', () => 'mocked-number10');



// Mock other image imports similarly


describe('LearnASLNumbers', () => {
  test('renders correctly', () => {
    render(<LearnASLNumbers />);
    expect(screen.getByRole('heading', { name: /Learn ASL Numbers/i })).toBeInTheDocument();
    expect(screen.getByText(/Learn how to sign numbers/i)).toBeInTheDocument();
    // Check if the first image and instructions are displayed
    expect(screen.getByAltText('ASL Number 0')).toHaveAttribute('src', 'mocked-number00');
    expect(screen.getByText(/To sign 0, form a circle/i)).toBeVisible();
  });


  test('navigates between slides correctly', () => {
    render(<LearnASLNumbers />);

    // Click "Next" to go to the second slide
    fireEvent.click(screen.getByRole('button', { name: /Next/i }));
    expect(screen.getByAltText('ASL Number 1')).toHaveAttribute('src', 'mocked-number01');
    expect(screen.getByText(/To sign 1, raise your index finger/i)).toBeVisible();

    // Click "Previous" to go back to the first slide
    fireEvent.click(screen.getByRole('button', { name: /Previous/i }));
    expect(screen.getByAltText('ASL Number 0')).toHaveAttribute('src', 'mocked-number00');
    expect(screen.getByText(/To sign 0, form a circle/i)).toBeVisible();
  });



  test('wraps around when navigating past the last/first slide', () => {
    render(<LearnASLNumbers />);

    // Click "Next" repeatedly to go past the last slide
    const numImages = 11; // Update if you have a different number of images
    for (let i = 0; i < numImages; i++) {
      fireEvent.click(screen.getByRole('button', { name: /Next/i }));
    }
    // Should wrap around to the first slide
    expect(screen.getByAltText('ASL Number 0')).toHaveAttribute('src', 'mocked-number00');


    // Click "Previous" to go before the first slide
    fireEvent.click(screen.getByRole('button', { name: /Previous/i }));
    // Should wrap around to the last slide
    expect(screen.getByAltText('ASL Number 10')).toHaveAttribute('src', 'mocked-number10'); // Assuming last image is number10

  });

  test('quiz link navigates correctly', () => {
    render(<LearnASLNumbers />);
    // Check if the quiz link is present and has the correct href
    expect(screen.getByRole('link', { name: /Take the ASL Quiz/i })).toHaveAttribute('href', '/units/lesson7/quiz');
  });
});