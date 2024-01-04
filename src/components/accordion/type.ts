
export interface IAccordionItemProps {
  id: string;
  label: string;
  key?: string;
  onPress?: (id: string) => void;
}

export interface IAccordionProps {
  onPressItem: (id: string) => void;
  onPress: (id: string) => void
  id: string;
  title: string;
  items: IAccordionItemProps[];
}