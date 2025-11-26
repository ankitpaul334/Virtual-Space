/**
 * CONFIGURATION
 */
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
const RTC_CONFIG = {
    'iceServers': [
        { 'urls': 'stun:stun.l.google.com:19302' } // Google's Public STUN Server
    ]
};
// Global object to manage all active peer connections { peerId: RTCPeerConnection }
const rtcConnections = {}; 
let localStream = null; // Holds the microphone stream
// Find the debug element and update it to show status
const statusEl = document.createElement('div');
statusEl.id = 'status-debug';
statusEl.style = 'position: absolute; bottom: 10px; left: 10px; color: white;';
document.body.appendChild(statusEl);

const PROXIMITY_RADIUS = 128; // 128 pixels is 4 tiles wide (32px * 4)
const socket = io(); // 1. Connect to the server
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const debugEl = document.getElementById('coord-debug');

const MAP_ZONES = [
    // Move existing rooms to the top-left area of the new world
    { id: 1, x: 50, y: 50, w: 200, h: 200, color: 'rgba(230, 126, 34, 0.2)', name: 'Private Room 1' },
    // Add a new far-away zone
    { id: 3, x: 1500, y: 1000, w: 300, h: 300, color: 'rgba(46, 204, 113, 0.2)', name: 'Remote Zone' } 
];

let currentZoneId = null; // Tracks the zone the local player is currently in
let followState = {
    isFollowing: false,
    targetId: null
};
const WORLD_WIDTH = 2000;  // Define a world 2000 pixels wide
const WORLD_HEIGHT = 1500; // Define a world 1500 pixels tall
const TILE_SIZE = 32; // Standard tile size
const TILE_SET = {
    0: '#f9f9f9',       // Hallway (Light)
    1: '#4a4a4a',       // Impassable Wall
    2: '#c0d6ff',       // 🛋️ Feature Tile (Slightly darker blue carpet)
    3: '#cc3333',       // Non-walkable Furniture Placeholder
    4: '#e7a049'        // Door Tile
};
// Camera state variables
let cameraX = 0;
let cameraY = 0;

canvas.width = 800;
canvas.height = 600;

// 2. Receiving Messages
socket.on('newMessage', (data) => {
    const isLocal = data.id === socket.id;
    
    // Create new message element
    const item = document.createElement('div');
    item.textContent = `[${data.timestamp}] ${isLocal ? 'You' : data.name}: ${data.text}`;
    
    // Apply basic styling for local/remote messages
    item.style.fontWeight = isLocal ? 'bold' : 'normal';
    item.style.color = isLocal ? '#4CAF50' : 'white'; // Green for self, white for others

    messagesDiv.appendChild(item);
    
    // Auto-scroll to the bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
// Game State
let localPlayer = null;   // The user (You)
const peers = {};         // List of other players { socketId: PlayerObject }

// Inputs
const keys = {};

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

window.addEventListener('keydown', (e) => { 
    if (keys.hasOwnProperty(e.key) || keys.hasOwnProperty(e.key.toLowerCase())) {
        keys[e.key] = true;
    }
    
    // NEW: Handle Follow Key Press
    if (e.key.toLowerCase() === 'f') {
        e.preventDefault(); // Prevent accidental browser action
        if (followState.isFollowing) {
            // Stop following immediately
            unfollow();
        } else {
            // Initiate follow mode
            attemptFollow();
        }
    }
});
window.addEventListener('keyup', (e) => { keys[e.key] = false; });

/**
 * CLASSES
 */
class Player {
    constructor(x, y, color, id) {
        this.x = x;
        this.y = y;
        this.w = 32;
        this.h = 32;
        this.color = color;
        this.id = id;
        this.speed = 200; // Pixels per second
    }
    
    // Update physics (Only used for Local Player)
    // public/game.js (REPLACE Player.update() ENTIRELY)
    // public/game.js (REPLACE Player.update() ENTIRELY)

    update(deltaTime) {
        let dx = 0;
        let dy = 0;
        let movingByInput = false;
        let positionChanged = false;
        const oldX = this.x;
        const oldY = this.y;

        // --- A. FOLLOW MODE LOGIC (Overrides Input) ---
        if (followState.isFollowing && followState.targetId) {
            const targetPeer = peers[followState.targetId];

            if (targetPeer) {
                // Calculate a trailing offset position (e.g., 40px below the target)
                const targetX = targetPeer.x;
                const targetY = targetPeer.y + this.h + 8; 

                // Use a simple smooth interpolation (lerping) for visual effect
                this.x += (targetX - this.x) * 5 * deltaTime; // 5 is the 'snappiness' factor
                this.y += (targetY - this.y) * 5 * deltaTime;
                positionChanged = true;
            } else {
                // Target disconnected while following
                unfollow(); 
            }

        } 
        // --- B. KEYBOARD INPUT LOGIC (Only runs if not following) ---
        else {
            // Check for movement key presses
            if (keys['ArrowLeft'] || keys['a']) { dx = -1; movingByInput = true; }
            if (keys['ArrowRight'] || keys['d']) { dx = 1; movingByInput = true; }
            if (keys['ArrowUp'] || keys['w']) { dy = -1; movingByInput = true; }
            if (keys['ArrowDown'] || keys['s']) { dy = 1; movingByInput = true; }

            // If any movement key is pressed, break the follow mode immediately
            if (movingByInput && followState.isFollowing) {
                unfollow();
                return; // Exit update cycle after unfollowing
            }
            
            // --- Apply standard movement and collision (Same as Phase 7) ---
            if (movingByInput) {
                // Normalize diagonal movement, etc. (Previous logic)
                if (dx !== 0 && dy !== 0) {
                    const factor = 1 / Math.sqrt(2); dx *= factor; dy *= factor;
                }
                const potentialX = dx * this.speed * deltaTime;
                const potentialY = dy * this.speed * deltaTime;

                // 2. Collision Check (X-Axis)
                // Check the two corners on the leading edge (left or right)
                const checkX = this.x + potentialX + (potentialX > 0 ? this.w : 0); // Leading edge X position
                const checkYTop = this.y + 1; // 1 pixel down from top edge
                const checkYBottom = this.y + this.h - 1; // 1 pixel up from bottom edge

                const tileXTop = getTileAtWorldCoords(checkX, checkYTop);
                const tileXBottom = getTileAtWorldCoords(checkX, checkYBottom);

                let collidedX = NON_WALKABLE_TILES.includes(tileXTop) || NON_WALKABLE_TILES.includes(tileXBottom);

                // Apply movement if no collision
                if (!collidedX) {
                    this.x += potentialX;
                }
                // 3. Collision Check (Y-Axis)
                // Check the two corners on the leading edge (top or bottom)
                const checkY = this.y + potentialY + (potentialY > 0 ? this.h : 0); // Leading edge Y position
                const checkXLeft = this.x + 1; // 1 pixel right from left edge
                const checkXRight = this.x + this.w - 1; // 1 pixel left from right edge

                const tileYLeft = getTileAtWorldCoords(checkXLeft, checkY);
                const tileYRight = getTileAtWorldCoords(checkXRight, checkY);

                let collidedY = NON_WALKABLE_TILES.includes(tileYLeft) || NON_WALKABLE_TILES.includes(tileYRight);

                // Apply movement if no collision
                if (!collidedY) {
                    this.y += potentialY;
                }
                
                positionChanged = true;
            }
        }
        // 4. Boundary Clamping (Now using WORLD_WIDTH and WORLD_HEIGHT)
        this.x = Math.max(0, Math.min(WORLD_WIDTH - this.w, this.x));
        this.y = Math.max(0, Math.min(WORLD_HEIGHT - this.h, this.y));

        // 4. Emit Movement (If position changed either by input or following)
        if (positionChanged || this.x !== oldX || this.y !== oldY) {
            socket.emit('playerMovement', { x: this.x, y: this.y });
        }
    }

    draw(ctx) {
        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillRect(this.x + 4, this.y + 4, this.w, this.h);
        
        // Body
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);

        // Eyes (Visual direction helper)
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x + 6, this.y + 8, 8, 8);
        ctx.fillRect(this.x + 18, this.y + 8, 8, 8);
        
        // Nametag (Socket ID) - Useful for debugging
        ctx.fillStyle = 'white';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(this.id.substring(0, 5), this.x + 16, this.y - 5);

        // 4. PROXIMITY HALO (If this player is in the local player's interaction range)
        if (this.inProximity) {
            ctx.strokeStyle = '#3498db'; // Blue glow
            ctx.lineWidth = 4;
            ctx.shadowColor = '#3498db';
            ctx.shadowBlur = 15;
            
            ctx.beginPath();
            ctx.arc(this.x + this.w / 2, this.y + this.h / 2, this.w / 2 + 10, 0, Math.PI * 2);
            ctx.stroke();

            // Reset shadow/blur for the rest of the canvas drawing
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
        }
    }
}

/**
 * SOCKET EVENT LISTENERS
 * This is where the magic happens
 */

// A. Initial Load: Server sends everyone currently in the room
socket.on('currentPlayers', (playersData) => {
    Object.keys(playersData).forEach((id) => {
        if (id === socket.id) {
            // Create our Local Player
            localPlayer = new Player(playersData[id].x, playersData[id].y, playersData[id].color, id);
            currentZoneId = playersData[id].zoneId;
        } else {
            // Create a Peer Player
            peers[id] = new Player(playersData[id].x, playersData[id].y, playersData[id].color, id);
            peers[id].zoneId = playersData[id].zoneId;
        }
    });
});
// NEW: Player Zone Changed (Received from server)
socket.on('playerZoneChanged', (data) => {
    if (peers[data.playerId]) {
        peers[data.playerId].zoneId = data.zoneId;
        // Logic will be handled in the next gameLoop frame via RTC management
    }
})
// B. New Player Joined: Add them to peers
socket.on('newPlayer', (playerInfo) => {
    peers[playerInfo.playerId] = new Player(playerInfo.x, playerInfo.y, playerInfo.color, playerInfo.playerId);
});

// C. Player Disconnect: Remove them
socket.on('playerDisconnected', (id) => {
    console.log(`[DISCONNECT] Peer ${id} disconnected.`);
    
    // Check if the disconnected peer was the target
    if (followState.isFollowing && followState.targetId === id) {
        unfollow();
    }
    delete peers[id];
});

// D. Player Moved: Update their position
socket.on('playerMoved', (playerInfo) => {
    if (peers[playerInfo.playerId]) {
        peers[playerInfo.playerId].x = playerInfo.x;
        peers[playerInfo.playerId].y = playerInfo.y;
    }
});

// New: Handle receiving an Offer from a peer (We are the answerer)
socket.on('rtc-offer', async (data) => {
    // 1. Create connection and set remote description
    await createPeerConnection(data.senderId, false);
    const pc = rtcConnections[data.senderId];
    await pc.setRemoteDescription(new RTCSessionDescription(data.offer));

    // 2. Create and send Answer
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    socket.emit('rtc-answer', { targetId: data.senderId, answer: pc.localDescription });
});

// New: Handle receiving an Answer from a peer (We are the initiator)
socket.on('rtc-answer', async (data) => {
    const pc = rtcConnections[data.senderId];
    await pc.setRemoteDescription(new RTCSessionDescription(data.answer));
});

// New: Handle receiving ICE candidates
socket.on('ice-candidate', async (data) => {
    const pc = rtcConnections[data.senderId];
    const candidate = new RTCIceCandidate(data.candidate);
    await pc.addIceCandidate(candidate).catch(e => console.error('Error adding received ICE candidate:', e));
});
// NEW: Server Correction/Snapback Handler
socket.on('serverStateSync', (data) => {
    if (localPlayer) {
        console.warn('Server Correction: Position reset.');
        localPlayer.x = data.x;
        localPlayer.y = data.y;
        // Optionally break follow mode if being snapped back
        if (followState.isFollowing) unfollow(); 
    }
});
/**
 * GAME LOOP
 */
let lastTime = 0;

function gameLoop(timestamp) {
    const deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // --- NEW: CAMERA CALCULATION (If we have a local player) ---
    if (localPlayer) {
        localPlayer.update(deltaTime);
        // Center the camera on the player
        cameraX = localPlayer.x - canvas.width / 2 + localPlayer.w / 2;
        cameraY = localPlayer.y - canvas.height / 2 + localPlayer.h / 2;

        // Clamp the camera to the world boundaries
        cameraX = Math.max(0, Math.min(cameraX, WORLD_WIDTH - canvas.width));
        cameraY = Math.max(0, Math.min(cameraY, WORLD_HEIGHT - canvas.height));
    

        ctx.save();
        ctx.translate(-cameraX, -cameraY); 
        
        // --- DRAWING PHASE: Everything is drawn using World Coordinates ---
        drawTileMap(MAP_DATA, TILE_SET, cameraX, cameraY, canvas.width, canvas.height);

        // NEW: Draw Zones
        MAP_ZONES.forEach(zone => {
            ctx.fillStyle = zone.color;
            ctx.fillRect(zone.x, zone.y, zone.w, zone.h);
            
            ctx.fillStyle = 'white';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(zone.name, zone.x + zone.w / 2, zone.y + zone.h / 2);
        });
        // Draw Peers
        Object.values(peers).forEach(peer => {
            peer.draw(ctx);
        });
        localPlayer.draw(ctx);
        ctx.restore();
        debugEl.innerText = `World: ${Math.round(localPlayer.x)}, ${Math.round(localPlayer.y)} | Cam: ${Math.round(cameraX)}, ${Math.round(cameraY)}`;
    }
    requestAnimationFrame(gameLoop);
}

// --- WebRTC Core Functions ---
// 1. Get the local microphone stream
async function initLocalStream() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        statusEl.innerText = 'Status: Microphone Ready';
        console.log('Local audio stream initialized.');
    } catch (err) {
        statusEl.innerText = `Status: Mic Error (${err.name})`;
        console.error('Error accessing media devices:', err);
    }
}

// 2. Create and configure a new RTCPeerConnection
async function createPeerConnection(peerId, isInitiator) {
    if (rtcConnections[peerId]) return; // Already connected or pending

    console.log(`Establishing connection with ${peerId}... Initiator: ${isInitiator}`);
    
    // Create new peer connection
    const pc = new RTCPeerConnection(RTC_CONFIG);
    rtcConnections[peerId] = pc;

    // Attach local audio track to the connection
    if (localStream) {
        localStream.getTracks().forEach(track => pc.addTrack(track, localStream));
    }

    // Handle receiving ICE candidates (network info) from the browser
    pc.onicecandidate = (event) => {
        if (event.candidate) {
            socket.emit('ice-candidate', {
                targetId: peerId,
                candidate: event.candidate
            });
        }
    };

    // Handle receiving remote audio stream
    pc.ontrack = (event) => {
        console.log('Received remote track.');
        const audioEl = document.createElement('audio');
        audioEl.autoplay = true;
        audioEl.srcObject = event.streams[0];
        audioEl.id = `audio-${peerId}`;
        // Append the audio element to the body (it will play silently)
        document.body.appendChild(audioEl);
    };

    // Handle connection state changes (useful for debugging)
    pc.onconnectionstatechange = () => {
        console.log(`Connection state with ${peerId}: ${pc.connectionState}`);
    };

    // Begin the negotiation if we are the initiator (the one who noticed proximity first)
    if (isInitiator) {
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        socket.emit('rtc-offer', { targetId: peerId, offer: pc.localDescription });
    }
}

// 3. Close and clean up a connection
function closePeerConnection(peerId) {
    if (!rtcConnections[peerId]) return;

    console.log(`Closing connection with ${peerId}.`);

    rtcConnections[peerId].close();
    delete rtcConnections[peerId];
    
    // Remove audio element
    const audioEl = document.getElementById(`audio-${peerId}`);
    if (audioEl) audioEl.remove();
}

function getSquaredDistance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return dx * dx + dy * dy;
}

// Basic AABB Collision check
function checkCollision(pX, pY, zone) {
    return pX >= zone.x &&         // Right of the zone's left edge
           pX <= zone.x + zone.w && // Left of the zone's right edge
           pY >= zone.y &&         // Below the zone's top edge
           pY <= zone.y + zone.h;  // Above the zone's bottom edge
}

// public/game.js (REPLACE drawGrid)

function drawGrid(worldW, worldH, camX, camY, viewW, viewH) {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    
    // Calculate visible grid boundaries (start/end drawing from the first visible grid line)
    const TILE_SIZE = 32;
    const startX = Math.floor(camX / TILE_SIZE) * TILE_SIZE;
    const endX = Math.min(camX + viewW, worldW);
    const startY = Math.floor(camY / TILE_SIZE) * TILE_SIZE;
    const endY = Math.min(camY + viewH, worldH);

    // Draw vertical lines
    for (let x = startX; x <= endX; x += TILE_SIZE) {
        ctx.beginPath();
        // Clamping Y-axis to the visible area
        ctx.moveTo(x, startY); 
        ctx.lineTo(x, endY);
        ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = startY; y <= endY; y += TILE_SIZE) {
        ctx.beginPath();
        // Clamping X-axis to the visible area
        ctx.moveTo(startX, y); 
        ctx.lineTo(endX, y);
        ctx.stroke();
    }
}
function isColliding(obj1, obj2) {
    return obj1.x < obj2.x + obj2.w &&
           obj1.x + obj1.w > obj2.x &&
           obj1.y < obj2.y + obj2.h &&
           obj1.y + obj1.h > obj2.y;
}
function unfollow() {
    followState.isFollowing = false;
    followState.targetId = null;
    console.log('Follow Mode Deactivated.');
    statusEl.innerText = 'Status: Microphone Ready'; // Reset status
}

function attemptFollow() {
    if (!localPlayer) return;

    let closestPeer = null;
    let closestDistSq = PROXIMITY_RADIUS * PROXIMITY_RADIUS + 1; // Start outside proximity

    // 1. Find the closest peer within the PROXIMITY_RADIUS
    Object.values(peers).forEach(peer => {
        const distSq = getSquaredDistance(localPlayer, peer);
        
        if (distSq <= PROXIMITY_RADIUS * PROXIMITY_RADIUS && distSq < closestDistSq) {
            closestDistSq = distSq;
            closestPeer = peer;
        }
    });
    if (closestPeer) {
        followState.isFollowing = true;
        followState.targetId = closestPeer.id;
        console.log(`Following started: Target ID ${closestPeer.id}`);
        statusEl.innerText = `Status: FOLLOWING ${closestPeer.id.substring(0, 5)}`;
    } else {
        console.log('Cannot follow: No peer in proximity.');
        statusEl.innerText = 'Status: No peer in proximity (Press F near someone)';
    }
}
function getTileAtWorldCoords(x, y) {
    const col = Math.floor(x / TILE_SIZE);
    const row = Math.floor(y / TILE_SIZE);
    
    // Check if within map bounds
    if (row >= 0 && row < MAP_DATA.length && 
        col >= 0 && col < MAP_DATA[0].length) {
        return MAP_DATA[row][col];
    }
    
    // Treat areas outside the defined map as non-walkable boundaries
    return 1; 
}
function drawTileMap(mapData, tileSet, camX, camY, viewW, viewH) {
    const tileRows = mapData.length;
    const tileCols = mapData[0].length;
    
    // 1. Calculate visible tile range
    const startCol = Math.max(0, Math.floor(camX / TILE_SIZE));
    const endCol = Math.min(tileCols, Math.ceil((camX + viewW) / TILE_SIZE));
    const startRow = Math.max(0, Math.floor(camY / TILE_SIZE));
    const endRow = Math.min(tileRows, Math.ceil((camY + viewH) / TILE_SIZE));
    
    // 2. Iterate only over the visible tiles
    for (let r = startRow; r < endRow; r++) {
        for (let c = startCol; c < endCol; c++) {
            const tileId = mapData[r][c];
            const tileColor = tileSet[tileId];

            if (tileColor) {
                const x = c * TILE_SIZE;
                const y = r * TILE_SIZE;
                
                // Check for depth tiles (walls, furniture)
                if (tileId === 1 || tileId === 3) {
                    ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)'; // Dark border for depth
                    ctx.lineWidth = 1;
                    ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
                } else {
                    // Reset shadow for flat floor tiles
                    ctx.shadowColor = 'transparent';
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;
                }
                
                ctx.fillStyle = tileColor;
                ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
            }
        }
    }
}

const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');
const messagesDiv = document.getElementById('messages');

if (chatForm) {
    // 1. Sending Messages
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = messageInput.value.trim();
        
        if (message) {
            // Emit the message to the server
            socket.emit('sendMessage', message);
            messageInput.value = ''; // Clear input field
        }
    });
}
const chatContainer = document.getElementById('chat-container');
const chatToggleButton = document.getElementById('chat-toggle-button');

// Make the chat button functional
if (chatToggleButton) {
    chatToggleButton.addEventListener('click', () => {
        chatContainer.classList.toggle('hidden');
        
        // Optional: Focus the input when chat opens
        if (!chatContainer.classList.contains('hidden')) {
            document.getElementById('message-input').focus();
        }
    });
}
function resizeCanvas() {
    // Set canvas dimensions to the size of the viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Optional: Recalculate camera position immediately to prevent screen jump
    // Camera logic runs in gameLoop, but this helps responsiveness.
}
// Start
requestAnimationFrame(gameLoop);