import React, { FC, PropsWithChildren } from 'react';

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
        <div className="error-wrapper">
          <span id={errorId}>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default ErrorContainer;
