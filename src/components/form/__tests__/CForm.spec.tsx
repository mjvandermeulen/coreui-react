import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CForm, CFormLabel, CFormControl, CFormText, CFormCheck, CButton } from '../../../index'

test('loads and displays CForm component', async () => {
  const { container } = render(<CForm>Test</CForm>)
  expect(container).toMatchSnapshot()
})

test('CForm customize', async () => {
  const { container } = render(
    <CForm className="bazinga" validated={true}>
      Test
    </CForm>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('was-validated')
})

test('CForm example', async () => {
  const { container } = render(
    <CForm>
      <CFormLabel>A</CFormLabel>
      <CFormControl type="email" aria-describedby="B" />
      <CFormText>C</CFormText>
      <CFormCheck label="D" />
      <CButton type="submit" color="primary">
        E
      </CButton>
    </CForm>,
  )
  expect(container).toMatchSnapshot()
})
