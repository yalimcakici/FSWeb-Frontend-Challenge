import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Login from './pages/Login'
import Feed from './pages/Feed'


function App() {

  return (
    <>
      <Switch>
      <h1 className="text-3xl font-bold underline text-red-500">
    Hello world!
  </h1>
        <Route exact path="/" >
        <Redirect to="/login" />
        </Route>
        <Route path="/login" > <Login/>
        </Route>
        <Route path="/feed" > <Feed/>
        </Route>
      </Switch>
    </>
  )
}

export default App
