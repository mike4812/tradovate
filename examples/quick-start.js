/**
 * Quick Start Example
 * 
 * This is the simplest way to get started with the multi-account manager.
 * Run: node examples/quick-start.js
 */

import MultiAccountManager from '../src/MultiAccountManager.js';

async function main() {
  console.log('🚀 Quick Start Example\n');

  // Create manager (true = Demo mode)
  const manager = new MultiAccountManager(true);

  // Add your accounts
  manager.addAccount({
    accountName: 'My First Account',
    username: 'demo_user',
    password: 'demo_password',
    appId: 'Sample App',
    appVersion: '1.0',
    cid: 'YOUR_CID',
    sec: 'YOUR_SECRET'
  });

  try {
    // Connect to all accounts
    console.log('Connecting...');
    await manager.connectAll();

    // Get total balance
    const totalBalance = await manager.getTotalBalance();
    console.log(`\n💰 Total Balance: $${totalBalance.toFixed(2)}`);

    // Show account status
    await manager.printStatus();

    console.log('\n✅ Done!');
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    manager.disconnect();
  }
}

main().catch(console.error);
