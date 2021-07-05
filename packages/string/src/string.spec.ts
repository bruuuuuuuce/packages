import { toSnakeCase, getBase64ContentLength} from "./string";

describe("string package", () => {
    it('should camelCase to snake_case', function () {
        const camelCaseString = "thisIsCamelCase";
        expect(toSnakeCase(camelCaseString)).toEqual("this_is_camel_case");

        expect(toSnakeCase("")).toEqual("");
    });

    it("should return the base64 content length", () => {
        const base64_1 = "this_is_a_test==";
        const base64_2 = 'this_is_a_test';
        const base64_3 = "word=";

        expect(getBase64ContentLength(base64_1)).toEqual(10);
        expect(getBase64ContentLength(base64_2)).toEqual(10.5);
        expect(getBase64ContentLength(base64_3)).toEqual(2.75);
    })
})