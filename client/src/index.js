import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

render(
    <App />, 
    document.getElementById('mount_point')
)

const sample = 'hello';

document.write(sample)