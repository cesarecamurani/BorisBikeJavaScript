describe( 'DockingStation', function() {
  var station

  beforeEach(function() {
    station = new DockingStation;
  });

  it('creates a new docking station', function() {
    expect(station).toBeDefined();
  });

});
