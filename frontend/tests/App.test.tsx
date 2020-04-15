import React from 'react';
// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { shallow, mount} from 'enzyme';
import App from '../src/components/App';

/* test de rendu*/
describe('App', () => {
it('App should render correctly', () => {
  const tree = renderer
    .create(<App />).toJSON();//use render() of component
  expect(tree).toMatchSnapshot();
});
/* test de fonctionnalité*/
 it('renders App', () => {
     const wrapper = shallow(<App optInValue={true} authenticated={true}/>);

     expect(wrapper.length).toEqual(1);   
  }); 



});