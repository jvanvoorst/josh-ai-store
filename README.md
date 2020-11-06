Simple Grocery cart app built using websockets for real-time updates to cart on any connected client

running here: https://josh-server-vlu5i.ondigitalocean.app/

# Getting Started

To run in a local environment clone from here: https://github.com/jvanvoorst/josh-server

# Development notes

- The backend "database" is just an in memory variable for the cart

- The app uses socket.io for sending cart updates to all connected clients but since there is no login or session all clients will see the one cart.

- Tested and working on Chrome, mobile Chrome and Safari. FireFox is not working currently probably due to differences in cors implementation