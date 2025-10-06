const os = require('node:os');

const systemInfo = () => {
    let systemArchitecture = os.arch();
    let numberOfCores = os.cpus().length;
    let CPU = os.cpus()[0].model;
    let cpuSpeed = os.cpus()[0].speed;
    let totalMemory = Math.floor(os.totalmem()/ (1000000000)) + ' GB';
    let freeMemory = Math.floor(os.freemem()/ (1000000000)) + ' GB';
    let heapUsage = Math.floor(process.memoryUsage().heapTotal / (1000000000)) + ' GB';
    let hostName = os.hostname();
    let osType = os.type();

    return {
        systemArchitecture,
        numberOfCores,
        CPU,
        cpuSpeed,
        totalMemory,
        freeMemory,
        heapUsage,
        hostName,
        osType
    }
    }

module.exports = systemInfo;