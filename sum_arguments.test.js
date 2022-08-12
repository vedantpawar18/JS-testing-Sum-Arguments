const sum= require("./sum_arguments")

describe ("Testing the sum function", () =>{
    test("Add 2 positive numbers", () =>{
        expect(sum(1,2)).toBe(3)
    });

    test("Add 2 negative numbers", () =>{
        expect(sum(-1,-2)).toBe(-3)
    });

    test("Add 2 decimal numbers", () =>{
        expect(sum(1.5,2.3)).toBe(3.8)
    });

    test("Add 2 decimal numbers as string, but the output is an integer", () =>{
        expect(sum("2","3")).toBe(5)
    });

    test("Call the sum function without arguments", () =>{
        expect(sum()).toBe("No arguments provided")
    });

    test("Call the sum function with 1 arguments", () =>{
        expect(sum(1)).toBe("Need one more arguments")
    });

    test("Sum function with more than 2 arguments", () =>{
        expect(sum(1,2,3)).toBe(6)
    });
});