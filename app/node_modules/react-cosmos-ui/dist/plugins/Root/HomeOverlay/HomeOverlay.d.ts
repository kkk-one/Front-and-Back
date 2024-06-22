import React from 'react';
type Props = {
    welcomeDismissed: boolean;
    onDismissWelcome: () => unknown;
    onShowWelcome: () => unknown;
};
export declare function HomeOverlay({ welcomeDismissed, onDismissWelcome, onShowWelcome, }: Props): React.JSX.Element;
export {};
