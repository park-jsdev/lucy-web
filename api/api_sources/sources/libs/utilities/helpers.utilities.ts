//
// Utility methods
//
// Copyright © 2019 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Created by Pushan Mitra on 2019-05-21.
/**
 * @description AsyncFor
 * @param number count
 * @param closure callback
 */
export const asyncFor = async (count: number, callback: any): Promise<any> =>  {
    if (typeof callback === 'function') {
        for (let i = 0; i < count; i++) {
            await callback(i);
        }
    } else {
        return;
    }
};

/**
 * @description Async sleep method with given time in sec
 * @param number time
 * @returns Promise<any>
 */
export const sleep = async (time: number): Promise<any> => {
    return new Promise(res => setTimeout(res, time));
};

/**
 * @description Action Closure type definition
 */
export type action = () => any;

/**
 * @description Unwrap object or return default
 * @param any value
 * @param any defaultValue
 * @returns any
 */
export const unWrap = (value?: any, defaultValue?: any): any => {
    return value !== undefined ? value : defaultValue;
};

// -------------------------------