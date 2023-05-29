import './styles.scss';
import * as FeatureFlags from '@carbon/feature-flags';
import { white, g10, g90, g100 } from '@carbon/themes';
import { breakpoints } from '@carbon/layout';
// @ts-ignore
import { GlobalTheme } from '@carbon/react';
import theme from './theme';
import { useEffect } from 'react';

FeatureFlags.merge({
  'enable-css-custom-properties': true,
  'enable-css-grid': true,
  'enable-v11-release': true,
  'enable-experimental-tile-contrast': false,
});

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Set the localization for the storybook',
    defaultValue: 'en',
  },
  theme: {
    name: 'Theme',
    description: 'Set the global theme for displaying components',
    defaultValue: 'white',
    toolbar: {
      icon: 'paintbrush',
      items: ['white', 'g10', 'g90', 'g100'],
    },
  },
};

export const parameters = {
  backgrounds: {
    // https://storybook.js.org/docs/react/essentials/backgrounds#grid
    grid: {
      cellSize: 8,
      opacity: 0.5,
    },
    values: [
      {
        name: 'white',
        value: white.background,
      },
      {
        name: 'g10',
        value: g10.background,
      },
      {
        name: 'g90',
        value: g90.background,
      },
      {
        name: 'g100',
        value: g100.background,
      },
    ],
  },
  controls: {
    // https://storybook.js.org/docs/react/essentials/controls#show-full-documentation-for-each-property
    expanded: true,

    // https://storybook.js.org/docs/react/essentials/controls#specify-initial-preset-color-swatches
    // presetColors: [],

    hideNoControlsWarning: true,
  },
  darkMode: {
    current: 'light',
  },
  docs: {
    theme,
  },
  // Small (<672)
  // Medium (672 - 1056px)
  // Large (1056 - 1312px)
  // X-Large (1312 - 1584px)
  // Max (>1584)
  viewport: {
    viewports: {
      sm: {
        name: 'Small',
        styles: {
          width: breakpoints.sm.width,
          height: '100%',
        },
      },
      md: {
        name: 'Medium',
        styles: {
          width: breakpoints.md.width,
          height: '100%',
        },
      },
      lg: {
        name: 'Large',
        styles: {
          width: breakpoints.lg.width,
          height: '100%',
        },
      },
      xlg: {
        name: 'X-Large',
        styles: {
          width: breakpoints.xlg.width,
          height: '100%',
        },
      },
      Max: {
        name: 'Max',
        styles: {
          width: breakpoints.max.width,
          height: '100%',
        },
      },
    },
  },
};

export const decorators = [
  (Story, context) => {
    const { theme } = context.globals;

    useEffect(() => {
      document.documentElement.setAttribute('data-carbon-theme', theme);
    }, [theme]);

    return (
      <GlobalTheme theme={theme}>
        <Story {...context} />
    </GlobalTheme>
  );
  },
];
