describe "Home Page", ->
  it "should have a title", ->
    expect($("h1.title").text()).toEqual "Design.io Jasmine"