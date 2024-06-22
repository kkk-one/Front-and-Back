import { PluginContext } from 'react-plugin';
import { TreeExpansion } from '../../shared/treeExpansion.js';
import { StandardInputSpec } from './spec.js';
export declare function useTreeExpansionStorage(pluginContext: PluginContext<StandardInputSpec>): {
    expansion: {};
    setExpansion: (newTreeExpansion: TreeExpansion) => void;
};
