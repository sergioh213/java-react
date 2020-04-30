package com.sergioHerrero.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

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

class Position {
	public Coordinates coordinates = new Coordinates();
	public int rotation = 0;
}

@SpringBootApplication
@RestController
public class MainApplication {

	public static void main(String[] args) {
		SpringApplication.run(MainApplication.class, args);
	}

	public Position position = new Position();

	@GetMapping("/api/position")
	public Position getPosition() {
		return this.position;
	}

	@PostMapping(path = "/api/script")
	public Position postScript(@RequestBody String script) {
		return resolveNewPosition(script);
	}

	private String removeEndIfItMatches(String baseString, String charToMatch) {
		if (baseString.endsWith(charToMatch)) {
			return baseString.substring(0, baseString.length() - 1);
		}
		return baseString;
	}

	private Position resolveNewPosition(String script) {
		script = removeEndIfItMatches(script, "=");

		List<String> commands = new ArrayList(Arrays.asList(script.split("%0A\\+\\+|%0A")));

		commands.removeAll(Arrays.asList("", null));

		commands = removeComments(commands);

		List<Command> formattedCommands = new ArrayList();
		for (int i = 0; i < commands.size(); i++) {
			formattedCommands.add(new Command(commands.get(i)));
		}

		// Just to log while WIP
//		System.out.println();
//		System.out.println("BUILT COMMANDS: ");
//		for (int i = 0; i < formattedCommands.size(); i++) {
//			System.out.println();
//			System.out.println(formattedCommands.get(i).toString());
//		}

		return this.position;
	}

	private List<String> removeComments(List<String> commands) {
		List<String> formattedCommands = new ArrayList();

		for (int i = 0; i < commands.size(); i++) {
			double indexOfComment = commands.get(i).indexOf("%2F");

			String formatted = commands.get(i);

			if ((indexOfComment < 0.0)) {
				formatted = commands.get(i).substring(0, (int) indexOfComment);
			}

			formatted = removeEndIfItMatches(formatted, "+");

			formattedCommands.add(formatted);
		}

		return formattedCommands;
	}
}
