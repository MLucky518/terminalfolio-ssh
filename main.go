package main

import (
	"log"
	"os"
	"os/exec"

	"github.com/gliderlabs/ssh"
)

func main() {
	// SSH handler runs npm start in terminalfolio/
	ssh.Handle(func(s ssh.Session) {
		cmd := exec.Command("npm", "start")
		cmd.Dir = "./terminalfolio" // Adjust if needed
		cmd.Env = append(os.Environ(), "TERM=xterm-256color")
		cmd.Stdin = s
		cmd.Stdout = s
		cmd.Stderr = s

		if err := cmd.Run(); err != nil {
			log.Printf("❌ Failed to run npm start: %v\n", err)
		}
	})

	log.Println("🚀 SSH Terminalfolio server running on port 2222...")
	if err := ssh.ListenAndServe("0.0.0.0:2222", nil); err != nil {
		log.Fatalf("❌ SSH server failed to start: %v\n", err)
	}
}
