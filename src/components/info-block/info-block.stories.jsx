import InfoBlock from './info-block.jsx';

export default {
  // Название компонента и путь, по которому его нужно отобразить на витрине
  title: 'components/InfoBlock',

  // Передаём сам компонент
  component: InfoBlock,
  // parameters: {
  //   layout: 'centered',
  // },

  globals: {
    // Переопределяем фон для всех историй компонента
    backgrounds: { value: 'maroon' },
  },

  // Тег autodocs просит Storybook сгенерировать отдельную историю с документацией компонента
  tags: ['autodocs'],
};

// История с компонентом белого цвета
export const White = {
  // Для React-компонентов  args === props
  args: {
    title: 'Привет',
    caption: 'Я — белый InfoBlock',
    color: 'white',
  },
  decorators: [
    (Story) => (
      // Ограничиваем ширину контейнера
      <div style={{ maxWidth: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

// История с компонентом красного цвета
export const Red = {
  args: {
    title: 'Привет',
    caption: 'Я — красный InfoBlock',
    color: 'red',
  },
  globals: {
    // Переопределяем фон для конкрентной истории
    backgrounds: { value: 'maroon' },
  },
};
