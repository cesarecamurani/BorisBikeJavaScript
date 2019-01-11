describe( 'Bike', function() {
  var bike

  beforeEach(function() {
    bike = new Bike;
  });

  it('creates a new bike', function() {
    expect(bike).toBeDefined();
  });

  it('sets the initial status to working', function() {
    expect(bike.reportStatus('working')).toEqual('working');
  });


  it("report a bike if it's broken", function() {
    bike.reportStatus('broken')
    expect(bike.status).toEqual('broken');
  });

});
