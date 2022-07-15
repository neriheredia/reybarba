import { ListRenderItem } from "react-native";

export interface SearchBarListItem {
    label: string

}

export interface SearchBarProps<T extends SearchBarListItem> {
    theme?: string,
    placeholder: string,
    options: T[],
    renderItem: ListRenderItem<T>,
    keyExtractor: (item: T) => any
}

