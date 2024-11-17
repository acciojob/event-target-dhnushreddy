class EventTarget {
  constructor() {
    // Using Map to store event listeners, with the event type as key and an array of callbacks as value
    this.listeners = new Map();
  }

  // Adds an event listener for the given event
  addEventListener(event, callback) {
    // If the event doesn't have any listeners, initialize an empty array
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    // Add the callback to the array for that event type, if not already added
    const eventListeners = this.listeners.get(event);
    if (!eventListeners.includes(callback)) {
      eventListeners.push(callback);
    }
  }

  // Removes an event listener for the given event
  removeEventListener(event, callback) {
    // If no listeners for this event, do nothing
    if (!this.listeners.has(event)) return;

    const eventListeners = this.listeners.get(event);
    const index = eventListeners.indexOf(callback);

    // If callback is found, remove it from the array
    if (index !== -1) {
      eventListeners.splice(index, 1);
    }
  }

  // Dispatches an event, invoking all listeners for that event
  dispatchEvent(event) {
    // If no listeners for this event, do nothing
    if (!this.listeners.has(event)) return;

    const eventListeners = this.listeners.get(event);

    // Call each listener for the event
    eventListeners.forEach(callback => callback());
  }
}
