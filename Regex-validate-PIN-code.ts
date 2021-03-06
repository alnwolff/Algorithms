// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// Solution:

export class Kata {
    static validatePin(pin: string): boolean {
      return ((pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin));
    }
}
  