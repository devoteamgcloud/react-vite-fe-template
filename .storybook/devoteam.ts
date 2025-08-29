import { create } from 'storybook/theming';
import theme from '../src/core/theme';

export default create({
    base: 'dark',
    brandTitle: 'Devoteam',
    brandUrl: "https://gcloud.devoteam.com/home/",
    brandImage: "/logo-devoteam.svg",
    brandTarget: "_blank",

    barSelectedColor: theme.colors.primary,
    barHoverColor: theme.colors.primary,
    colorSecondary: theme.colors.primary
});