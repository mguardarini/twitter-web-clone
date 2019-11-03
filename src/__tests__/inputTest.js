// import dependencies
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Input from '../../src/components/Input/input'
 
describe('<Input /> spec', () => {
    it('renders the component', () => {
      const container = render(<Input placeholder='Nome' />)
      expect(container.firstChild).toMatchSnapshot()
      expect(container.findByLabelText("Nome"))
     })
     
     it('find component by label and write there', () => {
      const {getByLabelText} = render(<Input placeholder='Nome' />);    
      const input = getByLabelText('Nome');
      input.value = 'Test component'
    })
});