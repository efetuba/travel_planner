import { getImage } from './getImage';

describe('test if function is valid',()=>{
    test("should return function to be TRUE ", () => {
        expect(typeof getImage).toBe("function");
    });
})