package com.sergioHerrero.app;

class Coordinates {
  public int x = 1;
  public int y = 1;

  public Coordinates() {}

  public Coordinates(String xValue, String yValue) {
    this.x = Integer.parseInt(xValue);
    this.y = Integer.parseInt(yValue);
  }

  @Override
  public String toString() {
    return "Coordinates { " +
      "x = " + x +
      ", y = " + y +
      " }";
  }
}
