import '../src/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        // Базовые опции
        dark: { name: 'Dark', value: '#333' },
        light: { name: 'Light', value: '#F7F9F2' },
        // Кастомный фон
        maroon: { name: 'Maroon', value: '#400' },
      },
    },
    initialGlobals: {
      // Определяем значение фона по умолчанию
      backgrounds: { value: 'maroon' },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
