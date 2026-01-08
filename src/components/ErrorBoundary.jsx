import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-md text-center">
            <h2 className="text-2xl font-bold mb-3">কিছু ভুল হয়েছে</h2>
            <p className="text-gray-300 mb-4">দয়া করে পেজটি রিফ্রেশ করুন বা পরে চেষ্টা করুন।</p>
            <button
              onClick={() => location.reload()}
              className="bg-brand px-4 py-2 rounded"
            >
              রিফ্রেশ
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
