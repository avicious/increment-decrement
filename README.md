# Increment Decrement

A lightweight, accessible, and customizable React counter component built with **Lucide React** icons and **CSS Modules**.

## Live Demo

**Check out the live version of this project here:** [avicious.github.io/increment-decrement/](https://avicious.github.io/increment-decrement/)

## Features

- **Boundary Protection:** Hard limits for minimum and maximum values.
- **Accessibility:** Full ARIA support for screen readers and keyboard navigation.
- **Visual Cues:** Automatic button disabling when limits are reached.
- **Flexible Styling:** Uses CSS Modules to avoid global style leakage.

## Accessibility (A11y)

- **Aria Labels:** Buttons are labeled "Increase value" and "Decrease value" to provide context to screen readers.
- **Aria Live:** The count container uses `aria-live="polite"`, ensuring that the new number is announced to the user whenever it changes.
- **Semantic HTML:** Uses the `disabled` attribute on buttons to natively prevent interaction and communicate state to assistive technology.

## Usage

```javascript
import IncrementDecrement from "./components/IncrementDecrement";

function App() {
  return (
    <div className="container">
      <IncrementDecrement minVal={1} maxVal={10} />;
    </div>
  );
}
```
