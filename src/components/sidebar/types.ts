export type NavLinks = Array<{
  name: string;
  icon?: JSX.Element;
  link: string;
  visible: boolean;
  items?: NavLinks;
}>;
