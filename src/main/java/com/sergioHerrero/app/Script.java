package com.sergioHerrero.app;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Script {
  public static List<Command> scriptToCommands(String script) {

    script = removeEndIfItMatches(script, "=");

    // Split string on every new lines
    List<String> commands = new ArrayList(Arrays.asList(script.split("%0A\\+\\+|%0A")));

    // Remove empty strings from the list
    commands.removeAll(Arrays.asList("", null));

    commands = removeComments(commands);

    List<Command> formattedCommands = new ArrayList();

    for (int i = 0; i < commands.size(); i++) {
      // Create a Command for every line of the original script
      formattedCommands.add(new Command(commands.get(i)));
    }

    //  Just to log while WIP
		System.out.println();
		System.out.println("BUILT COMMANDS: ");
		for (int i = 0; i < formattedCommands.size(); i++) {
			System.out.println();
			System.out.println(formattedCommands.get(i).toString());
		}

    return formattedCommands;
  }

  private static String removeEndIfItMatches(String baseString, String stringToMatch) {
    if (baseString.endsWith(stringToMatch)) {
      return baseString.substring(0, baseString.length() - 1);
    }
    return baseString;
  }

  private static List<String> removeComments(List<String> commands) {

    List<String> formattedCommands = new ArrayList();


    for (int i = 0; i < commands.size(); i++) {

      // Returns index of a double slash in the command string, which is rhe beginning of a comment
      double indexOfComment = commands.get(i).indexOf("%2F%2F");

      String formatted = commands.get(i);

      // If a commend was found in the string, remove it
      if ((indexOfComment > 0.0)) {
        formatted = commands.get(i).substring(0, (int) indexOfComment);
      }

      formatted = removeEndIfItMatches(formatted, "+");

      formattedCommands.add(formatted);
    }

    return formattedCommands;
  }
}
