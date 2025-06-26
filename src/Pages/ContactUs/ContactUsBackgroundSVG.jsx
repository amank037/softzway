function ContactUsBackgroundSVG() {
    return (
        <svg
        className="contactus-bg-svg"
        
        style={{
            
        }}
        xmlns="http://www.w3.org/2000/svg"
        >
        {/* All shapes use var(--light-green) */}
        <circle cx="10%" cy="30%" r="60" fill="var(--light-green)" opacity="0.2">
            <animate attributeName="cy" values="180;220;180" dur="7s" repeatCount="indefinite" />
        </circle>
        <polygon points="400,700 440,760 360,760" fill="var(--light-green)" opacity="0.13">
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -30; 0 0" dur="8s" repeatCount="indefinite" />
        </polygon>
        <rect x="900" y="600" width="80" height="40" rx="18" fill="var(--light-green)" opacity="0.11">
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -40; 0 0" dur="10s" repeatCount="indefinite" />
        </rect>
        <polygon points="1300,800 1310,820 1330,820 1315,832 1320,850 1300,840 1280,850 1285,832 1270,820 1290,820"
            fill="var(--light-green)" opacity="0.10">
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -25; 0 0" dur="12s" repeatCount="indefinite" />
        </polygon>
        <circle cx="700" cy="400" r="38" fill="var(--light-green)" opacity="0.13">
            <animate attributeName="cy" values="400;440;400" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="850" r="22" fill="var(--light-green)" opacity="0.12">
            <animate attributeName="cy" values="850;820;850" dur="7.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="1100" cy="700" r="30" fill="var(--light-green)" opacity="0.11">
            <animate attributeName="cy" values="700;740;700" dur="9.5s" repeatCount="indefinite" />
        </circle>
        <ellipse cx="600" cy="120" rx="32" ry="18" fill="var(--light-green)" opacity="0.10">
            <animate attributeName="cy" values="120;160;120" dur="11s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="100" cy="600" rx="18" ry="10" fill="var(--light-green)" opacity="0.09">
            <animate attributeName="cy" values="600;630;600" dur="8.5s" repeatCount="indefinite" />
        </ellipse>
        <rect x="1250" y="300" width="30" height="30" rx="8" fill="var(--light-green)" opacity="0.09">
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 30; 0 0" dur="10s" repeatCount="indefinite" />
        </rect>
        <polygon points="800,200 820,230 780,230" fill="var(--light-green)" opacity="0.10">
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 20; 0 0" dur="7.2s" repeatCount="indefinite" />
        </polygon>
        <circle cx="1000" cy="200" r="16" fill="var(--light-green)" opacity="0.10">
            <animate attributeName="cy" values="200;240;200" dur="8.8s" repeatCount="indefinite" />
        </circle>
        <ellipse cx="400" cy="300" rx="14" ry="8" fill="var(--light-green)" opacity="0.09">
            <animate attributeName="cy" values="300;340;300" dur="9.2s" repeatCount="indefinite" />
        </ellipse>
        <rect x="600" y="700" width="24" height="24" rx="6" fill="var(--light-green)" opacity="0.09">
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -20; 0 0" dur="8.2s" repeatCount="indefinite" />
        </rect>
        <circle cx="200" cy="500" r="10" fill="var(--light-green)" opacity="0.08">
            <animate attributeName="cy" values="500;520;500" dur="7.7s" repeatCount="indefinite" />
        </circle>
        <ellipse cx="1300" cy="400" rx="12" ry="7" fill="var(--light-green)" opacity="0.08">
            <animate attributeName="cy" values="400;430;400" dur="8.3s" repeatCount="indefinite" />
        </ellipse>
        <rect x="900" y="100" width="18" height="18" rx="5" fill="var(--light-green)" opacity="0.08">
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 15; 0 0" dur="7.9s" repeatCount="indefinite" />
        </rect>
        <polygon points="100,200 120,220 80,220" fill="var(--light-green)" opacity="0.08">
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 10; 0 0" dur="6.8s" repeatCount="indefinite" />
        </polygon>
        </svg>
    );
}

export default ContactUsBackgroundSVG;