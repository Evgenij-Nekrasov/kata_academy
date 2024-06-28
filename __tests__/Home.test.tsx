import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('Home', () => {
  it('render a "Поступить в KATA" text', () => {
    // Arrange
    render(<Home />);

    //Act
    const LearnText = screen.getByText('Поступить в KATA');

    // Assert
    expect(LearnText).toBeInTheDocument();
  });

  it('render a "Онлайн-курсы программирования" text', () => {
    render(<Home />);

    const Courses = screen.getByText(/Онлайн-курсы программирования/i);

    expect(Courses).toBeInTheDocument();
  });

  it('should have a heading', () => {
    render(<Home />);

    const HeadingText = screen.getByRole('heading', {
      name: 'Онлайн-курсы программирования',
    });

    expect(HeadingText).toBeInTheDocument();
  });

  it('should have a paragraph', () => {
    render(<Home />);
    const ParagraphText = screen.getByText(
      /в течение двух месяцев после окончания обучения в школе программирования Kata Academy/i,
    );

    expect(ParagraphText).toBeInTheDocument();
  });
});
