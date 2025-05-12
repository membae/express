function generateExpressPayReceipt() {
    const service = document.getElementById('service').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const transactionId = document.getElementById('transactionId').value;
    const date = document.getElementById('date').value;
    const reference = document.getElementById('reference').value;
    const total = document.getElementById('total').value;

    const primaryColor = '#ff9800';
    const textColor = '#333';
    const lightGray = '#f9f9f9';
    const mediumGray = '#eee';

    const newWindow = window.open('', '', 'width=400,height=700');
    newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
                <title>Receipt</title>
                <style>
                    body {
                        font-family: sans-serif;
                        margin: 0;
                        background-color: #f4f6f8;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                    }
                    .receipt-container {
                        background-color: white;
                        border-radius: 8px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                        width: 380px;
                        box-sizing: border-box;
                        padding: 20px;
                    }
                    .header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 16px;
                    background-color: #fff; /* optional */
                    
                }

                .back-button {
                    display: flex;
                    align-items: center;
                    gap: 6px; /* space between icon and "Back" text */
                    cursor: pointer;
                }

                .logo-image {
                    height: 40px; /* adjust as needed */
                }

                .menu-icon {
                    font-size: 20px;
                    cursor: pointer;
                }
                    .progress-bar {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding: 0 10px;
}

.progress-step {
  display: flex;
  align-items: center;
  gap: 8px;
}

.progress-step i {
  color: #007bff; /* Blue icon */
}

.progress-step span {
  color: #000; /* Black text */
  font-weight: bold;
}
.progress-line {
  width: 90%;
  height: 20px;
  background-color: rgb(241, 70, 18);;
  margin: 10px auto 0; /* centers the line horizontally */
  border-radius: 2px;
}


                    .details-section {
                        padding: 15px 0;
                    }
                    .detail-row {
                        display: flex;
                        justify-content: space-between;
                        padding: 8px 0;
                        border-bottom: 1px solid ${mediumGray};
                        color: ${textColor};
                    }
                    .detail-row:last-child {
                        border-bottom: none;
                        padding-top: 15px;
                        font-weight: bold;
                    }
                    .label {
                        color: #777;
                    }
                    .value {
                        font-weight: normal;
                    }
                </style>
            </head>
            <body>
                <div class="receipt1-container">
                    <div class="receipt-container">
                    <div class="header">
                        <div class = "back-button">
                            <i class="fa-solid fa-arrow-left"></i>
                            <span>Back</span>
                        </div>
                        <img src="images/express.png" alt="ExpressPay Logo" class="logo-image">
                        <div class="menu-icon">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                                              
                    </div>

                    
                    <div class="progress-bar">
                    <div class="progress-step active">
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Begin</span>
                    </div>
                    <div class="progress-step active">
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Payment Method</span>
                    </div>
                    <div class="progress-step active">
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Confirm</span>
                    </div>
                    </div>
                    <div class="progress-line"></div>


                    <div class="details-section">
                        <div class="detail-row">
                            <span class="label">Service</span>
                            <span class="value">${service}</span>
                        </div>
                        <div class="detail-row">
                            <span class="label">Account Number</span>
                            <span class="value">${accountNumber}</span>
                        </div>
                        <div class="detail-row">
                            <span class="label">Transaction ID</span>
                            <span class="value">${transactionId}</span>
                        </div>
                        <div class="detail-row">
                            <span class="label">Date</span>
                            <span class="value">${date}</span>
                        </div>
                        <div class="detail-row">
                            <span class="label">Reference</span>
                            <span class="value">${reference}</span>
                        </div>
                        <div class="detail-row">
                            <span class="label">Total</span>
                            <span class="value">${total}</span>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `);
    newWindow.document.close();
}
