import React from 'react';
import {shallow} from 'enzyme';
import SearchBox from './SearchBox';

describe('<SearchBox />', () => {

    const mockSearchChange = jest.fn();

    const wrapper = shallow(<SearchBox searchChange={mockSearchChange} />);

    it('get the right event', ()=> {
        const event = {
            target: { value: 'the-value' }
          };
        wrapper.find('[id="search-robots-button"]').simulate('change', event);
       expect(mockSearchChange).toBeCalledWith(event)
    });

    it('render a component', () => {
        expect(wrapper.length).toBe(1);
    });


    it('renders component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    
    
    
  //test value of change , make mockup functions.

    })
