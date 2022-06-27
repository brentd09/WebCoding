class vehicle {
  constructor (
    color,
    doors,
    engineType
  ){
    this.color = color;
    this.doors = doors;
    this.engineType = engineType;
  }
  paintCar (newColor) {
    this.color = newColor;
  }
}

export default vehicle
