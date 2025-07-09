#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🚀 Initializing new project from MyReactNativeTemplate...');

try {
  execSync('npx react-native-rename "NewAppName"', { stdio: 'inherit' });
  execSync('rm -rf .git', { stdio: 'inherit' });
  console.log('✅ Setup complete. You can now start coding!');
} catch (err) {
  console.error('❌ Error during initialization', err);
}
