import React from 'react';
import renderer from 'react-test-renderer'
import { shallow, mount} from 'enzyme';
import Contact from '../src/components/Contact';

/* test de rendu*/
describe('Home render', () => {
it('Contact snapshot', () => {
  const tree = renderer
    .create(<Contact />).toJSON();//use render() of component
  expect(tree).toMatchSnapshot();
});
/* test de fonctionnalité*/
 /* unit test*/

 it('contact render one component', () => {
     const wrapper = shallow(<Contact optInValue={true} authenticated={true}/>);
     expect(wrapper.length).toEqual(1);  // to have one Component
  }); 


});