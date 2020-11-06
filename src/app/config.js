
let APIBase;
let socketIOEndpoint;

if (process.env.deployment === 'production') {
    APIBase = 'https://josh-server-vlu5i.ondigitalocean.app/api/';
    socketIOEndpoint = 'https://josh-server-vlu5i.ondigitalocean.app';
} else {
    APIBase = 'http://localhost:3000/api/';
    socketIOEndpoint = 'http://localhost:3000';
}

export {
    APIBase,
    socketIOEndpoint
};