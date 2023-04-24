import { User } from './User';

import { CustomMap } from './CustomMap';
import { Company } from './Company';

const newUser = new User();
const newCompany = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(newUser);
customMap.addMarker(newCompany);
