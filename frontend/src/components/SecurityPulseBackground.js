import React, { useEffect, useRef } from "react";

function SecurityPulseBackground() {

    const canvasRef = useRef(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let radius = 0;

        function draw() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();

            ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);

            ctx.strokeStyle = "rgba(59,130,246,0.4)";
            ctx.lineWidth = 3;

            ctx.stroke();

            radius += 1.5;

            if (radius > 400) {
                radius = 0;
            }

            requestAnimationFrame(draw);

        }

        draw();

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

export default SecurityPulseBackground;