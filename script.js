const sendForm = document.getElementById('sendForm');
const logContainer = document.getElementById('logContainer');
const sentMessages = []; // Array to store sent messages

sendForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const customerName = document.getElementById('customerName').value;
  const serialNumber = document.getElementById('serialNumber').value;
  const address = document.getElementById('address').value;
  const time = document.getElementById('time').value;
  const date = document.getElementById('date').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const services = document.getElementById('services').value; // Get selected services

  const message = `Hello, ${customerName},\n\n*This is a reminder for your appointment:*\nSerial Number: *${serialNumber}*\nServices: *${services}*\nAddress: *${address}*\nTime: *${time}*\nDate: *${date}*\n\n (Please note that the engineer may face high traffic and unforeseen delays in reaching your location. Your patience is appreciated.).Please verify your provided address. Due to the current circumstances, the repair or diagnostic process may take longer than usual. Your patience is greatly appreciated. If there are any changes or if you need to reschedule, please inform us so that we can coordinate with our team. We look forward to seeing you!`;

  // ... Your existing code ...

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');

  saveToExcel(customerName, serialNumber, address, time, date, phoneNumber, services);
  addToLog(customerName, phoneNumber);

  // Record the sent message data
  const sentMessageData = {
    customerName,
    serialNumber,
    address,
    time,
    date,
    phoneNumber,
    services // Add services to the recorded data
  };
  sentMessages.push(sentMessageData);
});

function saveToExcel(customerName, serialNumber, address, time, date, phoneNumber, services) {
  // Your Excel saving code remains the same
}

function addToLog(customerName, phoneNumber) {
  const logEntry = document.createElement('p');
  logEntry.textContent = `Sent to ${customerName} - Phone: ${phoneNumber}`;
  logContainer.appendChild(logEntry);
}

// Initialize log container
logContainer.innerHTML = '<h2>Sent Messages Log</h2>';
