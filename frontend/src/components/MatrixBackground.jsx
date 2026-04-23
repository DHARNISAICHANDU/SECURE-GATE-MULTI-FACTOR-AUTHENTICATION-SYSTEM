import React, { useEffect, useRef } from "react";

function MatrixBackground() {

    const canvasRef = useRef(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = "SECUREGATEMFA010101AUTHSECURITYTOKEN".split("");

        const fontSize = 16;
        const columns = canvas.width / fontSize;

        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        function draw() {

            ctx.fillStyle = "rgba(2,6,23,0.15)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < drops.length; i++) {

                const text = letters[Math.floor(Math.random() * letters.length)];

                /* BLUE CYBER GLOW */

                ctx.shadowColor = "#3b82f6";
                ctx.shadowBlur = 8;

                ctx.fillStyle = "#60a5fa";

                ctx.font = fontSize + "px monospace";

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        const interval = setInterval(draw, 35);

        return () => clearInterval(interval);

    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1
            }}
        />
    );
}

export default MatrixBackground;