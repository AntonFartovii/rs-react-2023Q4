import React, { Component } from 'react';

interface ErrorBoundaryState {
  error: Error | null;
  hasError: boolean;
  errorInfo: React.ErrorInfo | null;
}

interface ErrorBoundaryProps {
  children: React.JSX.Element;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <p>Seems like an error occurred!</p>
          <a href="http://localhost:5173">На главную!</a>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
