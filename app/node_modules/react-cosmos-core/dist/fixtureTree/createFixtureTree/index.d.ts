import { FixtureList } from '../../userModules/fixtureTypes.js';
import { FixtureTreeNode } from '../types.js';
export declare function createFixtureTree({ fixtures, fixturesDir, fixtureFileSuffix, }: {
    fixtures: FixtureList;
    fixturesDir: string;
    fixtureFileSuffix: string;
}): FixtureTreeNode;
