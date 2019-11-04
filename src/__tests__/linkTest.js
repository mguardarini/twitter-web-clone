import React from 'react'
import { createMemoryHistory } from "history";
import {render, fireEvent} from '@testing-library/react'
import Link from '../../src/components/Link/link'
 
describe('<Link /> spec', () => {
    it('Renders the component Link', () => {
      const container = render(<Link text='Test' />)
      expect(container.firstChild).toMatchSnapshot()
      expect(container.findByLabelText("Test"))
     })

     it('Should click in Link component', () => {
        const history = createMemoryHistory({ initialEntries: ["/"] });
        const {getByText} = render(<Link text='Home' path='/'/>);    
        const link = getByText('Home');
        fireEvent.click(link);
        expect(history.location.pathname).toBe("/");
    })
});