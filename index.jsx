import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Reviews/src/client/components/index.jsx';
import ProductQA from './productQA/client/components/App.jsx';
import PhotoViewer from './photo-viewer/client/components/App.jsx';
import Cart from './addProductToCart/src/App.jsx';

ReactDOM.render(<PhotoViewer />,document.getElementById('photoviewer'));

ReactDOM.render(<Cart />, document.getElementById('cart'));

ReactDOM.render(<ProductQA />, document.getElementById('qa'));

ReactDOM.render(<Review style={{margin: '10%'}}/>, document.getElementById('reviews'));
