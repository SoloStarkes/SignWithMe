import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Noun_Adj from './Noun_Adj';

describe('Noun_Adj Component', () => {
  beforeEach(() => {
    delete window.location; // Delete the existing window.location
    window.location = { href: '' }; // Mock window.location
  });

  test('renders the header correctly', () => {
    render(<Noun_Adj />);
    const headerElement = screen.getByText('ASL Nouns and Adjective Lessons');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveStyle('color: white');
  });

  test('renders the Nouns section', () => {
    render(<Noun_Adj />);
    expect(screen.getByText('Nouns')).toBeInTheDocument();
    expect(screen.getByText(/Nouns are words that represent a person, place, or thing./)).toBeInTheDocument();
  });

  test('renders the Adjectives section', () => {
    render(<Noun_Adj />);
    expect(screen.getByText('Adjectives')).toBeInTheDocument();
    expect(screen.getByText(/Adjectives describe nouns by providing more information/)).toBeInTheDocument();
  });

  test('renders iframe elements', () => {
    render(<Noun_Adj />);
    const iframes = screen.getAllByTitle(/Sign ASL/);
    expect(iframes).toHaveLength(6); // Adjust this based on your actual iframes
  });

  test('navigates to Noun Assignment 1 when button is clicked', () => {
    render(<Noun_Adj />);
    const button = screen.getByText('Go to Drag and Drop Noun Excercise');
    fireEvent.click(button);
    expect(window.location.href).toBe('/units/lesson5/N_A/Noun_Assigment1');
  });

  test('navigates to Noun Assignment 2 when button is clicked', () => {
    render(<Noun_Adj />);
    const button = screen.getByText('Go to Translation Noun Excercise');
    fireEvent.click(button);
    expect(window.location.href).toBe('/units/lesson5/N_A/Noun_Assigment2');
  });

  test('navigates to Adjective Assignment when button is clicked', () => {
    render(<Noun_Adj />);
    const button = screen.getByText('Go to Adjective Assignment');
    fireEvent.click(button);
    expect(window.location.href).toBe('/units/lesson5/N_A/Adj_Assigment');
  });
});
