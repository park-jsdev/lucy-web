// User Factory
import * as faker from 'faker';

import { User} from '../models/user';
import { RolesCodeValue, RoleCodeController } from '../models/appRolesCode';

export const userFactory = async (accessCodeValue: RolesCodeValue): Promise<User> => {
    const user = new User();
    user.email = faker.internet.email();
    user.firstName = faker.name.firstName();
    user.lastName = faker.name.lastName();
    user.accessCodes = [ await RoleCodeController.shared.fetchOne({code: accessCodeValue})];
    return user;
};