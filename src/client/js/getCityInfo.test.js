import { getCityInfo } from './getCityInfo';

describe('test if function is valid',()=>{
    test("should return function to be TRUE ", () => {
        expect(typeof getCityInfo).toBe("function");
    });
})