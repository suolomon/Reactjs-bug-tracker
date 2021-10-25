
import {useSelector} from 'react-redux'
import Login from './Views/Login/Login'


function App() {
  const {auth} = useSelector(state => state)
  return (
    <>
   {!auth.LoggedIn ? <Login/> : <h1>Hello!</h1>}
    </>
  );
}

export default App;
