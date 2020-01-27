import React from 'react';
import {shallow} from 'enzyme'
import CustomButton from './custom-button'

it('expect to render CustomButton component',()=>{

    expect(shallow(<CustomButton/>)).toMatchSnapshot();
})