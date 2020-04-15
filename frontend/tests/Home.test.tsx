import React from 'react';
import renderer from 'react-test-renderer'
import { shallow, mount} from 'enzyme';
import Home from '../src/components/Home';

/* test de rendu*/
describe('Home snapshot', () => {
it('Home snapshot', () => {
  const tree = renderer
    .create(<Home />).toJSON();//use render() of component
  expect(tree).toMatchSnapshot();
});
/* test de fonctionnalité*/
 /* unit test*/

 it('home render one component', () => {
     const wrapper = shallow(<Home optInValue={true} authenticated={true}/>);
     expect(wrapper.length).toEqual(1);  // to have one Component
  }); 


});