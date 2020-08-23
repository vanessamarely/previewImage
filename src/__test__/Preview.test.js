import React from 'react';
import { render, screen } from '@testing-library/react';
import { Preview } from "../components/Preview";

test("Render component", () => {
    const myMock = jest.fn( () => 'img.jpg');
    const { container } = render(<Preview imageprovider={myMock} />);
    const image = screen.getByAltText(/Preview Image/i);
    // const foo = container.querySelector("img[src='img.jpg']");
    
    expect(myMock.mock.calls.length).toBe(1);
    expect(image).toHaveAttribute('src', 'img.jpg');
})