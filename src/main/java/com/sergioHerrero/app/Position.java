package com.sergioHerrero.app;

import java.util.List;

class Position {
  private static final int gridSize = 5;

  public Coordinates coordinates = new Coordinates();
  public int rotation = 0;

  public static void updatePositionFromCommands(Position lastPosition, List<Command> commands) {
    for (int i = 0; i < commands.size(); i++) {
      Command currentCommand = commands.get(i);

      if (currentCommand.action.equals("POSITION")) {
        lastPosition.coordinates = currentCommand.coordinates;
      }

      lastPosition.handleRotation(currentCommand);

      if (currentCommand.action.equals("WAIT")) {} // Here I would implement a delay.

      lastPosition.move(currentCommand.action, currentCommand.value);
    }

    // If the final position is outside of the grid's boundaries, bring respective coordinate to the closest one inside of the grid
    lastPosition.bringIntoGridBoundaries();
  }

  private void handleRotation(Command currentCommand) {

    if (currentCommand.action.equals("TURNAROUND")) this.turnAround();

    else if (currentCommand.facingDirection != null) {
      // Get the rotation degrees of the facing direction, e.g. "EAST" = 90°
      this.rotation = Command.facingDirectionOptions.valueOf(currentCommand.facingDirection).rotationValue;

    } else if (currentCommand.action.equals("RIGHT")) this.increaseRotation();

    else if (currentCommand.action.equals("LEFT")) this.decreaseRotation();
  }

  private void increaseRotation() {
    int newAmount = this.rotation + 90;

    // If we are adding degrees, the next available amount of degrees of rotation after 270 should be 0
    if (newAmount > 270) this.rotation = 0;
    else this.rotation = newAmount;
  }

  private void decreaseRotation() {
    int newAmount = this.rotation - 90;

    // If we are subtracting degrees, the next available amount of degrees of rotation after 0 should be 270
    if (newAmount < 0) this.rotation = 270;
    else this.rotation = newAmount;
  }

  private void move(String action, int amount) {
    switch (action) {
      case "FORWARD": this.moveStraight(amount); return;
      case "BACKWARDS": this.moveStraight(-amount); return;
      default: return;
    }
  }

  private void turnAround() {
    switch (this.rotation) {
      case 0: this.rotation = 180; return;
      case 90: this.rotation = 270; return;
      case 180: this.rotation = 0; return;
      case 270: this.rotation = 90; return;
    }
  }

  private void moveStraight(int amount) {
    switch (this.rotation) {

      // If the robot is facing up, we move it up on the grid
      case 0: this.coordinates.y = this.coordinates.y - amount; return;

      // If the robot is facing right, we move it up right on the grid
      case 90: this.coordinates.x = this.coordinates.x + amount; return;

      // If the robot is facing down, we move it down on the grid
      case 180: this.coordinates.y = this.coordinates.y + amount; return;

      // If the robot is facing left, we move it left on the grid
      case 270: this.coordinates.x = this.coordinates.x - amount; return;
    }
  }

  private void bringIntoGridBoundaries() {
    if (this.coordinates.x > Position.gridSize) this.coordinates.x = Position.gridSize;
    if (this.coordinates.x < 1) this.coordinates.x = 1;

    if (this.coordinates.y > Position.gridSize) this.coordinates.y = Position.gridSize;
    if (this.coordinates.y < 1) this.coordinates.y = 1;
  }

  @Override
  public String toString() {
    return "Position { " +
      "coordinates = " + coordinates.toString() +
      ", rotation = " + rotation +
      " }";
  }
}
