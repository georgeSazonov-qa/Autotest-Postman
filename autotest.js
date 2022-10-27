// autotest for method swapi.dev/api/people/10/


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


// autotest for method swapi.dev/api/planets/7/

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});
