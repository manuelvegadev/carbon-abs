export function getEnvVar(envVar: string) {
  return import.meta.env["VITE_" + envVar];
}

export function getCodigoEstacion() {
  return Number(document.body.getAttribute("data-codigo-estacion"));
}

export class DeferredPromise {
  promise: Promise<void>;
  reject: ((reason?: any) => void) | undefined;
  resolve: ((value?: void | PromiseLike<void> | undefined) => void) | undefined;

  constructor(onFinally?: () => void) {
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject;
      this.resolve = resolve;
    });
    this.promise.finally(onFinally);
  }
}
