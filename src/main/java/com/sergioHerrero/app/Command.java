package com.sergioHerrero.app;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Command {
  public String action;
  public Coordinates coordinates;
  public int value;

  public Command(String command) {
    List<String> items = new ArrayList(Arrays.asList(command.split("\\+| ")));

    this.action = items.get(0);

    if (this.action.equals("POSITION")) {

      this.coordinates = new Coordinates(items.get(1), items.get(2));
      this.value = 1;

    } else if (items.size() > 1) {
      this.value = Integer.parseInt(items.get(1));

    } else {
      this.value = 1;
    }
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
        " }";
  }
}