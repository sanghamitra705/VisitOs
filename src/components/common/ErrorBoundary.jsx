import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './Button';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('VISITOR_OS Error Boundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center p-6 bg-[#F3F9FD]">
          <div className="max-w-lg w-full bg-white rounded-3xl p-8 border border-[#DCE6EF] shadow-md text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-[#10243E] font-sans">Something went wrong</h2>
            <p className="text-xs text-[#5F7185] leading-relaxed">
              An unexpected error occurred while rendering this page.
            </p>
            {this.state.error && (
              <div className="p-3 bg-red-50 text-red-700 rounded-xl text-xs font-mono text-left max-h-40 overflow-auto border border-red-200">
                <strong>Error:</strong> {this.state.error.message || String(this.state.error)}
              </div>
            )}
            <div className="pt-2 flex items-center justify-center gap-3">
              <Button onClick={this.handleReload} variant="primary" size="small" icon={RefreshCw}>
                Reload Application
              </Button>
              <Button onClick={() => window.location.href = '/'} variant="outline" size="small">
                Go to Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
