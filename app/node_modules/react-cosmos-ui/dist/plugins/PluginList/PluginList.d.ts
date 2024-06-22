import React from 'react';
export type SimplePlugin = {
    name: string;
    enabled: boolean;
};
type Props = {
    plugins: SimplePlugin[];
    enable: (pluginName: string, enabled: boolean) => void;
};
export declare function PluginList({ plugins, enable }: Props): React.JSX.Element;
export {};
