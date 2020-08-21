import {ThemeContext} from './theme-context';
import {h} from 'preact';

function ThemeTogglerButton() {
  // ThemeTogglerButton получает из контекста
  // не только значение UI-темы, но и функцию toggleTheme.
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;

