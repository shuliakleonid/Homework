import React from 'react';
import PreJunior from './pages/PreJunior';
import Error404 from './pages/Error404';
import {Route, Switch} from 'react-router-dom'
import Junior from './pages/Junior';

export const PATH = {
  PRE_JUNIOR: '/pre-junior',
  JUNIOR: '/junior',
  BUTTON: '/button',
  // add paths
}

function Routes() {
  return (
      <div>
        {/*Switch выбирает первый подходящий роут*/}
        <Switch>

          {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
          {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
          <Route exact path={'/'} render={() => <PreJunior/>}/>
          <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
          <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
          <Route path={PATH.BUTTON} render={() => <PreJunior/>}/>
          // add routes

          {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
          <Route render={() => <Error404/>}/>

        </Switch>
      </div>
  );
}

export default Routes;
