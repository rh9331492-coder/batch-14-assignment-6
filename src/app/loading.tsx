"use client"
const Loading = () => {
  return (
    <>
      <style jsx>{`
        /* Loading bar animation */
        @keyframes loading {
          0% {
            width: 0%;
            opacity: 0.5;
          }

          20% {
            width: 25%;
            opacity: 0.8;
          }

          50% {
            width: 65%;
            opacity: 1;
          }

          75% {
            width: 85%;
            opacity: 1;
          }

          100% {
            width: 100%;
            opacity: 0.6;
          }
        }

        /* Dumbbell animation */
        @keyframes dumbbell {
          0% {
            transform: translateY(0) scale(1);
          }

          50% {
            transform: translateY(-8px) scale(1.03);
          }

          100% {
            transform: translateY(0) scale(1);
          }
        }

        /* Glow animation */
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px #ccff00;
          }

          50% {
            box-shadow:
              0 0 15px #ccff00,
              0 0 30px rgba(204, 255, 0, 0.4);
          }

          100% {
            box-shadow: 0 0 5px #ccff00;
          }
        }

        /* Text animation */
        @keyframes textPulse {
          0% {
            opacity: 0.4;
            letter-spacing: 0.25em;
          }

          50% {
            opacity: 1;
            letter-spacing: 0.35em;
          }

          100% {
            opacity: 0.4;
            letter-spacing: 0.25em;
          }
        }

        .animate-loading {
          animation: loading 2.5s ease-in-out infinite;
        }

        .animate-dumbbell {
          animation: dumbbell 1.5s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 1.5s ease-in-out infinite;
        }

        .animate-text {
          animation: textPulse 2s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center overflow-hidden">

        <div className="text-center">

          {/* Dumbbell Animation */}
          <div className="relative flex items-center justify-center mb-8 animate-dumbbell">

            {/* Left Weight */}
            <div className="absolute left-1/2 -translate-x-16 flex items-center gap-1">
              <div className="w-3 h-14 bg-[#ccff00] rounded animate-glow"></div>

              <div className="w-4 h-20 bg-[#ccff00] rounded animate-glow"></div>

              <div className="w-3 h-14 bg-[#ccff00] rounded animate-glow"></div>
            </div>

            {/* Bar */}
            <div className="w-32 h-3 bg-[#ccff00] rounded-full animate-glow"></div>

            {/* Right Weight */}
            <div className="absolute left-1/2 translate-x-4 flex items-center gap-1">
              <div className="w-3 h-14 bg-[#ccff00] rounded animate-glow"></div>

              <div className="w-4 h-20 bg-[#ccff00] rounded animate-glow"></div>

              <div className="w-3 h-14 bg-[#ccff00] rounded animate-glow"></div>
            </div>

          </div>

          {/* Logo */}
          <h1 className="text-4xl font-black tracking-[0.3em]">
            FIT<span className="text-[#ccff00]">LOG</span>
          </h1>

          {/* Loading Text */}
          <p className="mt-4 text-gray-400 text-sm uppercase animate-text">
            Loading your workout
          </p>

          {/* Loading Bar */}
          <div className="mt-8 w-64 h-1.5 bg-neutral-800 rounded-full overflow-hidden mx-auto">

            <div className="h-full bg-[#ccff00] rounded-full animate-loading"></div>

          </div>

          {/* Small Text */}
          <p className="mt-4 text-xs text-gray-600 tracking-widest">
            TRAIN • EAT • GROW
          </p>

        </div>

        {/* Background Glow */}
        <div className="absolute w-96 h-96 bg-[#ccff00]/5 blur-[120px] rounded-full pointer-events-none"></div>

      </div>
    </>
  );
};

export default Loading;