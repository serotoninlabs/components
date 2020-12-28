export interface AppAnalytics {
  logEvent(name: string, data?: any): void;
  setUserId(userId: string): void;
}

export class ConsoleAnalytics implements AppAnalytics {
  public logEvent(name: string, data?: any) {}
  public setUserId(userId: string) {
    console.log("calling setUserId");
  }
}
