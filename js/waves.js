// waves.js - исправленная версия с наклоном
function initWaves() {
    const wavePatterns = {
        gentle: "M0,30 Q150,0 300,30 T600,30 T900,30 T1200,30 T1440,30",
        frequent: "M0,30 Q80,10 160,30 T320,30 T480,30 T640,30 T800,30 T960,30 T1120,30 T1280,30 T1440,30",
        steep: "M0,30 Q120,60 240,30 T480,30 T720,30 T960,30 T1200,30 T1440,30",
        rare: "M0,30 Q200,0 400,30 T800,30 T1200,30 T1440,30",
        complex: "M0,30 Q90,0 180,30 T360,60 T540,30 T720,0 T900,30 T1080,60 T1260,30 T1440,30"
    };
    
    const waveContainers = document.querySelectorAll('.wave-bottom');
    
    waveContainers.forEach((container, index) => {
        // Создаём или получаем SVG
        let svg = container.querySelector('svg');
        let path;
        
        if (!svg) {
            svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('preserveAspectRatio', 'none');
            svg.setAttribute('viewBox', '0 0 1440 80');
            container.appendChild(svg);
            path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            svg.appendChild(path);
        } else {
            path = svg.querySelector('path') || document.createElementNS('http://www.w3.org/2000/svg', 'path');
            if (!svg.querySelector('path')) {
                svg.appendChild(path);
            }
        }
        
        // Определяем тип волны
        let patternType = 'gentle';
        if (container.classList.contains('wave-gentle')) patternType = 'gentle';
        else if (container.classList.contains('wave-frequent')) patternType = 'frequent';
        else if (container.classList.contains('wave-steep')) patternType = 'steep';
        else if (container.classList.contains('wave-rare')) patternType = 'rare';
        else if (container.classList.contains('wave-complex')) patternType = 'complex';
        
        // Устанавливаем path
        path.setAttribute('d', wavePatterns[patternType] || wavePatterns.gentle);
        path.setAttribute('stroke', 'var(--primary)');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-width', container.classList.contains('wave-bold') ? '4' : '2.5');
        path.setAttribute('stroke-linecap', 'round');
        
        
        if (container.classList.contains('wave-overlay')) {
            container.style.zIndex = '30';
        }
    });
}

document.addEventListener('DOMContentLoaded', initWaves);
window.addEventListener('load', initWaves);