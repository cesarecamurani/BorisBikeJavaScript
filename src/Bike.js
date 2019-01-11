function  Bike () {
  this.status = "working";
};

Bike.prototype.reportStatus = function(status) {
  if(status === "working") {
    this.status
  } else {
    this.status = "broken"
  }
  return this.status
};
