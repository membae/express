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
                        justify-content: center;
                        margin-bottom: 20px;
                    }
                    .logo {
                        color: ${primaryColor};
                        font-size: 24px;
                        font-weight: bold;
                    }
                    .progress-bar {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 20px;
                        padding: 0 10px;
                    }
                    .progress-step {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        color: #999;
                        font-size: 14px;
                    }
                    .progress-step.active {
                        color: ${primaryColor};
                    }
                    .progress-icon {
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        border: 2px solid #999;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 5px;
                        font-size: 16px;
                    }
                    .progress-step.active .progress-icon {
                        border-color: ${primaryColor};
                        background-color: ${primaryColor};
                        color: white;
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
                <div class="receipt-container">
                    <div class="header">
                        <span class="logo">expressPay</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-step active">
                            <div class="progress-icon">&#10004;</div>
                            Begin
                        </div>
                        <div class="progress-step active">
                            <div class="progress-icon">&#10004;</div>
                            Payment Method
                        </div>
                        <div class="progress-step active">
                            <div class="progress-icon">&#10004;</div>
                            Confirm
                        </div>
                    </div>
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
