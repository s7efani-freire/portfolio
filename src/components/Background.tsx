function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Large moving circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/15 rounded-full animate-float-slow"></div>
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/20 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/12 rounded-full animate-float-slow-reverse"></div>
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-purple-700/18 rounded-full animate-float-medium-reverse"></div>

      {/* Medium circles */}
      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-orange-500/10 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-purple-600/15 rounded-full animate-float-fast-reverse"></div>

      {/* Small floating circles */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-orange-600/12 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-purple-600/18 rounded-full animate-float-fast"></div>
      <div className="absolute top-2/3 left-1/6 w-40 h-40 bg-orange-500/8 rounded-full animate-float-slow"></div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent"></div>
    </div>
  );
}

export default Background;
