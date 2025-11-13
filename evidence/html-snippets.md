# HTML Snippets Evidence

## 1. Landmark Structure
```html
<header role="banner">
  <h1>Advanced Web Project</h1>
</header>

<nav role="navigation" aria-label="Primary">
  <ul>
    <li><a href="index.html" aria-current="page">Home</a></li>
    <li><a href="views/data.html">Data</a></li>
    <li><a href="views/form.html">Form</a></li>
  </ul>
</nav>

<main id="main" tabindex="-1" role="main">
  <h2>Welcome</h2>
</main>

<footer role="contentinfo">
  <p>&copy; 2025 Advanced Web Project</p>
</footer>

 ## 2.Skip link 
<a class="skip-link" href="#main">Skip to main content</a>

## 3.Accessible form group.
<label for="email">Email Address</label>
<input id="email" name="email" type="email"
       aria-describedby="email-help" required>
<p id="email-help" class="helper-text">
  We’ll only use your email to respond.
</p>

##4. ARIA Live Region (Example)
<p id="status" role="status" aria-live="polite" class="hidden-visually">
  Form submitted successfully!
</p>

##5. Keyboard-Operable Component
<button type="submit">Send Message</button>
