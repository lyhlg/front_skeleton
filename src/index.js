import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FormContainer from './components/container/FormContainer.jsx';

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
