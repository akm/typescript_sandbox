// https://typescript-jp.gitbook.io/deep-dive/intro-1/jest#enzymeno
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
