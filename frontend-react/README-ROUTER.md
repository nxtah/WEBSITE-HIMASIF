# React Router Setup Guide

This project has been set up with React Router DOM to handle client-side routing in your React application.

## What's Included

- **React Router DOM**: The standard routing library for React applications
- **Layout Component**: A shared layout with navigation and footer
- **Multiple Pages**: Sample pages for different sections of your application
- **404 Page**: A custom page for handling routes that don't exist

## Project Structure

```
src/
├── components/
│   ├── Layout.jsx         # Main layout with navigation and footer
│   └── BootstrapDemo.jsx  # Bootstrap components demo
├── pages/
│   ├── Home.jsx           # Homepage
│   ├── About.jsx          # About page
│   ├── Events.jsx         # Events listing page
│   ├── Contact.jsx        # Contact form page
│   ├── ApiDemo.jsx        # Laravel API integration demo
│   └── NotFound.jsx       # 404 page
└── main.jsx               # Router configuration
```

## How Routing Works

1. The `BrowserRouter` component is the root router component that keeps the UI in sync with the URL.
2. The `Routes` component defines a container for all route definitions.
3. The `Route` components define the mapping between URL paths and React components.
4. Nested routes are used to create a layout that persists across page changes.

## Adding New Routes

To add a new page to your application:

1. Create a new component in the `src/pages` directory
2. Add a new route in `src/main.jsx`:

```jsx
<Route path="new-page" element={<NewPage />} />
```

3. Add a link to the new page in the navigation:

```jsx
<Nav.Link as={Link} to="/new-page">New Page</Nav.Link>
```

## Navigation

### Using Link Component

The `Link` component is used to navigate between pages without a full page reload:

```jsx
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
```

### Using Navigation Hooks

For programmatic navigation, use the `useNavigate` hook:

```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/about');
  };
  
  return (
    <button onClick={handleClick}>Go to About</button>
  );
}
```

## Route Parameters

To create dynamic routes with parameters:

1. Define a route with a parameter:

```jsx
<Route path="users/:userId" element={<UserDetail />} />
```

2. Access the parameter in your component:

```jsx
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { userId } = useParams();
  
  return <div>User ID: {userId}</div>;
}
```

## Nested Routes

This project uses nested routes to create a shared layout:

```jsx
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  {/* More routes */}
</Route>
```

The `Outlet` component in the `Layout` component renders the child route's element.

## Protected Routes

For routes that require authentication, create a protected route wrapper:

```jsx
function ProtectedRoute({ children }) {
  const isAuthenticated = checkIfUserIsAuthenticated();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// Usage
<Route 
  path="dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } 
/>
```

## Query Parameters

To work with query parameters:

```jsx
import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  
  return <div>Search results for: {query}</div>;
}
```

## Documentation

For more information about React Router, visit:
- [React Router Documentation](https://reactrouter.com/en/main)
