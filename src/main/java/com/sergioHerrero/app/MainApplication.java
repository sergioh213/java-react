package com.sergioHerrero.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

class Coordinates {
	public int x = 1;
	public int y = 2;
}

@SpringBootApplication
@RestController
public class MainApplication {

	public static void main(String[] args) {
		SpringApplication.run(MainApplication.class, args);
	}

	@GetMapping("/api/coordinates")
	public Coordinates readCoordinates() {
		Coordinates defaultCoordinates= new Coordinates();
		return defaultCoordinates;
	}

//	@PostMapping(path = "/pets", consumes = "application/json")
//	public void executeCommand(@RequestBody Command command) {
//		// ...
//	}

}
