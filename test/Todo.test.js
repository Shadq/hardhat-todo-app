const { assert } = require("chai");
const { ethers } = require("hardhat");

describe("Todo", () => {
  let todoFactory, todo;
  beforeEach(async () => {
    todoFactory = await ethers.getContractFactory("Todo");
    todo = await todoFactory.deploy();
  });

  describe("createTask", () => {
    it("Should verify that the task has been created correctly", async () => {
      const arg = "idea";
      const newTask = await todo.createTask(arg);
      const getTask = await todo.tasks(0);
      assert.equal(getTask.taskName, arg);
    });
  });

  describe("updateTask", () => {
    it("Should verify that the task has been updated correctly", async () => {
      const arg = "idea";
      const newTask = await todo.createTask(arg);
      const updateTask = await todo.updateStatus(0);
      const getTask = await todo.tasks(0);
      assert.equal(getTask.status, true);
    });
  });
});
