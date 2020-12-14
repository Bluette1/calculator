import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Route } from 'react-router-dom';
import Routes from '../Routes';
import App from '../components/App';
import Quote from '../layouts/Quote';
import Home from '../layouts/Home';
import NotFound from '../layouts/NotFound';

configure({ adapter: new Adapter() });

let pathMap = {};
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<Routes />);
    pathMap = component.find(Route).reduce((map, route) => {
      const routeMap = map;
      const routeProps = route.props();
      routeMap[routeProps.path] = routeProps.component;
      return routeMap;
    }, {});
  });
  it('should show Home component for / route', () => {
    expect(pathMap['/']).toBe(Home);
  });
  it('should show App component for /calculator route', () => {
    expect(pathMap['/calculator']).toBe(App);
  });
  it('should show Quote component  for /quote route', () => {
    expect(pathMap['/quote']).toBe(Quote);
  });
  it('should show NotFound o component for any route that is not defined', () => {
    expect(pathMap.undefined).toBe(NotFound);
  });
});
