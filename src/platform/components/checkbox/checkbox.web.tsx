import React from 'react';

type appProps = {
  _web: object;
  _mobile: object;
  background?: string;
  size?: number;
  defaultChecked?: boolean;
  onCheck?: (value: boolean) => void;
};

export default function ({
  _web,
  background,
  size,
  defaultChecked,
  onCheck,
}: appProps) {
  return (
    <input
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        onCheck?.(event.target.checked)
      }
      defaultChecked={defaultChecked}
      type='checkbox'
      style={{
        ..._web,
        accentColor: background ? background : 'red',
        cursor: 'pointer',
        zoom: size,
      }}
    />
  );
}
