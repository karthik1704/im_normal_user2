import { Route, Switch } from 'react-router-dom';
import PagesRoutes from '../Pages/Routes';

const Routes = () => {
    return (
        <Switch>
            <Route render={ () => <PagesRoutes /> } />
        </Switch>
    )
}

export default Routes;