// import { server } from "./__mocks__/server";

global.console = {
	...console,
	// uncomment to ignore a specific log level
	// log: jest.fn(),
	debug: jest.fn(),
	info: jest.fn(),
	warn: jest.fn(),
	error: jest.fn(),
};

// beforeAll(() => server.listen());

// afterEach(() => server.resetHandlers());

// afterAll(() => server.close());
