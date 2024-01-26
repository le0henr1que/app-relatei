function App() {
  return (
    <>
      <div className="flex space-x-3" aria-live="assertive" aria-atomic="true">
        <div className="flex-none w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="w-full space-y-2">
          <div className="w-9/12 h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-11/12 h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-8/12 h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </>
  );
}

export default App;
