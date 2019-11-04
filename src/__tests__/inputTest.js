import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Input from '../../src/components/Input/input'
 
describe('<Input /> spec', () => {
    it('Renders the component', () => {
      const container = render(<Input placeholder='Nome' />)
      expect(container.firstChild).toMatchSnapshot()
      expect(container.findByLabelText("Nome"))
     })

     it('Should write in textfield', () => {
        const textMock = 'TestNome'
        const {getByLabelText} = render(<Input placeholder='Nome' />);    
        const input = getByLabelText('Nome');
        fireEvent.change(input, { target: { value: textMock } });
        expect(input.value).toBe(textMock);
    })
});