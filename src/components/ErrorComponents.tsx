// handle errors with a bunch of static methods
class ErrorHandlers {
  // an empty Error loading message
  static errorLoadingMsg = (msg: string) => {
    return <p>Error loading: {msg}</p>;
  };
}

export default ErrorHandlers;
