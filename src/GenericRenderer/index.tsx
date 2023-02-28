import React from 'react';
import { GenericProperty } from './GenericProperty';

export interface GenericRendererProps {
  data: any;
}

export const GenericRenderer: React.FC<GenericRendererProps> = ({ data }) => {
  return (
    <>
      <GenericProperty data={data}></GenericProperty>
    </>
  );
};
