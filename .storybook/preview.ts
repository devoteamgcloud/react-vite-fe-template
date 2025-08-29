import type { Preview } from '@storybook/react-vite';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import theme from '../src/core/theme';
import { ThemeProvider } from '@emotion/react';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo',
        }
    },
    decorators: [
        withThemeFromJSXProvider({
            themes: {
                theme
            },
            Provider: ThemeProvider
        })
    ]
};

export default preview;