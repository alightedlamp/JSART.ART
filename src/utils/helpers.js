import React from 'react';

export const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

export const setupCanvas = config => {
  const canvas = document.createElement('canvas');
  canvas.width = config.size[0];
  canvas.height = config.size[1];
  canvas.style.background = config.color;
  canvas.style.top = config.pos[0];
  canvas.style.left = config.pos[1];

  const drawingContainer = document.querySelector('#drawing-container');
  drawingContainer.appendChild(canvas);

  return [canvas, canvas.getContext('2d')];
};
