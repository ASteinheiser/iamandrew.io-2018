import React    from 'react';
import ReactDOM from 'react-dom';

import Router         from './router';
import { unregister } from './registerServiceWorker';

import './index.css';

ReactDOM.render(<Router />, document.getElementById('root'));
unregister();
