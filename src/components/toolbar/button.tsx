import * as React from 'react';

interface IToolbarButtonProps {
  title: string;
  toolbar: { selected: string };
  changeSelected: (title: string) => void;
}

const ToolbarButton = (props: IToolbarButtonProps) => {
  return <button onClick={() => props.changeSelected(props.title)}>{props.title}</button>;
};

export default ToolbarButton;
