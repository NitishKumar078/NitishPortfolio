declare module "@vercel/speed-insights/next" {
  import { ComponentType } from "react";

  export interface SpeedInsightsProps {
    dsn?: string;
    sampleRate?: number;
    beforeSend?: (event: any) => any;
    debug?: boolean;
    scriptSrc?: string;
    endpoint?: string;
  }

  export const SpeedInsights: ComponentType<SpeedInsightsProps>;
}
