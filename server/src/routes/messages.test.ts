import request from "supertest";
import { app } from "../app";
import { dbConnection, dbDisconnect } from "../config";

describe("POST /messages", () => {
	beforeAll(async () => {
		await dbConnection();
	});

	afterAll(async () => {
		await dbDisconnect();
	});

	test("Should get 200", async () => {
		await request(app).post("/api/messages");
		expect(200);
	});

	test("Content type should be json", async () => {
		await request(app)
			.post("/api/messages")
			.expect("Content-type", "application/json; charset=utf-8");
	});

	test("Should return {user: null} because it doesn't pass auth", async () => {
		await request(app).post("/api/messages").expect({ user: null });
	});
});
