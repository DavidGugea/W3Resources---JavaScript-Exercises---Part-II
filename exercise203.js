// 203. Write a JavaScript program to determine if the current runtime environment is a browser so that front-end modules can run on the server (Node) without throwing errors.

const isRuntimeEnvironmentBrowser = () => typeof window !== undefined && typeof document !== undefined

console.log(isRuntimeEnvironmentBrowser());
