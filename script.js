function generateExpressPayReceipt() {
    const service = document.getElementById('service').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const transactionId = document.getElementById('transactionId').value;
    const date = document.getElementById('date').value;
    const reference = document.getElementById('reference').value;
    const total = document.getElementById('total').value;

    const newWindow = window.open('', '', 'width=400,height=1000');
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
                    background: rgba(0, 0, 0, 0.05); /* Slightly transparent */
                    padding: 20px;
                    display: flex;
                    justify-content: center;
                }

                .receipt-container {
                    width: 90%;
                    max-width: 450px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .section {
                    background-color: white;
                    border-radius: 5px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                }
                .first-section {
                    margin-left: -10px;
                    margin-right: -10px;
                    padding-left: 25px;
                    padding-right: 25px;
                }



                .header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .back-button {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    cursor: pointer;
                }

                .logo-image {
                    height: 40px;
                }

                .menu-icon {
                    font-size: 20px;
                    cursor: pointer;
                }

                .progress-bar {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                }

                .progress-step {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .progress-step i {
                    color: #007bff;
                }

                .progress-step span {
                    color: #000;
                    font-weight: bold;
                    white-space: nowrap;
                    font-size: 13px;
                }

                .progress-line {
                    width: 95%;
                    height: 20px;
                    background-color:rgb(241, 144, 18);
                    margin: 0 auto; 
                    border-bottom-left-radius: 4px;
                    border-bottom-right-radius: 4px;
                }

                .details-section {
                    font-size: 14px;
                }

                .detail-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 0;
                    border-bottom: 1px solid #eee;
                    flex-wrap: nowrap;
                    margin-bottom: 18px;
                }
                .detail-row:last-child {
                    border-bottom: none;
                }

                .label {
                    color: #666;
                    font-weight: 400;
                }

                .value {
                    font-weight: 700;
                    color: #000;
                    text-align: right;
                    display: block;
                }

                @media (max-width: 500px) {
                    .receipt-container {
                        width: 95%;
                    }
                }
            </style>
        </head>
        <body>
            <div class="receipt-container">

                <!-- Section 1: Header & Progress with Progress Line touching -->
<div class="section-with-line">
    <div class="section first-section">
        <div class="header">
            <div class="back-button">
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
    </div>
    <div class="progress-line"></div>
</div>


                <!-- Section 2: Details -->
                <div class="section">
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
                    </div>
                </div>

                <!-- Section 3: Total -->
                <div class="section">
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
