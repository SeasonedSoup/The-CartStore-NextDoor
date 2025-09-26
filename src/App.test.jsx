import { describe, it, expect } from 'vitest';
import {render, screen} from '@testing-library/react';
import { HomePage } from './pages/HomePage'; 
import { ShopPage } from './pages/ShopPage';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

describe('HomePage', () => {
  it('renders the app component', () => {
    render (
      <MemoryRouter>
      <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByText("Welcome To The Cart Page Next Door!")).toBeDefined();
  })

  it("transports user to shop page when clicking the button", async () => {
    const user = userEvent.setup();
    render (
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shoppage" element={<ShopPage />} />
        </Routes>
      </MemoryRouter>
    )
    const [button] = screen.getAllByRole("link", { name: /shop now!/i });
    await user.click(button);

    expect(
      await screen.findByText(/this is where to browse items and add them to your cart!/i)
    ).toBeInTheDocument();
  })
})


