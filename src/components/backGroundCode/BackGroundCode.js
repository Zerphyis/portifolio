import { useEffect, useState } from "react";
import "./BackGroundCode.css";

export default function BackGroundCode() {
  const codeSnippets = [
    `// Node.js Express Server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/data', async (req, res) => {
  try {
    const data = await fetchData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});`,

    `# Python FastAPI
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uvicorn

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float

@app.post("/items/")
async def create_item(item: Item):
    return {"id": 1, **item.dict()}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)`,

    `// Java Spring Boot Controller
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(user);
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }
}`,

    `// Go HTTP Server
package main

import (
    "encoding/json"
    "log"
    "net/http"
)

type Response struct {
    Message string \`json:"message"\`
}

func handler(w http.ResponseWriter, r *http.Request) {
    response := Response{Message: "Hello, World!"}
    
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(response)
}

func main() {
    http.HandleFunc("/api/hello", handler)
    log.Println("Server starting on port 8080...")
    log.Fatal(http.ListenAndServe(":8080", nil))
}`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <pre id="code-background" className="background-code">
      {codeSnippets[currentIndex]}
    </pre>
  );
}
