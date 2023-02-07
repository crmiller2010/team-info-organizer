const teamMember = require('../index');
const addManager = ("kevin","12345","kevin@gmail.com","5678");
const addEngineer = ("jake","4561","jake@gmail","jake.github;")
const addIntern = ("mike","2200","mike@gmail","UWM");
test("see if manager function works", () => {
  expect(addManager.name=="kevin");
  expect(addManager.id=="12345");
  expect(addManager.email=="kevin@gmail.com");
  expect(addManager.officeNumber==="5678");
});

test("see if addEngineer() function works", () => {
  expect(addEngineer.name=="jake");
  expect(addEngineer.id=="4561");
  expect(addEngineer.email=="jake@gmail");
  expect(addEngineer.github=="jake.github");
});

test("see if addIntern() function works", () => {
  expect(addIntern.name=="mike");
  expect(addIntern.id=="2200");
  expect(addIntern.email=="mike@gmail");
  expect(addIntern.school=="UWM");
});