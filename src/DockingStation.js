function DockingStation () {
  this.rack = [];
  this.defaultCapacity = 20;
};

DockingStation.prototype.bikes = function() {
  return this.rack;
};

DockingStation.prototype.capacity = function () {
  return this.defaultCapacity;
};

DockingStation.prototype.release = function() {
  if(this.rack.length === 0) {
    throw new Error('cannot release a bike from an empty station');
  };
};

DockingStation.prototype.dock = function(bike) {
  if(this.rack.length === this.defaultCapacity) {
    throw new Error('cannot dock a bike to a full station');
  } else {
    this.rack.push(bike);
  }
};
