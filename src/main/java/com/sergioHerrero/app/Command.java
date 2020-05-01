package com.sergioHerrero.app;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Command {
  public String action;
  public Coordinates coordinates;
  public int value = 1;
  public String facingDirection;

  public enum facingDirectionOptions {
    EAST(90),
    WEST(270),
    NORTH(0),
    SOUTH(180);

    public final int rotationValue;

    facingDirectionOptions(int num) {
      this.rotationValue = num;
    }
  }

  public Command(String command) {
    List<String> items = new ArrayList(Arrays.asList(command.split("\\+| ")));

    this.action = items.get(0);

    if (this.action.equals("POSITION")) {

      this.coordinates = new Coordinates(items.get(1), items.get(2));

    } else if (items.size() > 1) {
      this.value = Integer.parseInt(items.get(1));
    }

    // Checks if the item is one of the four possible facing options, and sets it as such
    for (int i = 0; i < items.size(); i++) {
      if (isStringPartOfFacingDirectionOptions(items.get(i))) {
        this.facingDirection = items.get(i);
        break;
      }
    }
  }

  private static boolean isStringPartOfFacingDirectionOptions(String test) {
    for (facingDirectionOptions c : facingDirectionOptions.values()) {
      if (c.name().equals(test)) {
        return true;
      }
    }
    return false;
  }

  @Override
  public String toString() {
    String printableString = "Command { " +
      "action = '" + action + '\'';

    if (coordinates != null) {
      printableString = printableString + ", coordinates = " + coordinates.toString();
    } else {
      printableString = printableString + ", coordinates = null";
    }

    return printableString + ", value = " + value +
      ", facingDirection = " + facingDirection +
      " }";
  }
}