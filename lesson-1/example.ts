Object.defineProperty(
    window,
    'MySweetApp',
    {
        value: 'v1.0.0',
        writable: true
    }
);

function deliveryMethod() {
    // TODO
    return 'overnight';
}

function shipWeight() {
    const element = document.getElementById('weight');
    const str = element
        ? element.innerHTML
        : '0';
    return parseInt(str);
}

/**
 * @param {(string | string[])} emailAddr - An email address of array of email addresses
 */
function sendUpdates(emailAddr: string | string[]) {
    function sendEmail(addr: string) {
        // Default to standard delivery if empty
        // tslint:disable-next-line
        console.log(`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`);

        if (shipWeight() > 100) {
            // tslint:disable-next-line
            console.log('WARNING: Oversize package');
        }
    }

    // If it's an array, loop over it
    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val: string, idx: number) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}