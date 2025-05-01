function generatePassword(req, res) {
    const length = parseInt(req.query.length, 10) || 12;
    const includeUppercase = req.query.include_uppercase === 'true';
    const includeNumbers = req.query.include_numbers === 'true';
    const includeSpecial = req.query.include_special === 'true';
  
    if (isNaN(length) || length < 4 || length > 64) {
      return res.status(400).json({ error: 'Invalid password length (must be 4–64).' });
    }
  
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
    let charSet = lowercaseChars;
    if (includeUppercase) charSet += uppercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSpecial) charSet += specialChars;
  
    if (charSet.length === 0) {
      return res.status(400).json({ error: 'At least one character set must be selected.' });
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randIndex];
    }
  
    res.json({ password });
  }
  
  module.exports = { generatePassword };
  