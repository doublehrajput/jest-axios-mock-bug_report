import { rest } from "msw";

export const handlers = [
	// Handles a POST /login request
	rest.post("http://urltotest.com", (req, res, ctx) => {
		return res(ctx.json({ status: "done" }));
	}),

    rest.get("http://localdata.com", (req, res, ctx) => {
		return res(ctx.json({ data: [] }));
	}),
];
