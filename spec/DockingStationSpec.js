describe( 'DockingStation', function() {
  var station

  beforeEach(function() {
    station = new DockingStation;
    bike = jasmine.createSpy('bike');
  });

  it('sets an empty rack', function() {
    expect(station.bikes()).toEqual([]);
  });

  it('sets the capacity to 20', function() {
    expect(station.capacity()).toEqual(20);
  });

  it('creates a new docking station', function() {
    expect(station).toBeDefined();
  });

  it('does not release a bike if station is empty', function() {
    expect(function() { station.release() }).toThrowError('cannot release a bike from an empty station');
  });

  it('does not dock a bike if station is full', function() {
    expect(function() { station.dock(bike) }).toThrowError('cannot dock a bike to a full station');
  });

  it('docks a bike to the station', function() {
    station.dock(bike);
    expect(station.bikes()).toEqual([bike]);
  });


});
