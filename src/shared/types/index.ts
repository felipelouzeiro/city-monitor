export interface IHtmlComponentsProps {
  children: React.ReactNode;
}

export interface IListItemLinkProps {
  icon: string;
  to: string;
  label: string;
  onClick: (() => void) | undefined;
}
