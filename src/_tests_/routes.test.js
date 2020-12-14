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
    const homePage = pathMap['/'];
    expect(homePage).toBe(Home);
  });
  it('should show App component for /calculator route', () => {
    const calculatorPage = pathMap['/calculator'];
    expect(calculatorPage).toBe(App);
    expect(calculatorPage).toMatchSnapshot();
  });
  it('should show Quote component  for /quote route', () => {
    const quotePage = pathMap['/quote'];
    expect(quotePage).toBe(Quote);
    expect(quotePage).toMatchSnapshot();
  });
  it('should show NotFound component for any route that is not defined', () => {
    const unKnownPath = pathMap.undefined;
    expect(unKnownPath).toBe(NotFound);
    expect(unKnownPath).toMatchSnapshot();
  });
});
