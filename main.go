package main

import (
	"log"
	"os"
	"os/exec"

	"github.com/creack/pty"
	"github.com/gliderlabs/ssh"
)

func main() {
	ssh.Handle(func(s ssh.Session) {
		cmd := exec.Command("npm", "start")
		cmd.Dir = "./terminalfolio"
		cmd.Env = append(os.Environ(), "TERM=xterm-256color")

		// Start the command with a PTY
		ptmx, err := pty.Start(cmd)
		if err != nil {
			log.Printf("❌ PTY start failed: %v\n", err)
			return
		}
		defer func() { _ = ptmx.Close() }()

		// Pipe SSH in/out through PTY
		go func() { _, _ = io.Copy(ptmx, s) }()
		_, _ = io.Copy(s, ptmx)
	})

	log.Println("🚀 SSH Terminalfolio with PTY running on port 2222...")
	if err := ssh.ListenAndServe("0.0.0.0:2222", nil); err != nil {
		log.Fatalf("❌ SSH server failed: %v\n", err)
	}
}
