import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Button from '../../src/components/Button/defaultButton'
 
describe('<Button /> spec', () => {
    it('Renders the component', () => {
      const container = render(<Button text='Nome' />)
      expect(container.firstChild).toMatchSnapshot()
      expect(container.findByLabelText("Nome"))
     })

     it('Should click in button', () => {
        const onClick = jest.fn();
        const {getByText } = render(<Button text='Nome' onClick={onClick} />);    
        const button = getByText ('Nome');
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    })
});