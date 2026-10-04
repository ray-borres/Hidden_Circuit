"use strict";

const VAULT = {
    username: "operator",
    password: "Phantom_2026",
    payload: "MzkyMzM4M2YyODI5MmYyODNjM2YyODE5MGUxYzIxMGEzMjZlMzQyZTZhMzcwNTBjNmUyZjM2MmUwNTFmMjIyYTM1MjkzZjNlMjc=",
    backupPayload: "NTU0NzQ0NTA1MjQyNTY1MzQ2NTQ1NTU0",
    emergencyPayload: "NzM2NTYyNjE3MjYxNzY0NjQ2NTU2NDU2"
};

const DEBUG_XOR_KEY = 0x23;
const BACKUP_XOR_KEY = 0x7F;
const EMERGENCY_XOR_KEY = 0x31;

const backupFragments = [
    0x11,
    0x44,
    0x22
];

const BACKUP_KEY =
    backupFragments[0] ^
    backupFragments[1] ^
    backupFragments[2];

const diagnosticData = [
    0x71,
    0x72,
    0x65,
    0x6D,
    0x7A,
    0x73,
    0x21
];

function diagnosticDecrypt(data, key) {

    let output = "";

    for (let i = 0; i < data.length; i++) {
        output += String.fromCharCode(
            data[i] ^ key
        );
    }

    return output;
}

function emergencyUnlock() {

    console.log(
        "[!] Emergency protocol unavailable."
    );

    const fakeKey = BACKUP_KEY;

    console.log(
        "[DEBUG] Backup key: 0x" +
        fakeKey.toString(16)
    );

    return null;
}

function decodeDiagnostic() {

    const fakeData =
        "QURNSU5fRElBR05PU1RJQw==";

    try {
        return atob(fakeData);
    }

    catch (error) {
        return null;
    }
}

const encryptedDiagnostic = [
    0x41,
    0x55,
    0x54,
    0x48,
    0x5F,
    0x44,
    0x45,
    0x42,
    0x55,
    0x47
];

function decryptDiagnostic() {

    const key = DEBUG_XOR_KEY;

    let result = "";

    for (
        let i = 0;
        i < encryptedDiagnostic.length;
        i++
    ) {

        result += String.fromCharCode(
            encryptedDiagnostic[i] ^ key
        );

    }

    console.log(
        "[Diagnostic]",
        result
    );
}

const fragments = [
    0x13,
    0x27,
    0x6E
];

const XOR_KEY =
    fragments[0] ^
    fragments[1] ^
    fragments[2];

const loginForm =
    document.getElementById("loginForm");

const usernameInput =
    document.getElementById("username");

const passwordInput =
    document.getElementById("password");

const message =
    document.getElementById("message");

const statusText =
    document.getElementById("status");

loginForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const username =
            usernameInput.value;

        const password =
            passwordInput.value;

        if (
            username === VAULT.username &&
            password === VAULT.password
        ) {

            statusText.textContent =
                "AUTHORIZED";

            statusText.style.color =
                "#00ff66";

            message.textContent =
                "ACCESS GRANTED. ADMIN TERMINAL READY.";

            message.style.color =
                "#00ff66";

            console.log(
                "%c[+] Authentication successful.",
                "color:#00ff66;font-weight:bold;"
            );

            console.log(
                "%c[!] Administrative vault requires terminal access.",
                "color:#ffaa00;"
            );

        }

        else {

            statusText.textContent =
                "LOCKED";

            statusText.style.color =
                "#ff4d5a";

            message.textContent =
                "ACCESS DENIED.";

            message.style.color =
                "#ff4d5a";

        }

    }
);

function resetTerminal() {

    console.log(
        "[SYSTEM] Terminal reset requested."
    );

    console.log(
        "[SYSTEM] No active session found."
    );

}

function systemDiagnostics() {

    console.log(
        "Running system diagnostics..."
    );

    console.log(
        "Memory: OK"
    );

    console.log(
        "Network: OK"
    );

    console.log(
        "Encryption: UNKNOWN"
    );

}

function fakeUnlock() {

    console.log(
        "[!] Vault handshake failed."
    );

    console.log(
        "[!] Invalid encryption channel."
    );

}

function diagnosticMode() {

    console.log(
        "[!] Diagnostic mode is disabled."
    );

}

function revealSecret() {

    console.log(
        "%c[PHANTOM VAULT]",
        "color:#00ffd5;font-size:20px;font-weight:bold;"
    );

    console.log(
        "[*] Initializing decryption..."
    );

    let hexData;

    try {

        hexData =
            atob(VAULT.payload);

    }

    catch(error) {

        console.error(
            "[!] Base64 decoding failed."
        );

        return;

    }

    console.log(
        "[+] Base64 layer decoded."
    );

    let encrypted = "";

    for (
        let i = 0;
        i < hexData.length;
        i += 2
    ) {

        const byte =
            parseInt(
                hexData.substring(i, i + 2),
                16
            );

        encrypted +=
            String.fromCharCode(byte);

    }

    console.log(
        "[+] Hex layer decoded."
    );

    let flag = "";

    for (
        let i = 0;
        i < encrypted.length;
        i++
    ) {

        const decodedCharacter =
            encrypted.charCodeAt(i) ^
            XOR_KEY;

        flag +=
            String.fromCharCode(
                decodedCharacter
            );

    }

    console.log(
        "[+] XOR layer decoded."
    );

    console.log(
        "----------------------------------------"
    );

    console.log(
        "%cVAULT UNLOCKED",
        "color:#00ff66;font-size:22px;font-weight:bold;"
    );

    console.log(
        "%cXOR KEY: 0x" +
        XOR_KEY
            .toString(16)
            .toUpperCase(),
        "color:#ffaa00;font-weight:bold;"
    );

    console.log(
        "%cFLAG: " + flag,
        "color:#00ff66;font-size:18px;font-weight:bold;"
    );

    console.log(
        "----------------------------------------"
    );

    return flag;
}

console.log(
    "%cPHANTOM VAULT",
    "color:#00ffd5;font-size:18px;font-weight:bold;"
);

console.log(
    "Administrative terminal initialized."
);

console.log(
    "System status: LOCKED"
);

console.log(
    "Some diagnostic functions may be unavailable."
);

console.log(
    "[SYSTEM] Encryption modules loaded."
);

console.log(
    "[SYSTEM] Diagnostic channel: OFFLINE."
);