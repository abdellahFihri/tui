import React from 'react';
import {shallow} from 'enzyme'
import CircularUnderLoad from './spinner'

it('expect to render spinner component',()=>{

    expect(shallow(<CircularUnderLoad/>)).toMatchSnapshot();
})