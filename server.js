// server.js
const MAP_DATA = [
  // Map Dimensions: 63 Columns x 47 Rows
  // Row 0: Top Wall
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  // Rows 1-11: Top Section (Conference Room Left, Breakroom Right)
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,3,3,0,0,0,0,3,3,0,0,0,0,0,0,1,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,3,3,0,0,0,0,3,3,0,0,0,0,0,0,1,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,2,2,2,2,2,2,3,3,3,3,3,3,3,3,2,2,2,2,2,1,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,1,0,0,0,0,3,3,0,0,0,0,3,3,0,0,0,0,0,0,1,1],
  [1,2,2,2,2,2,2,3,3,3,3,3,3,3,3,2,2,2,2,2,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,3,3,0,0,0,0,3,3,0,0,0,0,0,0,1,1],
  [1,2,2,2,2,2,2,3,3,3,3,3,3,3,3,2,2,2,2,2,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,2,2,2,2,2,2,3,3,3,3,3,3,3,3,2,2,2,2,2,1,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,1,0,0,0,0,3,3,0,0,0,0,3,3,0,0,0,0,0,0,1,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,3,3,0,0,0,0,3,3,0,0,0,0,0,0,1,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
  // Rows 12-38: The "Bullpen" (Open plan desks)
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,1,1],
  [1,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,1,1],
  [1,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,1,1],
  [1,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,1,1],
  [1,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,1,1],
  [1,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,1,1],
  [1,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,1,1],
  [1,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,1,1],
  // Rows 39-46: Lobby/Reception Area (Bottom)
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,2,2,2,2,2,2,2,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,2,2,2,2,2,2,2,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
const NON_WALKABLE_TILES = [1,3];
const TILE_SIZE = 32; // Standard tile size
const TILE_SET = {
    0: '#f9f9f9',       // 💡 Walkable Floor (Light Gray/Off-White)
    1: '#4a4a4a',       // 🧱 Impassable Wall (Dark Solid Gray)
    2: '#c9e1ff',       // 🛋️ Feature Tile (Light Blue Carpet)
    3: '#cc3333'        // 🚫 Non-walkable Furniture Placeholder (Red)
};
const SAFE_SPAWN_X = 580; // X coordinate on a walkable tile
const SAFE_SPAWN_Y = 180; // Y coordinate on a walkable tile
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// 1. Setup Server
const app = express();
const server = http.createServer(app);
const io = socketIo(server); // Initialize Socket.io on the server

const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Global object to track all connected players' state
const players = {}; 

// 2. Socket.io Connection Handler
io.on('connection', (socket) => {
    console.log(`[CONNECT] User connected: ${socket.id}`);

    // Generate initial state for the new player
    players[socket.id] = {
    x: SAFE_SPAWN_X, // FIX: Use the safe spawn point
    y: SAFE_SPAWN_Y, // FIX: Use the safe spawn point
    color: getRandomColor(),
    playerId: socket.id,
    zoneId: null,
    };

    // A. Send the *new* player their current data and the existing players' data
    socket.emit('currentPlayers', players);

    // B. Broadcast the *new* player's data to everyone else
    socket.broadcast.emit('newPlayer', players[socket.id]);
    
    // 3. Handle Movement Input from Client
    socket.on('playerMovement', (movementData) => {
        if (players[socket.id]) {
            // Update the authoritative position on the server
            const newX = movementData.x;
            const newY = movementData.y;
            // --- AUTHORITATIVE VALIDATION ---
            if (checkServerCollision(newX, newY)) {
                // If the client attempted an illegal move (walking into a wall), 
                // the server sends the player back to their last known valid position.
                socket.emit('serverStateSync', { 
                    x: players[socket.id].x, 
                    y: players[socket.id].y 
                });
                console.warn(`Cheating detected: ${socket.id} attempted illegal move.`);
                return; 
            }

            // Update the authoritative position on the server
            players[socket.id].x = newX;
            players[socket.id].y = newY;
            // Broadcast the updated position to ALL clients
            socket.broadcast.emit('playerMoved', players[socket.id]);
        }
    });
    // NEW: Handle incoming chat messages
    socket.on('sendMessage', (message) => {
        // Look up the player's name/details for the sender
        const senderId = socket.id;
        const senderName = senderId.substring(0, 5); // Use short ID as a name

        // Broadcast the complete message object to ALL clients
        io.emit('newMessage', {
            id: senderId,
            name: senderName,
            text: message,
            timestamp: new Date().toLocaleTimeString()
        });
    });
    socket.on('zoneUpdate', (zoneId) => {
        if (players[socket.id]) {
            players[socket.id].zoneId = zoneId;

            // Broadcast this change so clients can decide RTC connections
            socket.broadcast.emit('playerZoneChanged', {
                playerId: socket.id,
                zoneId: zoneId
            });
        }
    });
    // When a client sends a WebRTC offer, relay it to the target peer
    socket.on('rtc-offer', (data) => {
        socket.to(data.targetId).emit('rtc-offer', {
            senderId: socket.id,
            offer: data.offer
        });
    });

    // When a client sends a WebRTC answer, relay it back to the initiator
    socket.on('rtc-answer', (data) => {
        socket.to(data.targetId).emit('rtc-answer', {
            senderId: socket.id,
            answer: data.answer
        });
    });

    // Relay ICE candidates (network information) between peers
    socket.on('ice-candidate', (data) => {
        socket.to(data.targetId).emit('ice-candidate', {
            senderId: socket.id,
            candidate: data.candidate
        });
    });
    // 4. Handle Disconnection
    socket.on('disconnect', () => {
        console.log(`[DISCONNECT] User disconnected: ${socket.id}`);
        // Remove player from global tracking object
        delete players[socket.id];
        // Tell everyone to remove this player's sprite
        io.emit('playerDisconnected', socket.id);
    });
    
});

// Helper function to generate a unique color for the player
function getRandomColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}
// --- COLLISION HELPER FUNCTIONS ---

function getTileAtWorldCoords(x, y) {
    const col = Math.floor(x / TILE_SIZE);
    const row = Math.floor(y / TILE_SIZE);
    
    // Check if within map bounds
    if (row >= 0 && row < MAP_DATA.length && 
        col >= 0 && col < MAP_DATA[0].length) {
        return MAP_DATA[row][col];
    }
    // Treat outside map as non-walkable
    return 1; 
}
/**
 * Checks if the given world coordinates (x, y) lead into a non-walkable tile.
 * It checks the four corners of a standard 32x32 player box.
 * @param {number} x - Player's proposed World X
 * @param {number} y - Player's proposed World Y
 * @returns {boolean} - True if collision detected.
 */
function checkServerCollision(x, y) {
    const playerW = 32;
    const playerH = 32;

    // Check four key corners of the player's bounding box
    const corners = [
        { x: x + 1, y: y + 1 },              // Top-Left
        { x: x + playerW - 1, y: y + 1 },    // Top-Right
        { x: x + 1, y: y + playerH - 1 },    // Bottom-Left
        { x: x + playerW - 1, y: y + playerH - 1 } // Bottom-Right
    ];

    for (const corner of corners) {
        const tileId = getTileAtWorldCoords(corner.x, corner.y);
        if (NON_WALKABLE_TILES.includes(tileId)) {
            return true; // Collision detected
        }
    }
    return false; // No collision
}
// 5. Start the Server
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
