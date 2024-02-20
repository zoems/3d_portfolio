import { useState } from 'react'

const useAlert = () => {

  const [alert, setAlert] = useState({ show: false, text: '', type: 'danger'})

  const showAlert = ({ text, type = 'danger'}) => setAlert({
    show: true,
    text,
    type
  })

  const hideAlert = () => setAlert({
    show: false,
    text: '',
    type: 'danger'
  })

  return { alert, showAlert, hideAlert} //hooks dont return any jsx they usually return an object or hash
}

export default useAlert
