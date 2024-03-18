// quantum-helpers.js

const { QuantumCircuit, QuantumState } = require('qiskit');

// Function to create a quantum teleportation circuit
function createTeleportationCircuit() {
  const circuit = new QuantumCircuit();
  const qubits = circuit.qalloc(3);

  circuit.h(qubits[1]);
  circuit.cx(qubits[1], qubits[2]);
  circuit.cx(qubits[0], qubits[1]);
  circuit.h(qubits[0]);
  circuit.measure(qubits[0]);
  circuit.measure(qubits[1]);
  circuit.cx(qubits[1], qubits[2]);
  circuit.cz(qubits[0], qubits[2]);

  return circuit;
}

// Function to simulate the execution of a quantum circuit
async function simulateCircuit(circuit) {
  const state = new QuantumState();
  await state.simulate(circuit);
  return state;
}

// Function to calculate the probability of measuring a certain state
function calculateProbability(state, targetState) {
  const probability = state.getProbability(targetState);
  return probability.toFixed(4);
}

module.exports = {
  createTeleportationCircuit,
  simulateCircuit,
  calculateProbability
};
