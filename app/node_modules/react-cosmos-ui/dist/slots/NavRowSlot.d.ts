import React from 'react';
export type NavRowSlotProps = {
    onCloseNav: () => unknown;
};
type Props = {
    slotProps: NavRowSlotProps;
    plugOrder: string[];
};
export declare function NavRowSlot({ slotProps, plugOrder }: Props): React.JSX.Element;
export {};
