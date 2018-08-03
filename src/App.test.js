import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App><h1>Hello</h1></App>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('works with enzyme', () => {
  let props = {
    "children" : <h1>Hello</h1>
  }
  mount(<App {...props}/>);
});