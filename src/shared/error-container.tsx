import React, { FC, PropsWithChildren } from 'react';
import './error-container.css';

type ErrorContainerParams = PropsWithChildren<{
  errorMessage: string | null;
  showError: boolean;
  errorId: string;
}>;

const ErrorContainer: FC<ErrorContainerParams> = ({
  errorMessage,
  children,
  showError,
  errorId,
}) => {
  return (
    <div className={showError && errorMessage ? 'error' : ''}>
      {children}
      {showError && errorMessage && (
        <div className="py-2 text-sm font-light text-red-600">
          <span id={errorId}>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default ErrorContainer;
