'use client';
import React from 'react';
export function DelayRender({ children, delay }) {
    const [render, setRender] = React.useState(false);
    React.useEffect(() => {
        const timeoutId = setTimeout(() => setRender(true), delay);
        return () => clearTimeout(timeoutId);
    }, [delay]);
    return render && children;
}
