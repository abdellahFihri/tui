import React from 'react';
import {shallow} from 'enzyme'
import InputContainer from './input-container'

it('expect to render inputContainer component',()=>{

    expect(shallow(<InputContainer/>)).toMatchSnapshot();
})