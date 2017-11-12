import React from 'react';

export const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

export const setupCanvas = () => {
  const canvas = document.createElement('canvas');
  const drawingContainer = document.querySelector('#drawing-container');
  drawingContainer.appendChild(canvas);

  return [canvas, canvas.getContext('2d')];
};
