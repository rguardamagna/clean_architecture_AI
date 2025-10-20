import { getHealth } from './src/shared/health';

const healthStatus = getHealth();
console.log(`Health Status: ${healthStatus.status}`);