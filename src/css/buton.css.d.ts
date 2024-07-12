declare namespace ButonCssNamespace {
  export interface IButonCss {
    button: string;
    "button-m": string;
  }
}

declare const ButonCssModule: ButonCssNamespace.IButonCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ButonCssNamespace.IButonCss;
};

export = ButonCssModule;
