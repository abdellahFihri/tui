import React from 'react';
import {shallow} from 'enzyme'
import MainPage from './home'

it('expect to render MainPage component',()=>{

    expect(shallow(<MainPage/>)).toMatchSnapshot();
})