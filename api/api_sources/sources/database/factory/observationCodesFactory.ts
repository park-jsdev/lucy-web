/*
 * Copyright © 2019 Province of British Columbia
 * Licensed under the Apache License, Version 2.0 (the "License")
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * **
 * http://www.apache.org/licenses/LICENSE-2.0
 * **
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * File: observationCodesFactory.ts
 * Project: lucy
 * File Created: Friday, 12th July 2019 2:15:03 pm
 * Author: pushan
 * -----
 * Last Modified: Friday, 12th July 2019 2:15:17 pm
 * Modified By: pushan
 * -----
 */

 /**
  * Imports
  */
import { JurisdictionCode, JurisdictionCodeController} from '../models';
import { Species, SpeciesController} from '../models';

/**
 * @description Factory for code
 * @param boolean noSave: Save on db flag
 */
export const jurisdictionCodeFactory = async (id?: number, noSave?: boolean): Promise<JurisdictionCode> => {
    const code: JurisdictionCode = await JurisdictionCodeController.shared.findById(id || 1);
    return code;
};

/**
 * @description Destroy factory obj
 * @param JurisdictionCode code
 */
export const destroyJurisdictionCode = async (code: JurisdictionCode) => {
    await JurisdictionCodeController.shared.remove(code);
};

/**
 * @description Factory of species
 * @param boolean noSave: Flag to save species
 */
export const speciesFactory = async (id?: number, noSave?: boolean): Promise<Species> => {
    const species: Species = await SpeciesController.shared.findById(id || 1);
    return species;
};

/**
 * @description Destroy factory obj
 * @param JurisdictionCode code
 */
export const destroySpecies = async (species: Species) => {
    await SpeciesController.shared.remove(species);
};
// -------------------------------------------------------------------------------

