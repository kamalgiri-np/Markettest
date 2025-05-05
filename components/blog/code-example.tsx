import { CodeBlock } from "@/components/code-block"

export function CodeExample() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Code Examples</h2>

      <CodeBlock
        language="javascript"
        code={`// Example JavaScript code
function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

const cart = [
  { name: 'Product 1', price: 10, quantity: 2 },
  { name: 'Product 2', price: 15, quantity: 1 },
  { name: 'Product 3', price: 20, quantity: 3 }
];

const total = calculateTotal(cart);
console.log(\`Total: $\${total}\`);
`}
      />

      <CodeBlock
        language="css"
        code={`.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.card {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  background-color: white;
}

.button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #4a90e2;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #3a7bc8;
}`}
      />

      <CodeBlock
        language="html"
        code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <header>
      <h1>Welcome to Our Website</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    
    <main>
      <section class="card">
        <h2>Featured Content</h2>
        <p>This is some example content to demonstrate HTML formatting.</p>
        <a href="#" class="button">Learn More</a>
      </section>
    </main>
    
    <footer>
      <p>&copy; 2023 Example Company. All rights reserved.</p>
    </footer>
  </div>
  
  <script src="script.js"></script>
</body>
</html>`}
      />
    </div>
  )
}
