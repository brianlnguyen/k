let password = game.askForString("What is your password?", 5)
if (password == "brian") {
    game.splash("Login successful, Press A")
} else {
    game.splash("Login failed")
    game.reset()
}
