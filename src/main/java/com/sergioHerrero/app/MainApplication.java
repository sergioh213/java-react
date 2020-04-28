package com.sergioHerrero.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

class Command {
	public String action;
	public Coordinates coordinates;
	public int value;
}

class Coordinates {
	public int x = 1;
	public int y = 2;
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

	@PostMapping(path = "/api/commands", consumes = "application/json")
	public Position postCommands(@RequestBody ArrayList<Command> commands) {
		return this.position;
	}

}
