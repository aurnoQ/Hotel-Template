import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#F7F1E8] px-6 text-center">
          <div className="max-w-md bg-[#FFFDF9] border border-[#DCCDBB] p-8 rounded-[4px] shadow-sm">
            <h1 className="font-display text-3xl text-[#241A17] mb-3">Something went wrong</h1>
            <p className="font-sans text-sm text-[#302C29]/70 mb-6 leading-relaxed">
              We encountered an unexpected display issue. Please refresh the page.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="px-6 py-2.5 bg-[#241A17] text-[#FFFDF9] font-sans text-sm font-medium rounded-[4px] hover:bg-[#302C29] transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
