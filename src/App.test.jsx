import { describe, it, expect } from 'vitest';
import {render, screen} from '@testing-library/react';
import { HomePage } from './pages/HomePage'; 
import { MemoryRouter } from 'react-router-dom';


describe('HomePage', () => {
  it('renders the app component', () => {
    render (
      <MemoryRouter>
      <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByText("Welcome To The Cart Page Next Door!")).toBeDefined();
  })
})


