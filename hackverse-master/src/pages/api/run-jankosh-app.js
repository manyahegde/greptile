import { exec } from 'child_process';

export default function handler(req, res) {
  // Adjust the path to where your Python app.py is located
  exec('python3 ../Jnankosh-main/app.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ message: 'Error running app.py' });
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return res.status(500).json({ message: 'Error running app.py', stderr });
    }
    console.log(`Stdout: ${stdout}`);
    res.status(200).json({ message: 'app.py executed successfully' });
  });
}
