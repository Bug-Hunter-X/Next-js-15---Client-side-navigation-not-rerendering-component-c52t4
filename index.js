```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function About() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/');
    };

    useEffect(() => {
        // Rerender the component when the route changes
        if (router.pathname === '/') {
            console.log('Home page rendering');
        }
    }, [router.pathname]);

    return (
        <div>
            <h1>About Page</h1>
            <button onClick={handleClick}>Go to Home Page</button>
        </div>
    );
}
```