(function() {
  describe("Home Page", function() {
    return it("should have a title", function() {
      return expect($("h1.title").text()).toEqual("Design.io Jasmine");
    });
  });
}).call(this);
