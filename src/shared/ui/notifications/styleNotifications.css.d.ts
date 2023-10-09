declare namespace StyleNotificationsCssNamespace {
  export interface IStyleNotificationsCss {
    closeBtn: string;
    container: string;
    error: string;
    fadeIn: string;
    info: string;
    notification: string;
    success: string;
    warn: string;
  }
}

declare const StyleNotificationsCssModule: StyleNotificationsCssNamespace.IStyleNotificationsCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleNotificationsCssNamespace.IStyleNotificationsCss;
};

export = StyleNotificationsCssModule;
