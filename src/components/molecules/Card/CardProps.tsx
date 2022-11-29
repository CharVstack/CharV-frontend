export type CardProps =
  | {
      hasAsideContent?: false;
      title: string;
      children: React.ReactElement;
    }
  | {
      hasAsideContent: true;
      title: string;
      children: [React.ReactElement, React.ReactElement];
    };
