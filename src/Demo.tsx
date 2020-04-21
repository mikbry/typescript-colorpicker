import React from 'react';
import { ColorPicker, ColorButton } from 'material-ui-color-components';

const Demo = () => {
  const handleChange = () => {
    // setColor(newValue);
    // action('changed')(newValue);
  };
  let p = <div><ColorPicker defaultValue='#fff' onChange={handleChange} /></div>;
  if (p) {
    //
  }
  p = <div><ColorButton color='#fff' /></div>;
  return <div>TODO</div>;
}

export default Demo;
