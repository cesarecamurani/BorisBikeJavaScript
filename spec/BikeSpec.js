describe( 'Bike', function() {
  var bike

  beforeEach(function() {
    bike = new Bike;
  });

  it('creates a new docking station', function() {
    expect(bike).toBeDefined();
  });

});
