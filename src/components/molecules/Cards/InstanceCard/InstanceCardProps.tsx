import { ReactNode } from 'react';

type InstanceCardProps = {
  hasAsideContent: false;
  title: string;
  children: ReactNode;
};

type InstanceCardWithAsideProps = {
  hasAsideContent: true;
  title: string;
  children: [ReactNode, ReactNode];
};

export type InstanceCardUnion = InstanceCardProps | InstanceCardWithAsideProps;
