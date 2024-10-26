import React, { Component, ReactNode } from "react";
import styles from "./newsErrorBoundary.module.scss";

interface NewsErrorBoundaryProps {
  children: ReactNode;
}

interface NewsErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

class NewsErrorBoundary extends Component<
  NewsErrorBoundaryProps,
  NewsErrorBoundaryState
> {
  constructor(props: NewsErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): NewsErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught in ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2 className={styles.message}>
          Something went wrong. Please try again later.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default NewsErrorBoundary;
