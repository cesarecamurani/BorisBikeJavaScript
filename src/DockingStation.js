function DockingStation () {
  this._rack = [];
  this._defaultCapacity = 20;

};

DockingStation.prototype.bikes = function() {
  return this._rack;
};

DockingStation.prototype.capacity = function () {
  return this._defaultCapacity;
};

DockingStation.prototype.release = function() {
  if(this._rack.length === 0) {
    throw new Error('cannot release a bike from an empty station');
  } else {
    var bike = this._rack.pop()
    return bike
  }
};

DockingStation.prototype.dock = function(bike) {
  if(this._rack.length === this._defaultCapacity) {
    throw new Error('cannot dock a bike to a full station');
  } else {
    this._rack.push(bike);
    return bike;
  }
};
