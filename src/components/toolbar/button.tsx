import * as React from 'react';

interface IToolbarButtonProps {
  title: string;
  toolbar: { selected: string };
  changeSelected: (title: string) => void;
}

const ToolbarButton = (props: IToolbarButtonProps) => {
  return (
    <div className="cu-dt-filter">
      <div className="cu-dt-filter__item">
        <div className="cu-dt-filter__param" onClick={() => props.changeSelected(props.title)}>
          {props.title}
        </div>
      </div>
    </div>
  );
};

export default ToolbarButton;
