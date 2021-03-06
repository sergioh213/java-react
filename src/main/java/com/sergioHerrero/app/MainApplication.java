package com.sergioHerrero.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.GenericSignatureFormatError;
import java.util.List;

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

	private Position resolveNewPosition(String script) {
		try {
			List<Command> commands = Script.scriptToCommands(script);

			Position.updatePositionFromCommands(this.position, commands);

			return this.position;
		} catch (Exception e) {
			return this.position;
		}
	}
}
