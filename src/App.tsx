
import { EditProduct } from './components/EditProduct'
import { ResetStyled } from './styles/GlobalReset'
import { GlobalProvider } from './providers/GlobalContext/GlobalContext'
import { GlobalStyled } from './styles/GlobalStyled'
import { ToastContainer } from 'react-toastify'
import RoutesMain from "./routes/routesMain";

const  App = ()=> {

  return (
    <>
    <GlobalProvider>
    <GlobalStyled/>
    <ResetStyled/>
    <RoutesMain/>
      <ToastContainer 
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
    </GlobalProvider>
    </>
  )
}

export default App;