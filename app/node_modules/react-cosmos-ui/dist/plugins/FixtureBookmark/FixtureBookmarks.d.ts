import React from 'react';
import { FixtureId, FlatFixtureTree, FlatFixtureTreeItem } from 'react-cosmos-core';
type Props = {
    bookmarks: FlatFixtureTree;
    selectedFixtureId: FixtureId | null;
    onFixtureSelect: (fixtureId: FixtureId) => void;
    onBookmarkDelete: (fixtureItem: FlatFixtureTreeItem) => void;
};
export declare function FixtureBookmarks({ bookmarks, selectedFixtureId, onFixtureSelect, onBookmarkDelete, }: Props): React.JSX.Element | null;
export {};
