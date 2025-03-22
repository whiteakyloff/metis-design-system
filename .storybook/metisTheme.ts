// .storybook/metisTheme.js
import { create } from '@storybook/theming';

export default create({
    base: 'light',
    brandTitle: 'Metis Design System',
    brandUrl: 'https://ds.metis.works',
    brandImage: '/metis_logo.png', // Додайте ваш логотип в папку .storybook/public/
    brandTarget: '_self',
    colorPrimary: '#0066CC', // Основний колір вашого бренду
    colorSecondary: '#FF5500', // Додатковий колір
    // Інші налаштування теми
});