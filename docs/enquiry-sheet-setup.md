# Sending website enquiries to a Google Sheet

This sets up a Google Sheet that receives every enquiry from the Contact and Start an enquiry forms on the Float website. It takes about 5 minutes and needs no coding. Do it while signed in to the company Google account that should own the Sheet.

## What you will end up with
- A Sheet called "Float enquiries" with one row per enquiry (date, form, name, contact details, what they need, and so on).
- A web address (URL) that you send to the person building the website. That is the only thing they need from you.

## Steps

### 1. Create the Sheet
1. Go to https://sheets.google.com and create a **Blank** spreadsheet.
2. Rename it **Float enquiries** (click the title at the top left).

### 2. Add the script
1. In the Sheet, click **Extensions > Apps Script**. A new tab opens.
2. Delete any code that is already there.
3. Paste in the whole script from the **Script** section below.
4. *(Optional)* To get an email for each new enquiry, put an email address between the quotes on the `NOTIFY_EMAIL` line near the top. Leave it as `""` for no emails.
5. Click the **Save** icon (or Ctrl+S). Name the project "Float enquiries" if asked.

### 3. Deploy it
1. Click **Deploy > New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Description:** Float enquiries
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**.
5. Google asks you to authorise. Click **Authorise access**, choose your account, then **Advanced > Go to Float enquiries (unsafe) > Allow**. The "unsafe" wording appears for any script you wrote yourself; it is normal.
6. Copy the **Web app URL**. It starts with `https://script.google.com/macros/s/` and ends with `/exec`.

### 4. Send the URL
Send the Web app URL to the person building the website. That is all they need.

### 5. Share the Sheet
Click **Share** (top right) and add anyone who should see the enquiries. Only give **Editor** access to people who need to change data.

## Good to know
- **If you change the script later**, use **Deploy > Manage deployments > Edit (pencil) > Version: New version > Deploy**. The URL stays the same.
- **The script runs as the account that deployed it.** If that account is closed or loses access, enquiries stop arriving. Use a company account, not a personal one.
- **The URL is not a password,** but it can only add rows. It cannot read or change the Sheet.
- **Personal data:** the Sheet holds names, emails and phone numbers. Keep sharing tight and make sure the privacy notice says enquiries are stored in Google Sheets.

## Script

```javascript
// Receives enquiries from the Float website and appends them to this Sheet.
var NOTIFY_EMAIL = ""; // optional: an address to email for every new enquiry

var COLUMNS = [
  ["Received", "receivedAt"],
  ["Form", "form"],
  ["First name", "firstName"],
  ["Last name", "lastName"],
  ["Email", "email"],
  ["Phone", "phone"],
  ["Looking for", "product"],
  ["Amount", "amount"],
  ["Business name", "businessName"],
  ["Business type", "businessType"],
  ["Purpose", "purpose"],
  ["Turnover", "turnover"],
  ["Time trading", "tradingHistory"],
  ["Timescale", "timescale"],
  ["Message", "message"],
  ["Notes", "notes"],
  ["Privacy confirmed", "privacy"],
  ["Page", "page"],
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    var data = JSON.parse(e.postData.contents);

    // Basic sanity check so stray requests do not create rows.
    if (!data || !data.email || !data.firstName) {
      return reply({ ok: false, error: "Missing fields" });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUMNS.map(function (c) { return c[0]; }));
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold");
    }

    data.receivedAt = new Date();
    var row = COLUMNS.map(function (c) { return clean(data[c[1]]); });
    sheet.appendRow(row);

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(
        NOTIFY_EMAIL,
        "New Float enquiry: " + data.firstName + " " + (data.lastName || ""),
        COLUMNS.map(function (c, i) { return c[0] + ": " + row[i]; }).join("\n")
      );
    }
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Stops values that start with = + - @ from being treated as formulas.
function clean(value) {
  if (value === undefined || value === null) return "";
  if (value instanceof Date) return value;
  var text = String(value);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
```

## For the developer
- The site posts JSON as `text/plain` (avoids a CORS preflight that Apps Script cannot answer) to the `/exec` URL.
- Payload keys match the columns above: the fields from `contactSchema` and `applySchema` in `src/lib/contact.ts`, plus `form` ("contact" or "apply"), `page` and a `receivedAt` the script sets itself.
- The URL is supplied to the build as `NEXT_PUBLIC_ENQUIRY_ENDPOINT`.
