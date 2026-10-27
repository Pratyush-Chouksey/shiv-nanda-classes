/**
 * Micro-Haptic Feedback Utility
 * Triggers a subtle 10ms vibration on supported mobile devices
 * mimicking the soft chime of a brass Ghungroo bell.
 */
export function triggerGhungrooHaptic(pattern = 10) {
  if (typeof window !== 'undefined' && 'vibrate' in navigator) {
    try {
      navigator.vibrate(pattern);
    } catch {
      // Silently catch unsupported devices or permission restrictions
    }
  }
}
