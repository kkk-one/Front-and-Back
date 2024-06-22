type GroupedOptions<Option extends string> = {
    group: string;
    options: Option[];
};
export type UseSelectArgs<Option extends string> = {
    options: Option[] | GroupedOptions<Option>[];
    defaultValue?: Option;
};
export type SetSelectValue<Option extends string> = (value: Option) => void;
export declare function getDefaultSelectValue<Option extends string>({ options, defaultValue, }: UseSelectArgs<Option>): Option;
export {};
