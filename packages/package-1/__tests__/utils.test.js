import axios from "axios";
import {callApi} from "design-system/dist";

jest.mock("axios", () => ({
	get: jest.fn(() => Promise.resolve({ data: {} })),
	post: jest.fn(() => Promise.resolve({ data: {} })),
}));


describe("[msw] locally" , () => {
    it("test on local package", async () => {
        let response = await axios.get("http://localdata.com")
        expect(response.data).toEqual({})
    })
})

describe("[callApi] utility" , () => {
    it("calls api", async () => {
        let response = await callApi();
        console.log({response});
        expect(response).toEqual(undefined)
    })
})