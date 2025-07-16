package main

import (
	"io"
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

		// Start in a new PTY
		ptmx, err := pty.Start(cmd)
		if err != nil {
			log.Printf("❌ PTY start failed: %v\n", err)
			return
		}
		defer func() {
			_ = ptmx.Close()
			_ = cmd.Process.Kill() // Ensure cleanup on exit
		}()

		// Sync data between SSH and PTY
		go io.Copy(ptmx, s)
		io.Copy(s, ptmx)
	})

	log.Println("🚀 Terminalfolio SSH server on port 2222")
	if err := ssh.ListenAndServe("0.0.0.0:2222", nil, ssh.Terminal); err != nil {
		log.Fatalf("❌ Failed to start SSH: %v", err)
	}
}
