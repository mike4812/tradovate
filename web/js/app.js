// App State
const state = {
    connected: false,
    accounts: [],
    positions: [],
    orders: [],
    autoRefresh: false,
    refreshInterval: null
};

// DOM Elements
const elements = {
    connectBtn: document.getElementById('connectBtn'),
    refreshBtn: document.getElementById('refreshBtn'),
    disconnectBtn: document.getElementById('disconnectBtn'),
    connectionStatus: document.getElementById('connectionStatus'),
    loadingOverlay: document.getElementById('loadingOverlay'),
    toastContainer: document.getElementById('toastContainer'),
    
    // Summary
    totalBalance: document.getElementById('totalBalance'),
    connectedAccounts: document.getElementById('connectedAccounts'),
    totalAccounts: document.getElementById('totalAccounts'),
    totalPositions: document.getElementById('totalPositions'),
    totalOrders: document.getElementById('totalOrders'),
    
    // Risk
    lowRiskCount: document.getElementById('lowRiskCount'),
    mediumRiskCount: document.getElementById('mediumRiskCount'),
    highRiskCount: document.getElementById('highRiskCount'),
    
    // Lists
    accountsList: document.getElementById('accountsList'),
    positionsList: document.getElementById('positionsList'),
    ordersList: document.getElementById('ordersList'),
    
    // Settings
    autoRefresh: document.getElementById('autoRefresh'),
    soundAlerts: document.getElementById('soundAlerts'),
    environmentSelect: document.getElementById('environmentSelect')
};

// Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        
        // Update nav
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Update sections
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        document.getElementById(targetId).classList.add('active');
    });
});

// Toast Notifications
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : '⚠️';
    
    toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div class="toast-message">${message}</div>
    `;
    
    elements.toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Loading Overlay
function showLoading(show = true) {
    elements.loadingOverlay.classList.toggle('active', show);
}

// Connect to Accounts (Simulated)
async function connectToAccounts() {
    showLoading(true);
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mock data
        state.accounts = [
            {
                name: 'חשבון ראשי',
                accountId: 'ACC001',
                balance: 50000,
                positions: 3,
                orders: 1,
                risk: 'low'
            },
            {
                name: 'חשבון משני',
                accountId: 'ACC002',
                balance: 35000,
                positions: 5,
                orders: 2,
                risk: 'medium'
            },
            {
                name: 'חשבון נוסף',
                accountId: 'ACC003',
                balance: 15000,
                positions: 2,
                orders: 0,
                risk: 'low'
            }
        ];
        
        state.positions = [
            {
                account: 'חשבון ראשי',
                symbol: 'ES',
                contracts: 2,
                avgPrice: 4500,
                currentPrice: 4520,
                pnl: 400
            },
            {
                account: 'חשבון משני',
                symbol: 'NQ',
                contracts: 1,
                avgPrice: 15000,
                currentPrice: 15100,
                pnl: 100
            }
        ];
        
        state.orders = [
            {
                account: 'חשבון ראשי',
                symbol: 'ES',
                type: 'Limit',
                action: 'Buy',
                quantity: 1,
                price: 4490,
                status: 'Working'
            }
        ];
        
        state.connected = true;
        updateUI();
        showToast('התחברת בהצלחה לכל החשבונות!', 'success');
        
    } catch (error) {
        showToast('שגיאה בהתחברות: ' + error.message, 'error');
    } finally {
        showLoading(false);
    }
}

// Update UI
function updateUI() {
    // Connection status
    if (state.connected) {
        elements.connectionStatus.classList.add('connected');
        elements.connectionStatus.querySelector('.status-text').textContent = 'מחובר';
        elements.connectBtn.textContent = 'מחובר ✓';
        elements.connectBtn.disabled = true;
        elements.refreshBtn.disabled = false;
        elements.disconnectBtn.disabled = false;
    } else {
        elements.connectionStatus.classList.remove('connected');
        elements.connectionStatus.querySelector('.status-text').textContent = 'מנותק';
        elements.connectBtn.textContent = 'התחבר לכל החשבונות';
        elements.connectBtn.disabled = false;
        elements.refreshBtn.disabled = true;
        elements.disconnectBtn.disabled = true;
    }
    
    // Summary
    const totalBalance = state.accounts.reduce((sum, acc) => sum + acc.balance, 0);
    const totalPositions = state.accounts.reduce((sum, acc) => sum + acc.positions, 0);
    const totalOrders = state.accounts.reduce((sum, acc) => sum + acc.orders, 0);
    
    elements.totalBalance.textContent = `$${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    elements.connectedAccounts.textContent = state.connected ? state.accounts.length : 0;
    elements.totalAccounts.textContent = state.accounts.length;
    elements.totalPositions.textContent = totalPositions;
    elements.totalOrders.textContent = totalOrders;
    
    // Risk
    const riskCounts = state.accounts.reduce((counts, acc) => {
        counts[acc.risk] = (counts[acc.risk] || 0) + 1;
        return counts;
    }, {});
    
    elements.lowRiskCount.textContent = riskCounts.low || 0;
    elements.mediumRiskCount.textContent = riskCounts.medium || 0;
    elements.highRiskCount.textContent = riskCounts.high || 0;
    
    // Accounts list
    renderAccounts();
    renderPositions();
    renderOrders();
}

// Render Accounts
function renderAccounts() {
    if (!state.connected || state.accounts.length === 0) {
        elements.accountsList.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔌</div>
                <p>התחבר כדי לראות את החשבונות</p>
            </div>
        `;
        return;
    }
    
    elements.accountsList.innerHTML = state.accounts.map(account => `
        <div class="account-card">
            <div class="account-header">
                <h3 class="account-name">${account.name}</h3>
                <span class="account-status connected">מחובר</span>
            </div>
            <div class="account-info">
                <div class="account-info-row">
                    <span class="account-label">מזהה חשבון</span>
                    <span class="account-value">${account.accountId}</span>
                </div>
                <div class="account-info-row">
                    <span class="account-label">יתרה</span>
                    <span class="account-value">$${account.balance.toLocaleString()}</span>
                </div>
                <div class="account-info-row">
                    <span class="account-label">פוזיציות</span>
                    <span class="account-value">${account.positions}</span>
                </div>
                <div class="account-info-row">
                    <span class="account-label">הזמנות</span>
                    <span class="account-value">${account.orders}</span>
                </div>
                <div class="account-info-row">
                    <span class="account-label">רמת סיכון</span>
                    <span class="account-value">${getRiskLabel(account.risk)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Positions
function renderPositions() {
    if (!state.connected || state.positions.length === 0) {
        elements.positionsList.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📊</div>
                <p>אין פוזיציות פתוחות</p>
            </div>
        `;
        return;
    }
    
    elements.positionsList.innerHTML = `
        <div class="data-table">
            <table>
                <thead>
                    <tr>
                        <th>חשבון</th>
                        <th>סימול</th>
                        <th>חוזים</th>
                        <th>מחיר ממוצע</th>
                        <th>מחיר נוכחי</th>
                        <th>רווח/הפסד</th>
                    </tr>
                </thead>
                <tbody>
                    ${state.positions.map(pos => `
                        <tr>
                            <td>${pos.account}</td>
                            <td><strong>${pos.symbol}</strong></td>
                            <td>${pos.contracts}</td>
                            <td>$${pos.avgPrice.toLocaleString()}</td>
                            <td>$${pos.currentPrice.toLocaleString()}</td>
                            <td style="color: ${pos.pnl >= 0 ? 'var(--success-color)' : 'var(--danger-color)'}; font-weight: 600;">
                                ${pos.pnl >= 0 ? '+' : ''}$${pos.pnl.toLocaleString()}
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// Render Orders
function renderOrders() {
    if (!state.connected || state.orders.length === 0) {
        elements.ordersList.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📋</div>
                <p>אין הזמנות פעילות</p>
            </div>
        `;
        return;
    }
    
    elements.ordersList.innerHTML = `
        <div class="data-table">
            <table>
                <thead>
                    <tr>
                        <th>חשבון</th>
                        <th>סימול</th>
                        <th>סוג</th>
                        <th>פעולה</th>
                        <th>כמות</th>
                        <th>מחיר</th>
                        <th>סטטוס</th>
                    </tr>
                </thead>
                <tbody>
                    ${state.orders.map(order => `
                        <tr>
                            <td>${order.account}</td>
                            <td><strong>${order.symbol}</strong></td>
                            <td>${order.type}</td>
                            <td style="color: ${order.action === 'Buy' ? 'var(--success-color)' : 'var(--danger-color)'}">
                                ${order.action === 'Buy' ? 'קנייה' : 'מכירה'}
                            </td>
                            <td>${order.quantity}</td>
                            <td>$${order.price.toLocaleString()}</td>
                            <td><span style="color: var(--warning-color)">${order.status}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// Helper Functions
function getRiskLabel(risk) {
    const labels = {
        low: '🟢 נמוך',
        medium: '🟡 בינוני',
        high: '🔴 גבוה'
    };
    return labels[risk] || risk;
}

// Auto Refresh
function startAutoRefresh() {
    if (state.refreshInterval) {
        clearInterval(state.refreshInterval);
    }
    
    state.refreshInterval = setInterval(() => {
        if (state.connected) {
            refreshData();
        }
    }, 30000); // 30 seconds
}

function stopAutoRefresh() {
    if (state.refreshInterval) {
        clearInterval(state.refreshInterval);
        state.refreshInterval = null;
    }
}

async function refreshData() {
    showToast('מרענן נתונים...', 'success');
    // Simulate refresh
    await new Promise(resolve => setTimeout(resolve, 500));
    updateUI();
}

// Disconnect
function disconnect() {
    state.connected = false;
    state.accounts = [];
    state.positions = [];
    state.orders = [];
    updateUI();
    stopAutoRefresh();
    showToast('התנתקת מכל החשבונות', 'warning');
}

// Event Listeners
elements.connectBtn.addEventListener('click', connectToAccounts);
elements.refreshBtn.addEventListener('click', refreshData);
elements.disconnectBtn.addEventListener('click', disconnect);

elements.autoRefresh.addEventListener('change', (e) => {
    state.autoRefresh = e.target.checked;
    if (state.autoRefresh && state.connected) {
        startAutoRefresh();
        showToast('רענון אוטומטי הופעל', 'success');
    } else {
        stopAutoRefresh();
        showToast('רענון אוטומטי כובה', 'warning');
    }
});

elements.environmentSelect.addEventListener('change', (e) => {
    const env = e.target.value;
    if (env === 'live') {
        const confirmed = confirm('⚠️ אזהרה! אתה עומד לעבור לסביבת LIVE.\nזה ישפיע על חשבונות אמיתיים!\n\nהאם אתה בטוח?');
        if (!confirmed) {
            e.target.value = 'demo';
            return;
        }
    }
    showToast(`עברת לסביבת ${env === 'demo' ? 'Demo' : 'Live'}`, env === 'live' ? 'warning' : 'success');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    console.log('🚀 Tradovate Multi-Account Manager loaded');
    console.log('📝 Note: This is a demo UI. Connect to real backend for actual data.');
});
