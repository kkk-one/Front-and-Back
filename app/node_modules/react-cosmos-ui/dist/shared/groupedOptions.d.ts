export type GroupedOptions<Option> = {
    group: string;
    options: Option[];
};
export declare function isGroupedOptions<Option>(options: Option[] | GroupedOptions<Option>[]): options is GroupedOptions<Option>[];
