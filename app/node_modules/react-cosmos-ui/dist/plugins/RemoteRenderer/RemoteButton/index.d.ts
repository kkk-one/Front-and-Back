import React from 'react';
import { NotificationItem } from '../../Notifications/spec.js';
type Props = {
    devServerOn: boolean;
    rendererUrl: null | string;
    pushNotification: (notification: NotificationItem) => unknown;
};
export declare function RemoteButton({ devServerOn, rendererUrl, pushNotification, }: Props): React.JSX.Element | null;
export {};
